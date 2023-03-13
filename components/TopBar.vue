<template>
  <div class="px-3 text-white">
    <div class="flex space-x-8">
      <!-- Character -->
      <div class="flex items-center w-1/3">
        <!-- Icon box -->
        <div class="flex justify-center items-center w-32 h-32 mr-4">
          <img src="@/img/ok.jpg" class="max-h-32">
        </div>

        <!-- Char name / stats -->
        <div class="flex flex-col h-full w-full justify-between">
          <!-- name -->
          <div class="flex items-center text-4xl h-full text-white">
            That guy
          </div>

          <!-- char stats -->
          <div class="flex mt-2 text-white">
            <!-- left -->
            <div class="flex flex-col space-y-1 w-full border border-b-0 p-1 text-sm">
              <!-- gender -->
              <div class="flex justify-between items-center w-full">
                <span>
                  Gender
                </span>

                <span>
                  Male
                </span>
              </div>

              <!-- race -->
              <div class="flex justify-between items-center w-full">
                <span>
                  Race
                </span>

                <span>
                  Human
                </span>
              </div>

              <!-- class -->
              <div class="flex justify-between items-center w-full">
                <span>
                  Class
                </span>

                <span>
                  Knight
                </span>
              </div>
            </div>

            <!-- right -->
            <div>

            </div>
          </div>
        </div>
      </div>

      <!-- HP/AP/FP -->
      <div class="flex flex-col justify-between pt-3 w-1/3 border-r border-l">
        <div class="flex flex-col space-y-3 px-3">
          <div class="bg-red-500 w-full h-6 text-center rounded">
            30/30
          </div>
          <div class="bg-blue-500 w-full h-6 text-center rounded">
            8/8
          </div>
          <div class="bg-green-500 w-full h-6 text-center rounded">
            10/10
          </div>
        </div>

        <div class="flex">
          <div class="flex p-1 border-t border-r w-10 text-center">
            3 <img src="@/img/icons/flask.png" class="w-6" style="filter: brightness(0) invert(0.9);">
          </div>
          <div class="flex p-1 border-t border-r w-10 text-center">
            2 <img src="@/img/icons/flask.png" class="w-6" style="filter: brightness(0) invert(0.9);">
          </div>
          <div class="flex items-center justify-center border-t border-r w-8">
            +1
          </div>
        </div>
      </div>

      <!-- Resistances & Calc -->
      <div class="flex justify-between py-3 w-1/3 text-sm">
        <!-- Damage calculator -->
        <div class="flex mr-4">
          <div class="flex flex-col justify-end mr-4">
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-16 h-5 mr-2">
                {{ resistancePhysical }}
                <span v-if="flatResistancePhysical" class="ml-1">
                  (- {{ flatResistancePhysical }})
                </span>
              </div>
  
              <div>
                Physical
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-16 h-5 mr-2">
                {{ resistanceMagic }}
                <span v-if="flatResistanceMagic" class="ml-1">
                  (- {{ flatResistanceMagic }})
                </span>
              </div>
  
              <div>
                Magic
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-16 h-5 mr-2">
                {{ resistanceFire }}
                <span v-if="flatResistanceFire" class="ml-1">
                  (- {{ flatResistanceFire }})
                </span>
              </div>
  
              <div>
                Fire
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-16 h-5 mr-2">
                {{ resistanceLightning }}
                <span v-if="flatResistanceLightning" class="ml-1">
                  (- {{ flatResistanceLightning }})
                </span>
              </div>
  
              <div>
                Lightning
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-16 h-5 mr-2">
                {{ resistanceDark }}
                <span v-if="flatResistanceDark" class="ml-1">
                  (- {{ flatResistanceDark }})
                </span>
              </div>
  
              <div>
                Dark
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between border w-10">
            <div class="border-b">
              <input v-model="calculatorDamageInput" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
            <div class="w-full text-center border-b">
              {{ calculatorDamagePhysical }}
            </div>
            <div class="w-full text-center border-b">
              {{ calculatorDamageMagic }}
            </div>
            <div class="w-full text-center border-b">
              {{ calculatorDamageFire }}
            </div>
            <div class="w-full text-center border-b">
              {{ calculatorDamageLightning }}
            </div>
            <div class="w-full text-center">
              {{ calculatorDamageDark }}
            </div>
          </div>
        </div>

        <!-- Resistances -->
        <div class="flex">
          <div class="flex flex-col justify-between mr-4">
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-8 h-5 mr-2">
                {{ resistanceCurse }}
              </div>
  
              <div>
                Curse
              </div>
            </div>

            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-8 h-5 mr-2">
                {{ resistanceFrost }}
              </div>
  
              <div>
                Frost
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-8 h-5 mr-2">
                {{ resistanceBleed }}
              </div>
  
              <div>
                Bleed
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-8 h-5 mr-2">
                {{ resistancePoison }}
              </div>
  
              <div>
                Poison
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-8 h-5 mr-2">
                {{ resistanceToxic }}
              </div>
  
              <div>
                Toxic
              </div>
            </div>
  
            <div class="flex items-center h-1/6">
              <div class="flex justify-center items-center border w-8 h-5 mr-2">
                {{ resistancePoise }}
              </div>
  
              <div>
                Poise
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between border w-10">
            <div class="border-b">
              <input v-model="inflictionCurse" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
            <div class="border-b">
              <input v-model="inflictionFrost" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
            <div class="border-b">
              <input v-model="inflictionBleed" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
            <div class="border-b">
              <input v-model="inflictionPoison" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
            <div class="border-b">
              <input v-model="inflictionToxic" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
            <div class="border-b">
              <input v-model="inflictionPoise" min="0" type="number" class="bg-black text-center pl-1 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const calculatorDamageInput = ref(0)

const resistancePhysical = ref(3)
const resistanceMagic = ref(0)
const resistanceFire = ref(0)
const resistanceLightning = ref(0)
const resistanceDark = ref(0)

const flatResistancePhysical = ref(1)
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
</script>