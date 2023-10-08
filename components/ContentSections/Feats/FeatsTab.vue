<template>
  <div class="flex w-full overflow-hidden inv-tab" style="height: calc(100vh - 280px);">
    <div class="flex flex-col w-2/4 pt-4 px-4 border-r border-white overflow-auto">
      <div class="mb-6">
        <h1 class="w-full flex justify-center mb-4 text-white text-2xl font-semibold">
          Feats
        </h1>
    
        <div class="flex justify-between bg-white rounded-md overflow-hidden">
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'weaponfeats' && 'bg-[#2a5573] text-white'" @click="activeTab = 'weaponfeats'">
            <div class="p-1">
              Weapon Proficiencies
            </div>
          </button>
    
          <button class="text-center border-r border-black flex-1" :class="activeTab === 'destinyfeats' && 'bg-[#2a5573] text-white'" @click="activeTab = 'destinyfeats'">
            <div class="p-1">
              Feats of Destiny
            </div>
          </button>
        </div>
      </div>

      <div v-if="activeTab === 'weaponfeats'" class="flex mb-4">
        <div class="flex justify-between w-full">
          <div class="flex flex-col px-4">
            <h2 class="pb-4 font-bold text-lg text-white">
              Learned Feats
            </h2>

            <div v-if="learnedWeaponFeats.length" class="flex flex-col space-y-1 w-fit">
              <div v-for="weaponFeat in learnedWeaponFeats" :key="weaponFeat.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3">
                <span class="font-bold mr-5">
                  {{ weaponFeat.Name }}
                </span>

                <span>
                  ({{ weaponFeat.WeaponType }} Lv. {{ weaponFeat.Level }})
                </span>
              </div>
            </div>

            <div v-else class="italic text-gray-300">
              You have not learned any weapon proficiencies
            </div>
          </div>

          <div>
            <h2 class="pb-4 font-bold text-lg text-white">
              Weapon Proficiency Trees
            </h2>

            <div class="flex flex-col space-y-1 mr-4 min-w-fit">
              <FeatOption name="Spear" identifier="Spear" @expand="selectedProficiency = $event" />
              <FeatOption name="Shield / Greatshield" identifier="Shield" @expand="selectedProficiency = $event" />
              <FeatOption name="Gun Sidearm" identifier="Gun" @expand="selectedProficiency = $event" />
              <FeatOption name="Dagger" identifier="Dagger" @expand="selectedProficiency = $event" />
              <FeatOption name="Whip" identifier="Whip" @expand="selectedProficiency = $event" />
              <FeatOption name="Hammer/ Greathammer" identifier="Hammer" @expand="selectedProficiency = $event" />
              <FeatOption name="Straight sword" identifier="StraightSword" @expand="selectedProficiency = $event" />
              <FeatOption name="Katana" identifier="Katana" @expand="selectedProficiency = $event" />
              <FeatOption name="Greatsword / Ultra Greatsword" identifier="Greatsword" @expand="selectedProficiency = $event" />
              <FeatOption name="Reaper" identifier="Reaper" @expand="selectedProficiency = $event" />
              <FeatOption name="Axe / Greataxe" identifier="Axe" @expand="selectedProficiency = $event" />
              <FeatOption name="Fist" identifier="Fist" @expand="selectedProficiency = $event" />
              <FeatOption name="Bow" identifier="Bow" @expand="selectedProficiency = $event" />
              <FeatOption name="Halberd" identifier="Halberd" @expand="selectedProficiency = $event" />
              <FeatOption name="Twinblade" identifier="Twinblade" @expand="selectedProficiency = $event" />
              <FeatOption name="Sorcery" identifier="Sorcery" @expand="selectedProficiency = $event" />
              <FeatOption name="Miracles" identifier="Miracles" @expand="selectedProficiency = $event" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/4 h-full p-4">
      <div v-if="selectedProficiency" class="flex flex-col w-full space-y-3">
        <h1 class="pb-4 text-white text-2xl font-bold text-center ">
          {{ selectedProficiency }} Feats
        </h1>

        <div v-for="feat in displayedWeaponFeats" class="w-full bg-white rounded p-2" :key="feat.Name">
          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <div>
                <span class="mr-2">
                  Lv. {{ feat.Level }}
                </span>
  
                <span class="text-lg font-bold">
                  {{ feat.Name }}
                </span>
              </div>
              
              <button v-if="eligibleForWeaponFeat(feat) && !weaponFeatLearned(feat)" class="text-blue-500 pr-2" @click="learnWeaponFeat(feat)">
                Learn
              </button>

              <span v-else-if="weaponFeatLearned(feat)" class="text-charcoal pr-2">
                Learned
              </span>
            </div>

            <div class="ml-9 pr-20">
              {{ feat.Description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import { useCompendiumStore } from '~~/store/compendium'
import { WeaponFeat } from '@/mixins/types'

const store = usePlayerStore()
const compendiumStore = useCompendiumStore()

const activeTab = shallowRef('weaponfeats')

const selectedProficiency = shallowRef<string>('')

const displayedWeaponFeats = computed(()=>{
  return (compendiumStore.WeaponFeats as any)[selectedProficiency.value] || []
})

const learnedWeaponFeats = computed(()=>{
  return store.WeaponFeats
})

function learnWeaponFeat(feat: WeaponFeat) {
  if (!weaponFeatLearned(feat)) {
    store.WeaponFeats.push(feat)
  }
}

function weaponFeatLearned(feat: WeaponFeat) {
  return store.WeaponFeats.indexOf(feat) !== -1
}

function eligibleForWeaponFeat(feat: WeaponFeat) {
  return (store.WeaponProficiencies as any)[feat.WeaponType] >= feat.Level
}
</script>

In the left panel → Sub tabs with a selection of “Weapon Proficiency Feats” or “Feats of Destiny”. 
  When “Weapon Proficiency Feats” is selected a “box” will appear on the left with a list of all weapon trees, a column of proficiency points the player has in each, and some empty rows near the top. 
  The lower part of the panel will be a list of all trees which can be dropped down with an arrow showing the names of each feat in that tree. Each feat can be added to the empty rows in the upper section when the player acquires them.

  When “Feats of Destiny” is selected two rows will appear, one on the top with a number of visible rows based on your fate points (and an indication of the number of fate the character has, as well as a way to manually increase or decrease it), 
  and one on the bottom with a compendium list that can be selected between a list of all feats of destiny. Feats from the bottom can be added to the slots on the top.