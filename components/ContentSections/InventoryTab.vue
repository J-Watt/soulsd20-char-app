<template>
  <div class="flex w-full overflow-hidden inv-tab" style="height: calc(100vh - 280px);">
    <div class="flex flex-col w-2/4 h-full pt-4 border-r border-white overflow-auto">
      <div>
        <h1 class="w-full flex justify-center mb-4 text-white text-2xl font-semibold">
          Inventory
        </h1>
    
        <div class="flex justify-between bg-white rounded-md overflow-hidden">
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'all' && 'bg-[#2a5573] text-white'" @click="activeTab = 'all'">
            <div class="p-1">
              All
            </div>
          </button>
    
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'tools' && 'bg-[#2a5573] text-white'" @click="activeTab = 'tools'">
            <div class="p-1">
              Items (tools)
            </div>
          </button>
    
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'misc' && 'bg-[#2a5573] text-white'" @click="activeTab = 'misc'">
            <div class="p-1">
              Items (misc.)
            </div>
          </button>
    
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'weapon' && 'bg-[#2a5573] text-white'" @click="activeTab = 'weapon'">
            <div class="p-1">
              Weapons
            </div>
          </button>
    
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'armor' && 'bg-[#2a5573] text-white'" @click="activeTab = 'armor'">
            <div class="p-1">
              Armor
            </div>
          </button>
    
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'ring' && 'bg-[#2a5573] text-white'" @click="activeTab = 'ring'">
            <div class="p-1">
              Rings/Adornments
            </div>
          </button>
    
          <button class="text-center flex-1" :class="activeTab === 'artifact' && 'bg-[#2a5573] text-white'" @click="activeTab = 'artifact'">
            <div class="p-1">
              Artifacts
            </div>
          </button>
        </div>
      </div>
    
      <div class="relative flex flex-col h-full mb-4">
        <div class="w-full  text-xs px-4 border-b">
          <div v-if="inventoryItems.length === 0" class="flex justify-center items-center w-full text-white text-2xl" style="min-height: 184px;">
            You have no {{ itemCategoryDescription }} in your inventory
          </div>
          <div v-else class="flex flex-wrap w-full inv mt-6 pb-6">
            <div v-for="item in inventoryItems" :key="item.Name" class="flex flex-col justify-between items-center text-center relative m-3 w-28 h-28 rounded-sm overflow-hidden bg-white">
              <div class="flex items-center h-full font-bold text-lg px-1">
                {{ item.Name }}
              </div>
      
              <div class="flex absolute bottom-0 w-full">
                <button class="flex items-center justify-center bg-blue-900 border-r text-white w-2/4 h-4" @click="decreaseItemQuantity(item)">
                  -
                </button>
                <button class="flex items-center justify-center bg-blue-900 text-white w-2/4 h-4" @click="increaseItemQuantity(item)">
                  +
                </button>
              </div>
      
              <span class="flex items-center justify-center absolute top-0 left-0 bg-blue-900 rounded-br-sm text-white font-bold rounded-bl-sm w-4 h-4">
                {{ item.Quantity }}
              </span>

              <button class="flex items-center justify-center absolute top-0 right-0 rounded-bl-sm w-4 h-4" @click="deleteItem(item)">
                X
              </button>
            </div>
          </div>
        </div>
    
        <div class="px-4">
          <h1 class="w-full flex justify-center my-4 text-white text-2xl font-semibold">
            Items
          </h1>
      
          <div class="flex flex-wrap w-full text-xs">
            <div v-for="item in allItems" :key="'item-' + item.Name" class="flex flex-col justify-between items-center text-center relative m-3 w-28 h-28 rounded-sm bg-white overflow-hidden">
              <div class="flex items-center h-full text-lg px-1">
                {{ item.Name }}
              </div>
              
              <button v-if="itemNotInInventory(item)" class="w-full h-4 rounded-bl-sm text-white text-xs bg-blue-900" @click="addItem(item)">
                Add
              </button>

              <span v-else class="w-full h-4 rounded-bl-sm text-white text-xs bg-charcoal">
                In inventory
              </span>
            </div>
      
            <div>
              <button @click="createItem" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm text-lg bg-white">
                Create item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/4 h-full p-4">

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

const allItems = computed(()=> {
  return compendiumStore.Items.filter(i => i.Category === activeTab.value || activeTab.value === 'all')
})

const activeTab = shallowRef('all')

const itemCategoryDescription = computed(()=>{
  return invutils.itemCategoryDescription(activeTab.value)
})

const inventoryItems = computed(()=>{
  return store.Inventory.filter(i => i.Category === activeTab.value || activeTab.value === 'all')
})

function createItem() {
  compendiumStore.createItem({
    UUID: 'Steel plate armor',
    Name: 'Steel plate armor',
    Category: 'armor',
    Quantity: 1,
  })
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

<style scoped lang="less">
</style>