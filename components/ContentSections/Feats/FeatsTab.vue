<template>
  <div class="flex w-full overflow-hidden main-tab">
    <div class="flex flex-col w-2/4 border-r border-white overflow-auto">
      <div class="sticky top-0 p-4 bg-deepblue w-full flex flex-col justify-center text-white font-semibold z-10 border-b border-borderlight">
        <h1 class="w-full flex justify-center mb-4 text-white text-2xl font-semibold">
          Feats
        </h1>
    
        <div class="flex justify-between bg-white rounded-md overflow-hidden text-charcoal">
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

      <div v-if="activeTab === 'weaponfeats'" class="flex my-4">
        <div class="flex justify-between w-full">
          <div class="flex flex-col px-4">
            <h2 class="pb-4 font-bold text-lg text-white">
              Learned Feats
            </h2>

            <div v-if="store.WeaponFeats.length" class="flex flex-col space-y-1 w-fit">
              <div v-for="weaponFeat in store.WeaponFeats" :key="weaponFeat.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3">
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
              <WeaponFeatOption v-for="weaponFeat in weaponFeatTrees" :key="'weaponfeat' + weaponFeat.Name" :name="weaponFeat.Name" :identifier="weaponFeat.Identifier" @expand="selectedProficiency = $event" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'destinyfeats'" class="flex my-4">
        <div class="flex justify-between w-full">
          <div class="flex flex-col px-4">
            <h2 class="pb-4 font-bold text-lg text-white">
              Learned Feats
            </h2>

            <div v-if="store.DestinyFeats.length" class="flex flex-col space-y-1 w-fit">
              <div v-for="destinyFeat in store.DestinyFeats" :key="destinyFeat.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3">
                <span class="font-bold mr-5">
                  {{ destinyFeat.Name }}
                </span>
              </div>
            </div>

            <div v-else class="italic text-gray-300">
              You have not learned any weapon proficiencies
            </div>
          </div>

          <div>
            <h2 class="pb-4 font-bold text-lg text-white">
              All Feats of Destiny
            </h2>

            <div class="flex flex-col space-y-1 mr-4 min-w-fit">
              <DestinyFeatOption v-for="destinyFeat in compendiumStore.DestinyFeats" :feat="destinyFeat" @expand="selectedDestinyFeat = destinyFeat" :key="destinyFeat.UUID" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/4 h-full p-4">
      <div v-if="activeTab === 'weaponfeats' && selectedProficiency" class="flex flex-col w-full space-y-3">
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

      <div v-else-if="activeTab === 'destinyfeats' && selectedDestinyFeat" class="flex flex-col w-full space-y-3">
        <h1 class="pb-4 text-white text-2xl font-bold text-center ">
          {{ selectedDestinyFeat.Name }}
        </h1>

        <div class="flex justify-between w-full bg-white rounded p-2">
          <div class="pr-8">
            {{ selectedDestinyFeat.Description }}
          </div>

          <div class="flex items-center justify-between">
            <div class="flex justify-end w-full">
              <span class="mr-2">
                Costs {{ selectedDestinyFeat.Cost }}
              </span>

              <button v-if="!destinyFeatLearned(selectedDestinyFeat)" class="text-blue-500 pr-2" @click="learnDestinyFeat(selectedDestinyFeat)">
                Learn
              </button>
  
              <span v-else-if="destinyFeatLearned(selectedDestinyFeat)" class="text-charcoal pr-2">
                Learned
              </span>
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
import { DestinyFeat, WeaponFeat } from '@/mixins/types'

const store = usePlayerStore()
const compendiumStore = useCompendiumStore()

const activeTab = shallowRef('weaponfeats')

const selectedProficiency = shallowRef<string>('')
const selectedDestinyFeat = ref<DestinyFeat | null>(null)

const weaponFeatTrees = [
  { Name: "Spear", Identifier: "Spear" },
  { Name: "Shield / Greatshield", Identifier: "Shield" },
  { Name: "Gun Sidearm", Identifier: "Gun" },
  { Name: "Dagger", Identifier: "Dagger" },
  { Name: "Whip", Identifier: "Whip" },
  { Name: "Hammer/ Greathammer", Identifier: "Hammer" },
  { Name: "Straight sword", Identifier: "StraightSword" },
  { Name: "Katana", Identifier: "Katana" },
  { Name: "Greatsword / Ultra Greatsword", Identifier: "Greatsword" },
  { Name: "Reaper", Identifier: "Reaper" },
  { Name: "Axe / Greataxe", Identifier: "Axe" },
  { Name: "Fist", Identifier: "Fist" },
  { Name: "Bow", Identifier: "Bow" },
  { Name: "Halberd", Identifier: "Halberd" },
  { Name: "Twinblade", Identifier: "Twinblade" },
  { Name: "Sorcery", Identifier: "Sorcery" },
  { Name: "Miracles", Identifier: "Miracles" },
]

const displayedWeaponFeats = computed(()=>{
  return (compendiumStore.WeaponFeats as any)[selectedProficiency.value] || []
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

function destinyFeatLearned(feat: DestinyFeat) {
  return store.DestinyFeats.indexOf(feat) !== -1
}

function learnDestinyFeat(feat: DestinyFeat | null) {
  if (!feat) return
  if (!destinyFeatLearned(feat)) {
    store.DestinyFeats.push(feat)
  }
}
</script>