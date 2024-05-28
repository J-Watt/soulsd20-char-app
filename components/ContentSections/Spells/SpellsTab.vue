<template>
  <div class="flex flex-col w-full overflow-hidden main-tab">
    <h1 class="py-4 bg-dismid w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
      Feats
    </h1>
    
    <div class="flex h-full">
      <div class="flex flex-col w-2/4 border-r overflow-auto">
        <div class="sticky top-0 p-4 w-full flex flex-col justify-center text-white font-semibold z-10 border-b">
          <div class="flex justify-between bg-white rounded-md overflow-hidden text-charcoal">
            <button class="text-center border-r border-black flex-1" :class="activeTab === 'skills' && 'bg-[#2a5573] text-white'" @click="activeTab = 'skills'">
              <div class="p-1">
                Weapon Skills
              </div>
            </button>
      
            <button class="text-center border-r border-black flex-1" :class="activeTab === 'spells' && 'bg-[#2a5573] text-white'" @click="activeTab = 'spells'">
              <div class="p-1">
                Spells
              </div>
            </button>

            <button class="text-center border-r border-black flex-1" :class="activeTab === 'summons' && 'bg-[#2a5573] text-white'" @click="activeTab = 'summons'">
              <div class="p-1">
                Spirit Summons
              </div>
            </button>
          </div>
        </div>
  
        <div v-if="activeTab === 'skills'" class="flex my-4 mb-20">
          <div class="flex justify-between space-x-4 w-full">
            <div class="flex flex-col w-2/4 px-4">
              <h2 class="pb-4 font-bold text-lg text-white">
                Learned Weapon Skills
              </h2>
  
              <div v-if="store.WeaponFeats.length" class="flex flex-col space-y-1 w-fit">
                <button v-for="weaponFeat in sortedFeats" :key="weaponFeat.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3" @click="openWeaponFeatDescription(weaponFeat)">
                  <div class="font-bold mr-5">
                    {{ weaponFeat.Name }}
                  </div>
  
                  <span>
                    ({{ weaponFeat.WeaponType }} Lv. {{ weaponFeat.Level }})
                  </span>
                </button>
              </div>
  
              <div v-else class="italic text-gray-300">
                You have not learned any weapon skills
              </div>
            </div>
  
            <div class="w-2/4">
              <h2 class="pb-4 font-bold text-lg text-white">
                Weapon Skill Types
              </h2>
  
              <div class="flex flex-col space-y-1 mr-4 min-w-fit">
                <WeaponFeatOption v-for="weaponFeat in weaponFeatTrees" :key="'weaponfeat' + weaponFeat.Name" :name="weaponFeat.Name" :identifier="weaponFeat.Identifier" @expand="selectedProficiency = $event" />
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="activeTab === 'destinyfeats'" class="flex my-4 mb-20">
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
        <div v-if="activeTab === 'weaponfeats'">
          <div v-if="selectedProficiency" class="flex flex-col w-full">
            <h1 class="pb-4 text-white text-2xl font-bold text-center ">
              {{ selectedProficiency }} Feats
            </h1>

            <div class="flex justify-end w-full mb-3">
              <button class="flex justify-end pr-4 text-white" :class="!viewAll && 'underline'" @click="viewAll = !viewAll">
                Available
              </button>

              <button class="flex justify-end pr-4 text-white" :class="viewAll && 'underline'" @click="viewAll = !viewAll">
                All
              </button>
            </div>
    
            <div class="flex flex-col space-y-3">
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
                    
                    <button v-if="!weaponFeatLearned(feat)" class="text-blue-500 pr-2" @click="learnWeaponFeat(feat)">
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

          <div v-else-if="selectedWeaponFeat" class="flex flex-col w-full space-y-3">
            <h1 class="pb-4 text-white text-2xl font-bold text-center ">
              {{ selectedWeaponFeat.Name }}
            </h1>
            
            <div class="w-full bg-white rounded px-4 py-2">
              <div class="flex flex-col">
                <div class="flex justify-between mb-2">
                  <div class="mr-4 text-lg font-bold">
                    <span class="mr-2">
                      {{ selectedWeaponFeat.WeaponType }}
                    </span>
  
                    <span class="mr-2">
                      (Lv. {{ selectedWeaponFeat.Level }})
                    </span>
                  </div>

                  <button v-if="!weaponFeatLearned(selectedWeaponFeat)" class="text-blue-500 pr-2" @click="learnWeaponFeat(selectedWeaponFeat)">
                    Learn
                  </button>
      
                  <button v-else-if="weaponFeatLearned(selectedWeaponFeat)" class="text-blue-500 pr-2" @click="unlearnWeaponFeat(selectedWeaponFeat)">
                    Unlearn
                  </button>
                </div>
    
                <div>
                  {{ selectedWeaponFeat.Description }}
                </div>
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
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import { useCompendiumStore } from '~~/store/compendium'
import { DestinyFeat, WeaponFeat } from '@/mixins/types'

const store = usePlayerStore()
const compendiumStore = useCompendiumStore()

const activeTab = shallowRef('weaponfeats')
const viewAll = shallowRef(false)

const selectedProficiency = shallowRef<string>('')
const selectedDestinyFeat = ref<DestinyFeat | null>(null)
const selectedWeaponFeat = ref<WeaponFeat | null>(null)

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
  return (compendiumStore.WeaponFeats as any)[selectedProficiency.value].filter((feat: any) => eligibleForWeaponFeat(feat) || viewAll.value) || []
})

const sortedFeats = computed(()=>{
  return store.WeaponFeats.sort((a,b) => {
    if (a.Level > b.Level) return 1
    if (a.Level < b.Level) return -1
    return 0
  })
})

function openWeaponFeatDescription(feat: WeaponFeat) {
  selectedProficiency.value = ''
  selectedWeaponFeat.value = feat
}

function learnWeaponFeat(feat: WeaponFeat | null) {
  if (!feat) return
  if (!weaponFeatLearned(feat)) {
    store.WeaponFeats.push(feat)
  }
}

function unlearnWeaponFeat(feat: WeaponFeat | null) {
  if (!feat) return
  if (weaponFeatLearned(feat)) {
    store.WeaponFeats.splice(store.WeaponFeats.indexOf(feat), 1)
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