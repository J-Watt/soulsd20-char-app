<template>
  <div class="flex items-center w-full h-5 rounded-sm bg-white text-charcoal overflow-hidden">
    <div class="flex items-center border-r border-black">
      <button class="flex items-center justify-center bg-blue-900 border-b text-white w-4" @click="decreaseStatus">
        -
      </button>

      <input v-model="inflictionAmt" min="0" type="number" class="text-center px-1 w-6 text-charcoal" />

      <button class="flex items-center justify-center bg-blue-900 border-b text-white w-4" @click="increaseStatus">
        +
      </button>
    </div>

    <div class="flex w-full justify-between items-center mr-3">
      <span class="pl-2 pr-8">
        {{ name }}
      </span>

      <div class="flex justify-end items-center h-5">
        <span class="text-sm mr-2">
          Res: 
        </span>

        <div class="font-bold w-3 text-right">
          {{ resistance }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  resistance: {
    type: Number,
    default: 0
  }
})

const inflictionAmt = shallowRef(0)

function increaseStatus() {
  inflictionAmt.value += 1
}

function decreaseStatus() {
  if (inflictionAmt.value === 0) return
  inflictionAmt.value -= 1
}
</script>

<style lang="less" scoped>
input:focus {
    outline-width: 0;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>