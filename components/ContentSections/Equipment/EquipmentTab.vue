<template>
  <div class="flex w-full" style="height: calc(100vh - 268px);">
    <div class="w-2/4 border-r border-white">
      <div class="flex flex-col items-center h-full p-4 text-white" style="max-height: 700px;">
        <h1 class="w-full flex justify-center mb-16 text-white text-2xl font-semibold">
          Equipment
        </h1>
        
        <div class="flex flex-1 flex-col w-full max-w-screen-md p-4 text-lg">
          <div class="flex flex-1 justify-between space-x-8 mb-16">
            <div class="flex flex-col w-1/5">
              <div class="h-2/4 p-4 mb-8 aspect-square" />
    
              <button class="flex items-center justify-center border border-white h-2/4 p-4 aspect-square text-center" @click="selectedSlot = 'MainHand'">
                {{ equippedItems.MainHand.Name || 'Main Hand' }}
              </button>
            </div>
    
            <button class="flex items-center justify-center border border-white p-4 text-center w-3/5" @click="selectedSlot = 'Armor'">
              {{ equippedItems.Armor.Name || 'Armor' }}
            </button>
    
            <div class="flex flex-col w-1/5">
              <div class="flex items-center justify-center mb-8 h-2/4 aspect-square">
                <button class="flex items-center justify-center border border-white p-4 aspect-square" @click="selectedSlot = 'Artifact'">
                  {{ equippedItems.Artifact.Name || 'Artifact' }}
                </button>
              </div>
    
              <button class="flex items-center justify-center border border-white h-2/4 p-4 aspect-square" @click="selectedSlot = 'OffHand'">
                {{ equippedItems.OffHand.Name || 'Off Hand' }}
              </button>
            </div>
          </div>
    
          <div class="flex justify-around space-x-8">
            <button class="flex items-center justify-center border border-white p-4 aspect-square text-center" @click="selectedSlot = 'Ring1'">
              {{ equippedItems.Ring1.Name || 'Ring 1' }}
            </button>
    
            <button class="flex items-center justify-center border border-white p-4 aspect-square text-center" @click="selectedSlot = 'Ring2'">
              {{ equippedItems.Ring2.Name || 'Ring 2' }}
            </button>
    
            <button class="flex items-center justify-center border border-white p-4 aspect-square text-center" @click="selectedSlot = 'Ring3'">
              {{ equippedItems.Ring3.Name || 'Ring 3' }}
            </button>
    
            <button class="flex items-center justify-center border border-white p-4 aspect-square text-center" @click="selectedSlot = 'Ring4'">
              {{ equippedItems.Ring4.Name || 'Ring 4' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/4 h-full p-4">
      <div v-if="selectedSlot">
        <h1 class="w-full flex justify-center mb-16 text-white text-2xl font-semibold">
          Select {{ equipDescription }}
        </h1>
        <div class="flex flex-wrap w-full h-96 text-xs">
          <div v-if="inventoryItems.length === 0" class="flex justify-center  w-full text-white text-2xl">
            You have no {{ itemCategoryDescription }} in your inventory
          </div>
          <div v-else>
            <button v-for="item in inventoryItems" :key="item.Name" class="flex justify-center items-center text-center relative m-3 w-28 h-28 rounded-sm bg-gray-300" @click="equipItem(item)">
              <span>
                {{ item.Name }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Item, usePlayerStore } from "~~/store/player"
import * as invutils from '@/mixins/invutils'

const store = usePlayerStore()

const selectedSlot = shallowRef('')

const itemCategoryDescription = computed(()=>{
  return invutils.itemCategoryDescription(slotType.value)
})

const slotType = computed(()=>{
  switch (selectedSlot.value) {
    case 'MainHand':
      return 'weapon'
      case 'OffHand':
      return 'weapon'
      case 'Armor':
      return 'armor'
      case 'Artifact':
      return 'artifact'
      case 'Ring1':
      return 'ring'
      case 'Ring2':
      return 'ring'
      case 'Ring3':
      return 'ring'
      case 'Ring4':
      return 'ring'
  }

  return ''
})

const equipDescription = computed(()=>{
  switch (selectedSlot.value) {
    case 'MainHand':
      return 'a main weapon'
      case 'OffHand':
      return 'an off hand'
      case 'Armor':
      return 'an armor set'
      case 'Artifact':
      return 'an artifact'
      case 'Ring1':
      return 'a ring for your 1st slot'
      case 'Ring2':
      return 'a ring for your 2nd slot'
      case 'Ring3':
      return 'a ring for your 3rd slot'
      case 'Ring4':
      return 'a ring for your 4th slot'
  }

  return ''
})

const inventoryItems = computed(()=>{
  return store.Inventory.filter(i => i.Category === slotType.value)
})

const equippedItems = ref({
  MainHand: {},
  OffHand: {},
  Armor: {},
  Artifact: {},
  Ring1: {},
  Ring2: {},
  Ring3: {},
  Ring4: {},
})

function equipItem(item: Item) {
  try {
    (equippedItems.value as any)[selectedSlot.value] = item
    console.log(equippedItems.value)
    selectedSlot.value = ''
  } catch {}
}
</script>

<style scoped>
</style>