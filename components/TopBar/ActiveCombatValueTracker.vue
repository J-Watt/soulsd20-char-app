<template>
  <div class="flex h-full">
    <div class="flex flex-col justify-between w-full px-3 py-3 min-w-[100px]">
      <div class="relative w-full h-7 text-center rounded overflow-hidden">
        <div class="absolute h-full bg-[#790000] rounded-md" :style="`width: ${hpPercentage}%`" />
        <div class="absolute z-10 left-2/4 top-2/4 origin-center" style="transform: translate(-50%, -50%)">
          <input
            v-model="playerStore.UserInputValues.CurrentHP"
            type="number"
            min="0"
            class="w-fit max-w-[40px] text-right bg-transparent"
            @change="setHP"
          />

          <span>
            /
          </span>

          <span>
            {{ maxHp }}
          </span>
        </div>
      </div>

      <div class="relative w-full h-7 text-center rounded overflow-hidden">
        <div class="absolute h-full bg-[#295A72] rounded-md" :style="`width: ${fpPercentage}%`" />
        <div class="absolute z-10 left-2/4 top-2/4 origin-center" style="transform: translate(-50%, -50%)">
          <input
            v-model="playerStore.UserInputValues.CurrentFP"
            type="number"
            min="0"
            class="w-fit max-w-[40px] text-right bg-transparent"
            @change="setFP"
          />

          <span>
            /
          </span>

          <span>
            {{ maxFp }}
          </span>
        </div>
      </div>

      <div class="relative w-full h-7 text-center rounded overflow-hidden">
        <div class="absolute h-full bg-[#2A6B21] rounded-md" :style="`width: ${apPercentage}%`" />
        <div class="absolute z-10 left-2/4 top-2/4 origin-center" style="transform: translate(-50%, -50%)">
          <input
            v-model="playerStore.UserInputValues.CurrentAP"
            type="number"
            min="0"
            class="w-fit max-w-[40px] text-right bg-transparent"
            @change="setAP"
          />

          <span>
            /
          </span>

          <span>
            {{ maxAp }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col border-l">
      <div class="flex w-full h-1/3">
        <button @click="drinkFlask('hp')" class="w-full mx-1">
          <div class="flex w-full justify-center p-1 text-center">
            {{ playerStore.UserInputValues.HpFlask }} <img src="@/img/icons/flask.png" class="w-6" style="filter: brightness(0) invert(0.9);">
          </div>
        </button>

        <div class="flex flex-col w-7">
          <button class="flex items-center justify-center h-1/2 border-b bg-teal" @click="addFlask('hp')">
            <UIcon name="i-heroicons-chevron-up" />
          </button>

          <button class="flex items-center justify-center h-1/2 bg-teal" @click="removeFlask('hp')">
            <UIcon name="i-heroicons-chevron-down" />
          </button>
        </div>
      </div>

      <div class="flex w-full h-1/3 border-t">
        <button @click="drinkFlask('fp')" class="w-full mx-1">
          <div class="flex p-1 w-full justify-center text-center">
            {{ playerStore.UserInputValues.FpFlask }} <img src="@/img/icons/flask.png" class="w-6" style="filter: brightness(0) invert(0.9);">
          </div>
        </button>

        <div class="flex flex-col w-7">
          <button class="flex items-center justify-center h-1/2 border-b bg-teal" @click="addFlask('fp')">
            <UIcon name="i-heroicons-chevron-up" />
          </button>

          <button class="flex items-center justify-center h-1/2 bg-teal" @click="removeFlask('fp')">
            <UIcon name="i-heroicons-chevron-down" />
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-1/3 border-t select-none">
        Flask lv.
        <span>
          +{{ playerStore.UserInputValues.FlaskLevel }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statMod } from '~~/mixins/utils';
import { usePlayerStore } from '~~/store/player';
import * as utils from '@/mixins/utils'

const playerStore = usePlayerStore()

const maxHp = computed(()=>{
  const backgroundStartingHP = utils.getBackgroundHP(playerStore.Background)
  return backgroundStartingHP + playerStore.UserInputValues.MaxHPBonus
})

const maxFp = computed(()=>{
  let baseFP = 5
  if (playerStore.CharacterStats.Stats.Attunement >= 10) {
    baseFP += playerStore.CharacterStats.Stats.Attunement - 10
  } else {
    baseFP += statMod(playerStore.CharacterStats.Stats.Attunement)
  }
  return baseFP + playerStore.UserInputValues.MaxFPBonus
})

const maxAp = computed(()=>{
  return 8 + statMod(playerStore.CharacterStats.Stats.Endurance) + playerStore.UserInputValues.MaxAPBonus
})

let hpPercentage = computed(()=>{
  try {
    return Math.max((playerStore.UserInputValues.CurrentHP / maxHp.value) * 100, 0)
  } catch {}
  return 0
})

let fpPercentage = computed(()=>{
  try {
    return Math.max((playerStore.UserInputValues.CurrentFP / maxFp.value) * 100, 0)
  } catch {}
  return 0
})

let apPercentage = computed(()=>{
  try {
    return Math.max((playerStore.UserInputValues.CurrentAP / maxAp.value) * 100, 0)
  } catch {}
  return 0
})

const hpFlaskRestoreAmount = computed<number>(()=>{
  if (playerStore.UserInputValues.FlaskLevel === 0) {
    return 15
  }
  
  return 15 + (15 * playerStore.UserInputValues.FlaskLevel)
})

const fpFlaskRestoreAmount = computed<number>(()=>{
  if (playerStore.UserInputValues.FlaskLevel === 0) {
    return 5
  }
  
  return 5 + (2 * playerStore.UserInputValues.FlaskLevel)
})

function drinkFlask(type: string) {
  if (type === 'hp') {
    if (playerStore.UserInputValues.HpFlask === 0) return
    playerStore.UserInputValues.CurrentHP = Math.min(playerStore.UserInputValues.CurrentHP + hpFlaskRestoreAmount.value, maxHp.value)
    playerStore.UserInputValues.HpFlask--
  } else {
    if (playerStore.UserInputValues.FpFlask === 0) return
    playerStore.UserInputValues.CurrentFP = Math.min(playerStore.UserInputValues.CurrentFP + fpFlaskRestoreAmount.value, maxFp.value)
    playerStore.UserInputValues.FpFlask--
  }
}

function addFlask(type: string) {
  if (type === 'hp') {
    playerStore.UserInputValues.HpFlask++
  } else {
    playerStore.UserInputValues.FpFlask++
  }
}

function removeFlask(type: string) {
  if (type === 'hp') {
    playerStore.UserInputValues.HpFlask--
    if (playerStore.UserInputValues.HpFlask < 0) playerStore.UserInputValues.HpFlask = 0
  } else {
    playerStore.UserInputValues.FpFlask--
    if (playerStore.UserInputValues.FpFlask < 0) playerStore.UserInputValues.FpFlask = 0
  }
}

function setHP() {
  if (!playerStore.UserInputValues.CurrentHP) playerStore.UserInputValues.CurrentHP = 0
}

function setFP() {
  if (!playerStore.UserInputValues.CurrentFP) playerStore.UserInputValues.CurrentFP = 0
}

function setAP() {
  if (!playerStore.UserInputValues.CurrentAP) playerStore.UserInputValues.CurrentAP = 0
}
</script>