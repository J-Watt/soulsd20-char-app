<template>
  <div>
    <h1 class="w-full flex justify-center my-2 text-white text-2xl font-semibold">
      Inventory
    </h1>

    <div class="flex flex-wrap w-full h-96 text-xs">
      <div v-if="inventoryItems.length === 0">
        
      </div>
      <div v-for="item in inventoryItems" :key="item.name" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm bg-gray-300">
        <span>
          {{ item.name }}
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
          {{ item.quantity }}
        </span>
      </div>
    </div>

    <h1 class="w-full flex justify-center my-2 text-white text-2xl font-semibold">
      Items
    </h1>

    <div class="flex flex-wrap w-full text-xs">
      <div v-for="item in allItems" :key="'item-' + item.name" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm border bg-gray-300">
        <span>
          {{ item.name }}
        </span>

        <div class="absolute top-1 left-1">
          <button class="text-xs" @click="addItem(item)">
            Add
          </button>
        </div>
      </div>

      <div>
        <button @click="createItem" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm border bg-gray-300">
          Create item
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Item, usePlayerStore } from '@/store/player'

// const props = defineProps({
// })

const emit = defineEmits(['tab'])

const store = usePlayerStore()
const inventoryItems = ref(store.inventory)
const allItems = ref(store.items)

function createItem() {
  store.createItem({
    name: 'da ting',
    quantity: 1,
  })
}

function addItem(item: Item) {
  store.addInventoryItem(item.name)
}

function increaseItemQuantity(item: Item) {
  store.increaseItemQuantity(item.name)
}

function decreaseItemQuantity(item: Item) {
  store.decreaseItemQuantity(item.name)
}

function emitTab(tabOption: string) {
  emit('tab', tabOption)
}
</script>

<style scoped>
</style>