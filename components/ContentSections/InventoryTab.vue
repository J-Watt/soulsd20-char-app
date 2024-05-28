<template>
  <div class="flex flex-col w-full h-full overflow-hidden main-tab">
    <h1 class="py-4 bg-dismid w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
      Inventory & Equipment
    </h1>

    <div class="flex h-full">
      <div class="flex flex-col h-full w-3/5 border-r">
        <div class="flex justify-between w-5/6 mx-auto mt-4 bg-white rounded-md z-20">
          <button v-for="tab in typeTabs"
            :key="'tab' + tab.Identifier"
            class="text-center border-r last:border-r-0 border-black flex-1"
            :class="activeTab === tab.Identifier && 'bg-[#2a5573] text-white'"
            @click="activeTab = tab.Identifier"
          >
            <div class="p-1">
              {{ tab.Name }}
            </div>
          </button>
        </div>
  
        <div class="overflow-auto">
          <h1 class="sticky top-0 w-full flex justify-center py-4 bg-dislight text-white text-2xl font-semibold border-b">
            Inventory
          </h1>
          
          <div class="w-full border-b text-xs px-4">
            <div v-if="inventoryItems.length === 0" class="flex justify-center items-center w-full text-white text-2xl" style="min-height: 184px;">
              You have no {{ itemCategoryDescription }} in your inventory
            </div>
            <div v-else class="flex flex-wrap w-full inv py-4">
              <div v-for="item in inventoryItems" :key="item.Name" class="flex flex-col justify-between items-center text-center relative m-3 w-28 h-28 rounded-sm overflow-hidden bg-white">
                <div class="flex items-center h-full font-bold text-lg px-1">
                  {{ item.Name }}
                </div>
        
                <span class="flex items-center justify-center absolute top-0 left-0 bg-teal text-white font-bold w-4 h-4">
                  {{ item.Quantity }}
                </span>
      
                <button class="flex items-center justify-center absolute top-0 right-0 rounded w-4 h-4" @click="deleteItem(item)">
                  X
                </button>
      
                <div class="flex absolute bottom-0 w-full">
                  <button class="flex items-center justify-center bg-teal border-r text-white text-lg w-2/4 h-4" @click="decreaseItemQuantity(item)">
                    -
                  </button>
                  <button class="flex items-center justify-center bg-teal text-white w-2/4 h-4" @click="increaseItemQuantity(item)">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
      
          <h1 class="sticky top-0 py-4 w-full flex justify-center text-white bg-dislight text-2xl font-semibold border-b z-10">
            All items
          </h1>
      
          <div class="p-4 mb-20">
            <div class="flex flex-wrap w-full text-xs">
              <div v-for="item in allItems" :key="'item-' + item.Name" class="flex flex-col justify-between items-center text-center relative m-3 w-28 h-28 rounded bg-white overflow-hidden">
                <div class="flex items-center justify-center flex-1 text-lg p-1 overflow-hidden text-ellipsis" :class="item.Name.length > 28 && 'text-base'" style="max-height: 96px; width: 112px;">
                  <div class="overflow-hidden text-ellipsis block text-center max-h-full">
                    {{ item.Name }}
                  </div>
                </div>
                
                <button v-if="itemNotInInventory(item)" class="w-full h-4 text-white text-xs bg-teal" @click="addItem(item)">
                  Add
                </button>
      
                <span v-else class="w-full h-4 rounded-bl-sm text-white text-xs bg-charcoal">
                  In inventory
                </span>
              </div>
        
              <UPopover>
                <button @click="creatingItem = true" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm text-lg bg-white">
                  Create item
                </button>
                <template #panel>
                  <div class="flex flex-col h-fit space-y-1 p-2 rounded-sm bg-white">
                    <div class="flex justify-between items-center">
                      <span class="mr-2">
                        Name
                      </span>
                      <input v-model="createItemName" class="bg-white border rounded-sm p-1" />
                    </div>
                    
                    <div class="flex justify-between items-center">
                      <span class="mr-2">
                        Description
                      </span>
                      <input v-model="createItemDescription" class="bg-white border rounded-sm p-1" />
                    </div>

                    <div class="flex justify-between items-center">
                      <span class="mr-2">
                        Type
                      </span>
                      <USelect
                        v-model="createItemType"
                        :options="itemTypeOptions"
                        option-attribute="name"
                        :ui="{
                          ring: 'ring-0 focus:ring-0',
                        }"
                      />
                    </div>
                    
                    <button @click="createItem" class="text-white bg-teal rounded-sm w-12 mt-2 self-end">Create</button>
                  </div>
                </template>
              </UPopover>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as invutils from '@/mixins/invutils'
import { Item } from '@/mixins/types'
import { usePlayerStore } from '@/store/player'
import { useCompendiumStore } from '~~/store/compendium'

const store = usePlayerStore()
const compendiumStore = useCompendiumStore()

const itemTypeOptions = [
  { name: 'Tool', value: 'tools' },
  { name: 'Miscellaneous', value: 'misc' },
  { name: 'Weapon', value: 'weapon' },
  { name: 'Armor', value: 'armor' },
  { name: 'Ring', value: 'ring' },
  { name: 'Artifact', value: 'artifact' }
]

const activeTab = shallowRef('all')
const creatingItem = shallowRef(false)
const createItemName = shallowRef('')
const createItemDescription = shallowRef('')
const createItemType = ref(itemTypeOptions[0].value)

const itemCategoryDescription = computed(()=>{
  return invutils.itemCategoryDescription(activeTab.value)
})

const inventoryItems = computed(()=>{
  return store.Inventory.filter(i => i.Category === activeTab.value || activeTab.value === 'all')
})

const allItems = computed(()=> {
  return compendiumStore.Items.filter(i => i.Category === activeTab.value || activeTab.value === 'all')
})



const typeTabs = [
  { Name: 'All', Identifier: 'all', },
  { Name: 'Items', Identifier: 'tools', },
  { Name: 'Items', Identifier: 'misc', },
  { Name: 'Weapons', Identifier: 'weapon', },
  { Name: 'Armor', Identifier: 'armor', },
  { Name: 'Rings', Identifier: 'ring', },
  { Name: 'Artifacts', Identifier: 'artifact', },
]

function createItem() {
  compendiumStore.createItem({
    UUID: createItemName.value,
    Name: createItemName.value,
    Description: createItemDescription.value,
    Category: createItemType.value,
    Quantity: 1,
  })

  creatingItem.value = false
}

function addItem(item: Item) {
  store.addInventoryItem(item.UUID)
}

function deleteItem(item: Item) {
  store.removeInventoryItem(item.UUID)
}

function increaseItemQuantity(item: Item) {
  store.increaseItemQuantity(item.UUID)
}

function decreaseItemQuantity(item: Item) {
  store.decreaseItemQuantity(item.UUID)
}

function itemNotInInventory(item: Item) {
  if (!store.Inventory.find(i => i.UUID === item.UUID)) return true
}
</script>