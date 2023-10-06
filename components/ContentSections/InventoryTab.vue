<template>
  <div class="flex w-full" style="min-height: calc(100vh - 268px);">
    <div class="w-2/4 h-full p-4 border-r border-white">
      <h1 class="w-full flex justify-center mb-4 text-white text-2xl font-semibold">
        Inventory
      </h1>
  
      <div class="flex justify-between bg-white rounded-md mb-12">
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
  
        <button class="text-center flex-1" :class="activeTab === 'artifacts' && 'bg-[#2a5573] text-white'" @click="activeTab = 'artifact'">
          <div class="p-1">
            Artifacts
          </div>
        </button>
      </div>
  
      <div class="flex flex-wrap w-full h-96 text-xs">
        <div v-if="inventoryItems.length === 0" class="flex justify-center  w-full text-white text-2xl">
          You have no {{ itemCategoryDescription }} in your inventory
        </div>
        <div v-else>
          <div v-for="item in inventoryItems" :key="item.Name" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm bg-gray-300">
            <span>
              {{ item.Name }}
            </span>
    
            <div class="flex absolute top-0 left-0">
              <button class="flex items-center justify-center bg-blue-900 text-white w-5 h-5" @click="decreaseItemQuantity(item)">
                -
              </button>
              <button class="flex items-center justify-center bg-blue-900 text-white rounded-br-sm w-5 h-5" @click="increaseItemQuantity(item)">
                +
              </button>
            </div>
    
            <span class="flex items-center justify-center absolute top-0 right-0 bg-blue-900 text-white rounded-sm w-5 h-5">
              {{ item.Quantity }}
            </span>
          </div>
        </div>
      </div>
  
      <h1 class="w-full flex justify-center my-2 text-white text-2xl font-semibold">
        Items
      </h1>
  
      <div class="flex flex-wrap w-full text-xs">
        <div v-for="item in allItems" :key="'item-' + item.Name" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm border bg-concrete">
          <span>
            {{ item.Name }}
          </span>
  
          <div class="absolute top-1 left-1">
            <button class="text-xs" @click="addItem(item)">
              Add
            </button>
          </div>
        </div>
  
        <div>
          <button @click="createItem" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm border bg-concrete">
            Create item
          </button>
        </div>
      </div>
    </div>

    <div class="w-2/4 h-full p-4">

    </div>
  </div>
</template>

<script setup lang="ts">
import { Item, usePlayerStore } from '@/store/player'
import * as invutils from '@/mixins/invutils'

const emit = defineEmits(['tab'])

const store = usePlayerStore()
const allItems = ref(store.Items)

const activeTab = shallowRef('all')

const itemCategoryDescription = computed(()=>{
  return invutils.itemCategoryDescription(activeTab.value)
})

const inventoryItems = computed(()=>{
  return store.Inventory.filter(i => i.Category === activeTab.value || activeTab.value === 'all')
})

function createItem() {
  store.createItem({
    Name: 'Steel plate armor',
    Category: 'armor',
    Quantity: 1,
  })
}

function addItem(item: Item) {
  store.addInventoryItem(item.Name)
}

function increaseItemQuantity(item: Item) {
  store.increaseItemQuantity(item.Name)
}

function decreaseItemQuantity(item: Item) {
  store.decreaseItemQuantity(item.Name)
}

function emitTab(tabOption: string) {
  emit('tab', tabOption)
}
</script>

<style scoped>
</style>