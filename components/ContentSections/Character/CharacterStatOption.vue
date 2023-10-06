<template>
  <div class="flex justify-between items-center w-full h-1/6 text-white">
    <div class="mr-8">
      {{ name }}
    </div>

    <div class="flex justify-end">
      <div class="flex justify-center items-center border w-8 h-5 mr-2">
        {{ mod }}
      </div>
  
      <input v-model="stat" type="number" class="bg-blackish text-center pl-1 w-12" @change="updatePlayerStat" />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as utils from '@/mixins/utils'
import { usePlayerStore } from '@/store/player'

const playerStore = usePlayerStore()

const props = defineProps({
  name: {
    Type: String,
    default: ''
  },
  identifier: {
    Type: String,
    default: ''
  },
  sType: {
    Type: String,
    default: ''
  },
  statAmount: {
    Type: Number,
    default: 0
  }
})

const stat = shallowRef(props.statAmount)
const mod = computed(()=>{
  if (props.sType === 'stat') {
    return utils.statMod(stat.value)
  } else if (props.sType === 'skill') {
    return props.statAmount + utils.skillModBonusFromStats(props.identifier)
  }

  return stat.value
})

function updatePlayerStat() {
  if (props.sType === 'skill') (playerStore.Skills as any)[props.identifier] = stat.value
  else if (props.sType === 'stat') (playerStore.Stats as any)[props.identifier] = stat.value
  else if (props.sType === 'knowledge') (playerStore.Knowledge as any)[props.identifier] = stat.value
}
</script>