<template>
  <div class="flex flex-col h-full w-full">
    <div class="flex justify-between mb-3">
      <h1 class="text-lg text-white mr-3">
        Damage calculator
      </h1>

      <div class="flex items-center">
        <span class="w-28">
          Initial damage
        </span>

        <input v-model="calculatorDamageInput" min="0" type="number" class="bg-white rounded-sm text-charcoal text-center w-10" />
      </div>
    </div>

    <div class="flex w-full h-full">
      <div class="flex flex-col justify-between w-24 h-full mr-2">
        <div class="h-1/3" />

        <div class="flex justify-end items-center h-1/3">
          Resistance
        </div>

        <div class="flex justify-end items-center h-1/3">
          Extra Flat
        </div>

        <div class="flex justify-end items-end text-right h-1/3">
          Result
        </div>
      </div>

      <div class="flex flex-col justify-between h-full w-full">
        <div class="flex justify-between">
          <div class="flex justify-center w-1/5 px-2">
            Physical
          </div>

          <div class="flex justify-center w-1/5 px-2">
            Magic
          </div>

          <div class="flex justify-center w-1/5 px-2">
            Fire
          </div>

          <div class="flex justify-center w-1/5 px-2">
            Lightning
          </div>

          <div class="flex justify-center w-1/5 px-2">
            Dark
          </div>
        </div>
<!-- function setAmt() {
  if (!stat.value) stat.value = 0
  updatePlayerValue('set')
} -->
        <div class="flex justify-between rounded-sm">
          <input v-model="playerStore.UserInputValues.BonusResistances.Physical" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.Magic" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.Fire" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.Lightning" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.Dark" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
        </div>

        <div class="flex justify-between rounded-sm">
          <input v-model="playerStore.UserInputValues.BonusResistances.FlatPhysical" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.FlatMagic" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.FlatFire" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.FlatLightning" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
          <input v-model="playerStore.UserInputValues.BonusResistances.FlatDark" class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal text-center" style="max-width: 56px;" />
        </div>

        <div class="flex justify-between rounded-sm">
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamagePhysical)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamagePhysical > 0">-</span>
              {{ calculatorDamagePhysical }} HP
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageMagic)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageMagic > 0">-</span>
              {{ calculatorDamageMagic }} HP
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageFire)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageFire > 0">-</span>
              {{ calculatorDamageFire }} HP
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageLightning)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageLightning > 0">-</span>
              {{ calculatorDamageLightning }} HP
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageDark)">
            <div class="w-full text-center hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageDark > 0">-</span>
              {{ calculatorDamageDark }} HP
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "~~/store/player";

const playerStore = usePlayerStore()

const calculatorDamageInput = ref(0)

const calculatorDamagePhysical = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, playerStore.UserInputValues.BonusResistances.Physical, playerStore.UserInputValues.BonusResistances.FlatPhysical)
})
const calculatorDamageMagic = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, playerStore.UserInputValues.BonusResistances.Magic, playerStore.UserInputValues.BonusResistances.FlatMagic)
})
const calculatorDamageFire = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, playerStore.UserInputValues.BonusResistances.Fire, playerStore.UserInputValues.BonusResistances.FlatFire)
})
const calculatorDamageLightning = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, playerStore.UserInputValues.BonusResistances.Lightning, playerStore.UserInputValues.BonusResistances.FlatLightning)
})
const calculatorDamageDark = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, playerStore.UserInputValues.BonusResistances.Dark, playerStore.UserInputValues.BonusResistances.FlatDark)
})

function calulateDamage(damage: number, resistance: number, flatResistance: number): number {
  const baseResisted = Math.floor(damage * Math.min(resistance * .1, .3))
  return Math.max((damage - baseResisted - resistance - flatResistance), 0)
}

function takeDamage(damageAmount: number) {
  playerStore.UserInputValues.CurrentHP -= damageAmount
  if (playerStore.UserInputValues.CurrentHP < 0) playerStore.UserInputValues.CurrentHP = 0
}
</script>