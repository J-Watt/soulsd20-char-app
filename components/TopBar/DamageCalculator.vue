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
          Resistances
        </div>

        <div class="flex justify-end items-end text-right h-1/3">
          HP Loss
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

        <div class="flex justify-between border rounded-sm">
          <div class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
            {{ playerStore.UserInputValues.BonusResistances.Physical }}
            
          </div>

          <div  class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
            {{ playerStore.UserInputValues.BonusResistances.Magic }}
            <span v-if="playerStore.UserInputValues.BonusResistances.FlatMagic" class="ml-1">
              (- {{ playerStore.UserInputValues.BonusResistances.FlatMagic }})
            </span>
          </div>
          
          <div  class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
            {{ playerStore.UserInputValues.BonusResistances.Fire }}
            <span v-if="playerStore.UserInputValues.BonusResistances.FlatFire" class="ml-1">
              (- {{ playerStore.UserInputValues.BonusResistances.FlatFire }})
            </span>
          </div>
          
          <div  class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
            {{ playerStore.UserInputValues.BonusResistances.Lightning }}
            <span v-if="playerStore.UserInputValues.BonusResistances.FlatLightning" class="ml-1">
              (- {{ playerStore.UserInputValues.BonusResistances.FlatLightning }})
            </span>
          </div>
          
          <div  class="flex justify-center items-center w-1/5 h-5 bg-white text-charcoal">
            {{ playerStore.UserInputValues.BonusResistances.Dark }}
            <span v-if="playerStore.UserInputValues.BonusResistances.FlatDark" class="ml-1">
              (- {{ playerStore.UserInputValues.BonusResistances.FlatDark }})
            </span>
          </div>
        </div>

        <div class="flex justify-between border rounded-sm">
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamagePhysical)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamagePhysical > 0">-</span>
              {{ calculatorDamagePhysical }}

              <span v-if="playerStore.UserInputValues.BonusResistances.FlatPhysical && (calculatorDamagePhysical && calculatorDamageInput)" class="ml-[2px]">
                <span class="mr-[-5px]">
                  (
                </span>
                  <span v-if="playerStore.UserInputValues.BonusResistances.FlatPhysical > 0">+</span>
                  <span>
                    {{ playerStore.UserInputValues.BonusResistances.FlatPhysical }}
                  </span>
                  <span class="ml-[-3px]">
                  )
                </span>
              </span>
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageMagic)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageMagic > 0">-</span>
              {{ calculatorDamageMagic }}
              
              <span v-if="playerStore.UserInputValues.BonusResistances.FlatMagic && (calculatorDamageMagic && calculatorDamageInput)" class="ml-[2px]">
                <span class="mr-[-5px]">
                  (
                </span>
                  <span v-if="playerStore.UserInputValues.BonusResistances.FlatMagic > 0">+</span>
                  <span>
                    {{ playerStore.UserInputValues.BonusResistances.FlatMagic }}
                  </span>
                  <span class="ml-[-3px]">
                  )
                </span>
              </span>
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageFire)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageFire > 0">-</span>
              {{ calculatorDamageFire }}

              <span v-if="playerStore.UserInputValues.BonusResistances.FlatFire && (calculatorDamageFire && calculatorDamageInput)" class="ml-[2px]">
                <span class="mr-[-5px]">
                  (
                </span>
                  <span v-if="playerStore.UserInputValues.BonusResistances.FlatFire > 0">+</span>
                  <span>
                    {{ playerStore.UserInputValues.BonusResistances.FlatFire }}
                  </span>
                  <span class="ml-[-3px]">
                  )
                </span>
              </span>
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageLightning)">
            <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageLightning > 0">-</span>
              {{ calculatorDamageLightning }}

              <span v-if="playerStore.UserInputValues.BonusResistances.FlatLightning && (calculatorDamageLightning && calculatorDamageInput)" class="ml-[2px]">
                <span class="mr-[-5px]">
                  (
                </span>
                  <span v-if="playerStore.UserInputValues.BonusResistances.FlatLightning > 0">+</span>
                  <span>
                    {{ playerStore.UserInputValues.BonusResistances.FlatLightning }}
                  </span>
                  <span class="ml-[-3px]">
                  )
                </span>
              </span>
            </div>
          </button>
          <button class="w-full h-5 overflow-hidden" style="max-width: 56px;" @click="takeDamage(calculatorDamageDark)">
            <div class="w-full text-center hover:bg-red-100 bg-white text-charcoal">
              <span v-if="calculatorDamageDark > 0">-</span>
              {{ calculatorDamageDark }}

              <span v-if="playerStore.UserInputValues.BonusResistances.FlatDark && (calculatorDamageDark && calculatorDamageInput)" class="ml-[2px]">
                <span class="mr-[-5px]">
                  (
                </span>
                  <span v-if="playerStore.UserInputValues.BonusResistances.FlatDark > 0">+</span>
                  <span>
                    {{ playerStore.UserInputValues.BonusResistances.FlatDark }}
                  </span>
                  <span class="ml-[-3px]">
                  )
                </span>
              </span>
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