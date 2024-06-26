<template>
  <div class="flex flex-col w-full overflow-hidden main-tab">
    <h1 class="py-4 bg-dismid w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
      Feats
    </h1>
    
    <div class="flex h-full">
      <div class="flex flex-col w-2/4 border-r overflow-auto" style="height: calc(100% - 69px)">
        <div class="sticky top-0 p-4 w-full flex flex-col justify-center text-white font-semibold z-10 border-b bg-dislight">
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
          <div class="flex justify-between space-x-4 w-full">
            <div class="flex flex-col w-2/4 px-4">
              <h2 class="pb-4 font-bold text-lg text-white">
                Learned Feats
              </h2>
  
              <div v-if="store.WeaponFeats.length" class="flex flex-col space-y-1 w-fit">
                <button v-for="weaponFeat in sortedFeats" :key="weaponFeat.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3" @click="openWeaponFeatDescription(weaponFeat)">
                  <div class="font-bold mr-5">
                    {{ weaponFeat.name }}
                  </div>
  
                  <span>
                    ({{ proficiencyName(weaponFeat.weapon_tree) }} Lv. {{ weaponFeat.level }})
                  </span>
                </button>
              </div>
  
              <div v-else class="italic text-gray-300">
                You have not learned any weapon proficiencies
              </div>
            </div>
  
            <div class="w-2/4">
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
                <button v-for="destinyFeat in store.DestinyFeats" :key="destinyFeat.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3 font-bold mr-5" @click="openDestinyFeatDescription(destinyFeat)">
                  {{ destinyFeat.name }}
                </button>
              </div>
  
              <div v-else class="italic text-gray-300">
                You have not learned any feats of destiny
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
  
      <div class="w-2/4 overflow-auto" style="height: calc(100% - 69px)">
        <div v-if="activeTab === 'weaponfeats'">
          <div v-if="selectedProficiency" class="flex flex-col w-full">
            <h1 class="sticky top-0 p-4 w-full flex justify-center text-white font-semibold z-10 border-b bg-dislight text-2xl">
              {{ proficiencyName(selectedProficiency) }} Feats
            </h1>

            <div class="sticky flex justify-end w-full mt-4">
              <button class="flex justify-end pr-4 text-white" :class="!viewAll && 'underline'" @click="viewAll = !viewAll">
                Available
              </button>

              <button class="flex justify-end pr-4 text-white" :class="viewAll && 'underline'" @click="viewAll = !viewAll">
                All
              </button>
            </div>

            <div v-if="displayedWeaponFeats.length > 0">
              <div class="flex flex-col space-y-3 p-4">
                <div v-for="feat in displayedWeaponFeats" class="w-full bg-white rounded p-2" :key="feat.name">
                  <div class="flex flex-col">
                    <div class="flex items-center justify-between">
                      <div>
                        <span class="mr-2">
                          Lv. {{ feat.level }}
                        </span>
          
                        <span class="text-lg font-bold">
                          {{ feat.name }}
                        </span>
                      </div>
                      
                      <button v-if="!weaponFeatLearned(feat)" class="text-blue-500 pr-2" @click="learnWeaponFeat(feat)">
                        Learn
                      </button>
        
                      <button v-else-if="weaponFeatLearned(feat)" class="text-emerald-500 pr-2" @click="unlearnWeaponFeat(feat)">
                        Unlearn
                      </button>
                    </div>
        
                    <div class="ml-9 pr-20">
                      {{ feat.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="text-gray-300 text-center italic text-lg mt-4">
              You are not high enough level in this tree to benefit from any feats
            </div>
          </div>
        </div>
  
        <div v-else-if="activeTab === 'destinyfeats' && selectedDestinyFeat" class="flex flex-col w-full space-y-3">
          <h1 class="sticky top-0 p-4 w-full flex justify-center text-white font-semibold z-10 border-b bg-dislight text-2xl">
            {{ selectedDestinyFeat.name }}
          </h1>
  
          <div class="p-4">
            <div class="flex justify-between w-full bg-white rounded p-2">
              <div class="pr-8">
                {{ selectedDestinyFeat.description }}
              </div>
    
              <div class="flex justify-between">
                <div class="flex w-full">
                  <span class="mr-2 w-max">
                    Costs {{ selectedDestinyFeat.cost }}
                  </span>
    
                  <div>
                    <button v-if="!destinyFeatLearned(selectedDestinyFeat)" class="text-blue-500" @click="learnDestinyFeat(selectedDestinyFeat)">
                      Learn
                    </button>
        
                    <button v-else-if="destinyFeatLearned(selectedDestinyFeat)" class="text-emerald-500" @click="unlearnDestinyFeat(selectedDestinyFeat)">
                      Unlearn
                    </button>
                  </div>
                </div>
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

const store = usePlayerStore()
const compendiumStore = useCompendiumStore()

const activeTab = shallowRef('weaponfeats')
const viewAll = shallowRef(false)

const selectedProficiency = shallowRef<string>('')
const selectedDestinyFeat = ref<any>(null)

const weaponFeatTrees = [
  { Name: "Fist", Identifier: "FIST" },
  { Name: "Dagger", Identifier: "DAGGER" },
  { Name: "Straight Sword / Thrusting Sword", Identifier: "STRAIGHT_THRUST" },
  { Name: "Katana / Curved Sword", Identifier: "KATANA_CURVED" },
  { Name: "Greatsword / Ultra Greatsword", Identifier: "ULTRA_GREAT_SWORD" },
  { Name: "Axe / Greataxe", Identifier: "GREAT_AXE" },
  { Name: "Hammer/ Greathammer", Identifier: "GREAT_HAMMER" },
  { Name: "Twinblade", Identifier: "TWINBLADE" },
  { Name: "Spear", Identifier: "SPEAR" },
  { Name: "Halberd", Identifier: "HALBERD" },
  { Name: "Reaper", Identifier: "REAPER" },
  { Name: "Whip", Identifier: "WHIP" },
  { Name: "Bow", Identifier: "CROSS_BOW" },
  { Name: "Greatbow / Ballista", Identifier: "GREAT_BOW_BALLISTA" },
  { Name: "Gun Sidearm", Identifier: "GUN" },
  { Name: "Shield / Greatshield", Identifier: "SHIELD" },
  { Name: "Sorcery", Identifier: "SORCERY" },
  { Name: "Miracles", Identifier: "MIRACLE" },
  { Name: "Pyromancy", Identifier: "PYROMANCY" },
  { Name: "Hexes", Identifier: "HEX" },
  { Name: "Spirit Summoning", Identifier: "SPIRIT_SUMMONING" },
  { Name: "Dual Wielding", Identifier: "DUAL_WIELDING" },
]

const displayedWeaponFeats = computed(()=>{
  return (compendiumStore.WeaponFeats as any).filter((feat: any) => selectedProficiency.value === feat.weapon_tree && (eligibleForWeaponFeat(feat) || viewAll.value)) || []
})

const sortedFeats = computed(()=>{
  return store.WeaponFeats.sort((a,b) => {
    if (a.level > b.level) return 1
    if (a.level < b.level) return -1
    return 0
  })
})

function proficiencyName(weaponProficiencyIdentifier: string) {
  const treeOption = weaponFeatTrees.find(feat => feat.Identifier === weaponProficiencyIdentifier)
  return treeOption?.Name || ''
}

onBeforeMount(()=>{
  console.log('Weapon feats', compendiumStore.WeaponFeats)
})

function openWeaponFeatDescription(feat: any) {
  selectedProficiency.value = feat.weapon_tree
}

function openDestinyFeatDescription(feat: any) {
  selectedDestinyFeat.value = feat
}

function learnWeaponFeat(feat: any | null) {
  if (!feat) return
  if (!weaponFeatLearned(feat)) {
    store.WeaponFeats.push(feat)
  }
}

function unlearnWeaponFeat(feat: any | null) {
  if (!feat) return
  if (weaponFeatLearned(feat)) {
    store.WeaponFeats.splice(store.WeaponFeats.indexOf(feat), 1)
  }
}

function weaponFeatLearned(feat: any) {
  return store.WeaponFeats.indexOf(feat) !== -1
}

function eligibleForWeaponFeat(feat: any) {
  return store.WeaponProficiencies[feat.weapon_tree] >= feat.level
}

function destinyFeatLearned(feat: any) {
  return store.DestinyFeats.indexOf(feat) !== -1
}

function learnDestinyFeat(feat: any) {
  if (!feat) return
  if (!destinyFeatLearned(feat)) {
    store.DestinyFeats.push(feat)
  }
}

function unlearnDestinyFeat(feat: any) {
  if (!feat) return
  if (destinyFeatLearned(feat)) {
    store.DestinyFeats.splice(store.DestinyFeats.indexOf(feat), 1)
  }
}
</script>