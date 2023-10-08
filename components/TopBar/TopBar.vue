<template>
  <div class="px-3 text-white">
    <div class="flex">
      <!-- Character -->
      <div class="flex items-center w-1/3">
        <!-- Icon box -->
        <div class="flex justify-center items-center w-32 h-32 mr-4">
          <img src="@/img/ok.jpg" class="max-h-32">
        </div>

        <!-- Char name / stats -->
        <div class="flex flex-col h-full justify-between">
          <!-- name -->
          <div class="flex items-center text-4xl h-full text-white">
            {{ playerStore.Name }}
          </div>

          <!-- char stats -->
          <div class="flex mt-2 text-white">
            <!-- left -->
            <div class="flex flex-col space-y-1 border-r py-1 px-2">
              <!-- gender -->
              <div class="w-full text-right">
                Gender
              </div>

              <!-- race -->
              <div class="w-full text-right">
                Race
              </div>

              <!-- class -->
              <div class="w-full text-right">
                Class
              </div>
            </div>

            <div class="flex flex-col px-2 text-sm mr-2">
              <!-- gender -->
              <div class="flex items-center text-left h-1/3 w-full">
                {{ playerStore.Gender }}
              </div>

              <!-- race -->
              <div class="flex items-center text-left h-1/3 w-full">
                {{ playerStore.Race }}
              </div>

              <!-- class -->
              <div class="flex items-center text-left h-1/3 w-full">
                {{ playerStore.Class }}
              </div>
            </div>

            <!-- right -->
            <div>

            </div>
          </div>
        </div>
      </div>

      <!-- HP/AP/FP -->
      <div class="flex w-1/3 border-r border-l" style="max-width: 600px;">
        <div class="flex flex-col border-r">
          <div class="flex w-full h-1/3">
            <button @click="drinkFlask('hp')" class="w-full">
              <div class="flex w-full justify-center p-1 text-center">
                {{ hpFlaskAmount }} <img src="@/img/icons/flask.png" class="w-6" style="filter: brightness(0) invert(0.9);">
              </div>
            </button>
  
            <div class="flex flex-col w-7">
              <button class="flex items-center justify-center h-1/2 border-b bg-blue-900" @click="addFlask('hp')">
                ^
              </button>
  
              <button class="flex items-center justify-center h-1/2 rotate-180 bg-blue-900" @click="removeFlask('hp')">
                ^
              </button>
            </div>
          </div>

          <div class="flex w-full h-1/3 border-t">
            <button @click="drinkFlask('fp')" class="w-full">
              <div class="flex p-1 w-full justify-center text-center">
                {{ fpFlaskAmount }} <img src="@/img/icons/flask.png" class="w-6" style="filter: brightness(0) invert(0.9);">
              </div>
            </button>
  
            <div class="flex flex-col w-7">
              <button class="flex items-center justify-center h-1/2 border-b bg-blue-900" @click="addFlask('fp')">
                ^
              </button>
  
              <button class="flex items-center justify-center h-1/2 rotate-180 bg-blue-900" @click="removeFlask('fp')">
                ^
              </button>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center h-1/3 border-t select-none">
            Bonus
            <span>
              +{{ flaskBonus }}
            </span>
          </div>
        </div>

        <div class="flex flex-col justify-between w-full px-3 py-3">
          <div class="relative w-full h-7 text-center rounded overflow-hidden">
            <div class="absolute h-full bg-[#790000] rounded-md" :style="`width: ${hpPercentage}%`" />
            <div class="absolute z-10 left-2/4 top-2/4 origin-center" style="transform: translate(-50%, -50%)">
              {{ hp }}/{{ maxHp }}
            </div>
          </div>

          <div class="relative w-full h-7 text-center rounded overflow-hidden">
            <div class="absolute h-full bg-[#295A72] rounded-md" :style="`width: ${fpPercentage}%`" />
            <div class="absolute z-10 left-2/4 top-2/4 origin-center" style="transform: translate(-50%, -50%)">
              {{ fp }}/{{ maxFp }}
            </div>
          </div>

          <div class="relative w-full h-7 text-center rounded overflow-hidden">
            <div class="absolute h-full bg-[#2A6B21] rounded-md" :style="`width: ${apPercentage}%`" />
            <div class="absolute z-10 left-2/4 top-2/4 origin-center" style="transform: translate(-50%, -50%)">
              {{ ap }}/{{ maxAp }}
            </div>
          </div>
        </div>
      </div>

      <!-- Resistances & Calc -->
      <div class="flex justify-between w-full py-3 text-sm" style="max-width: 1000px;">
        <!-- Damage calculator -->
        <div class="flex justify-between w-4/6 pl-3" style="max-width: 670px">
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
                  Dmg taken
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
                    {{ resistancePhysical }}
                    <span v-if="flatResistancePhysical" class="ml-1">
                      (- {{ flatResistancePhysical }})
                    </span>
                  </div>

                  <div  class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
                    {{ resistanceMagic }}
                    <span v-if="flatResistanceMagic" class="ml-1">
                      (- {{ flatResistanceMagic }})
                    </span>
                  </div>
                  
                  <div  class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
                    {{ resistanceFire }}
                    <span v-if="flatResistanceFire" class="ml-1">
                      (- {{ flatResistanceFire }})
                    </span>
                  </div>
                  
                  <div  class="flex justify-center items-center border-r border-black w-1/5 h-5 bg-white text-charcoal">
                    {{ resistanceLightning }}
                    <span v-if="flatResistanceLightning" class="ml-1">
                      (- {{ flatResistanceLightning }})
                    </span>
                  </div>
                  
                  <div  class="flex justify-center items-center w-1/5 h-5 bg-white text-charcoal">
                    {{ resistanceDark }}
                    <span v-if="flatResistanceDark" class="ml-1">
                      (- {{ flatResistanceDark }})
                    </span>
                  </div>
                </div>

                <div class="flex justify-between border rounded-sm">
                  <button class="w-full" @click="takeDamage(calculatorDamagePhysical)">
                    <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
                      <span v-if="calculatorDamagePhysical > 0">-</span>
                      {{ calculatorDamagePhysical }}
                    </div>
                  </button>
                  <button class="w-full" @click="takeDamage(calculatorDamageMagic)">
                    <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
                      <span v-if="calculatorDamageMagic > 0">-</span>
                      {{ calculatorDamageMagic }}
                    </div>
                  </button>
                  <button class="w-full" @click="takeDamage(calculatorDamageFire)">
                    <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
                      <span v-if="calculatorDamageFire > 0">-</span>
                      {{ calculatorDamageFire }}
                    </div>
                  </button>
                  <button class="w-full" @click="takeDamage(calculatorDamageLightning)">
                    <div class="w-full text-center border-r border-black hover:bg-red-100 bg-white text-charcoal">
                      <span v-if="calculatorDamageLightning > 0">-</span>
                      {{ calculatorDamageLightning }}
                    </div>
                  </button>
                  <button class="w-full" @click="takeDamage(calculatorDamageDark)">
                    <div class="w-full text-center hover:bg-red-100 bg-white text-charcoal">
                      <span v-if="calculatorDamageDark > 0">-</span>
                      {{ calculatorDamageDark }}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Status Resistances -->
        <div class="flex flex-1" style="max-width: 380px;">
          <div class="flex justify-between pl-12 w-full">
            <h1 class="text-lg mr-8">
              Statuses
            </h1>
  
            <div class="flex flex-col space-y-1 mr-4 w-full h-full">
              <StatusOption name="Curse" :resistance="resistanceCurse" />
              <StatusOption name="Frost" :resistance="resistanceFrost" />
              <StatusOption name="Bleed" :resistance="resistanceBleed" />
              <StatusOption name="Poison" :resistance="resistancePoison" />
              <StatusOption name="Toxic" :resistance="resistanceToxic" />
              <StatusOption name="Poise" :resistance="resistancePoise" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~~/store/player';

const playerStore = usePlayerStore()

let hp = ref(30)
let fp = ref(8)
let ap = ref(10)

let hpPercentage = computed(()=>{
  try {
    return Math.max((hp.value / maxHp.value) * 100, 0)
  } catch {}
  return 0
})

let fpPercentage = computed(()=>{
  try {
    return Math.max((fp.value / maxFp.value) * 100, 0)
  } catch {}
  return 0
})

let apPercentage = computed(()=>{
  try {
    return Math.max((ap.value / maxAp.value) * 100, 0)
  } catch {}
  return 0
})

let maxHp = ref(30)
let maxFp = ref(8)
let maxAp = ref(10)

let hpFlaskAmount = ref(3)
let fpFlaskAmount = ref(2)
let flaskBonus = ref(1)

const calculatorDamageInput = ref(0)

const resistancePhysical = ref(3)
const resistanceMagic = ref(0)
const resistanceFire = ref(0)
const resistanceLightning = ref(0)
const resistanceDark = ref(0)

const flatResistancePhysical = ref(0)
const flatResistanceMagic = ref(0)
const flatResistanceFire = ref(0)
const flatResistanceLightning = ref(0)
const flatResistanceDark = ref(0)

const resistanceCurse = ref(10)
const resistanceFrost = ref(14)
const resistanceBleed = ref(14)
const resistancePoison = ref(14)
const resistanceToxic = ref(9)
const resistancePoise = ref(11)

const inflictionCurse = ref(0)
const inflictionFrost = ref(0)
const inflictionBleed = ref(0)
const inflictionPoison = ref(0)
const inflictionToxic = ref(0)
const inflictionPoise = ref(0)

const apFlaskRestoreAmount = computed<number>(()=>{
  if (flaskBonus.value === 0) {
    return 5
  }
  
  return 5 + (2 * flaskBonus.value)
})

const calculatorDamagePhysical = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, resistancePhysical.value, flatResistancePhysical.value)
})
const calculatorDamageMagic = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, resistanceMagic.value, flatResistanceMagic.value)
})
const calculatorDamageFire = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, resistanceFire.value, flatResistanceFire.value)
})
const calculatorDamageLightning = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, resistanceLightning.value, flatResistanceLightning.value)
})
const calculatorDamageDark = computed(()=>{
  return calulateDamage(calculatorDamageInput.value, resistanceDark.value, flatResistanceDark.value)
})

function calulateDamage(damage: number, resistance: number, flatResistance: number): number {
  const baseResisted = Math.floor(damage * Math.min(resistance * .1, .3))
  return Math.max((damage - baseResisted - resistance - flatResistance), 0)
}

function takeDamage(damageAmount: number) {
  hp.value -= damageAmount
  if (hp.value < 0) hp.value = 0
}

function drinkFlask(type: string) {
  if (type === 'hp') {
    if (hpFlaskAmount.value === 0) return
    hp.value = Math.min(hp.value + (15 * flaskBonus.value), maxHp.value)
    hpFlaskAmount.value--
  } else {
    if (fpFlaskAmount.value === 0) return
    fp.value = Math.min(fp.value + apFlaskRestoreAmount.value, maxFp.value)
    fpFlaskAmount.value--
  }
}

function addFlask(type: string) {
  if (type === 'hp') {
    hpFlaskAmount.value++
  } else {
    fpFlaskAmount.value++
  }
}

function removeFlask(type: string) {
  if (type === 'hp') {
    hpFlaskAmount.value--
    if (hpFlaskAmount.value < 0) hpFlaskAmount.value = 0
  } else {
    fpFlaskAmount.value--
    if (fpFlaskAmount.value < 0) fpFlaskAmount.value = 0
  }
}
</script>

<style lang="less" scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>