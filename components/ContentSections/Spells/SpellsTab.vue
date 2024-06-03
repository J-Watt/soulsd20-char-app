<template>
  <div class="flex flex-col w-full overflow-hidden main-tab">
    <h1 class="py-4 bg-dismid w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
      Spells and Weapon Skills
    </h1>
    
    <div class="flex h-full">
      <div class="flex flex-col w-2/4 border-r overflow-auto" style="height: calc(100% - 69px)">
        <div class="sticky top-0 p-4 w-full flex flex-col justify-center text-white font-semibold z-10 border-b bg-dislight">
          <div class="flex justify-between bg-white rounded-md overflow-hidden text-charcoal">
            <button class="text-center border-r border-black flex-1" :class="activeTab === 'spells' && 'bg-[#2a5573] text-white'" @click="activeTab = 'spells'">
              <div class="p-1">
                Spells
              </div>
            </button>
      
            <button class="text-center border-r border-black flex-1" :class="activeTab === 'weaponskills' && 'bg-[#2a5573] text-white'" @click="activeTab = 'weaponskills'">
              <div class="p-1">
                Weapon Skills
              </div>
            </button>
          </div>
        </div>
  
        <div v-if="activeTab === 'spells'" class="flex my-4">
          <div class="flex justify-between space-x-4 w-full">
            <div class="flex flex-col w-2/4 px-4">
              <h2 class="pb-4 font-bold text-lg text-white">
                Learned Spells
              </h2>
  
              <div v-if="store.AttunedSpells.length" class="flex flex-col space-y-1 w-fit">
                <button v-for="spell in learnedSpells" :key="spell.UUID" class="flex justify-between w-full bg-white rounded py-1 px-3" @click="openWeaponFeatDescription(spell)">
                  <div class="font-bold mr-5">
                    {{ spell.name }}
                  </div>
  
                  <span>
                    ({{ spellCategoryName(spell.category) }})
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
                <WeaponFeatOption v-for="spell in spellTrees" :key="'weaponfeat' + spell.Name" :name="spell.Name" :identifier="spell.Identifier" @expand="selectedProficiency = $event" />
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="activeTab === 'weaponskills'" class="flex my-4">
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
        <div v-if="activeTab === 'spells'">
          <div v-if="selectedProficiency" class="flex flex-col w-full">
            <h1 class="sticky top-0 p-4 w-full flex justify-center text-white font-semibold z-10 border-b bg-dislight text-2xl">
              {{ spellCategoryName(selectedProficiency) }} Feats
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
  
        <div v-else-if="activeTab === 'weaponskills' && selectedDestinyFeat" class="flex flex-col w-full space-y-3">
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

const activeTab = shallowRef('spells')
const viewAll = shallowRef(false)

const selectedProficiency = shallowRef<string>('')
const selectedDestinyFeat = ref<any>(null)

const sorceries = ref([
  { Name: 'Soul/Crystal Sorcery', Identifier: 'SOUL_CRYSTAL' },
  { Name: 'Frost Sorcery', Identifier: 'FROST' },
  { Name: 'Assassin/Light Sorcery', Identifier: 'ASSASSIN_LIGHT' },
  { Name: 'Cosmic Sorcery', Identifier: 'COSMIC' },
  { Name: 'Time Magic', Identifier: 'TIME' },
])

const hexes = ref([
  { Name: 'Dark Hex', Identifier: 'DARK' },
  { Name: 'Debuffing Hex', Identifier: 'DEBUFF_HEX' },
  { Name: 'Blood Hex', Identifier: 'BLOOD' },
  { Name: 'Death Hex', Identifier: 'DEATH' },
  { Name: 'Darkfrost/Blackfire Hex', Identifier: 'DARKFROST_BLACKFIRE' },
])

const pyromancies = ref([
  { Name: 'Fire Pyromancy', Identifier: 'FIRE' },
  { Name: 'Dragon Pyromancy', Identifier: 'DRAGON' },
  { Name: 'Pestilence Pyromancy', Identifier: 'PESTILENCE' },
  { Name: 'Buffing and Debuffing Pyromancy', Identifier: 'BUFF_DEBUFF_PYRO' },
])

const miracles = ref([
  { Name: 'Healing Miracle', Identifier: 'HEALING' },
  { Name: 'Lightning Miracle', Identifier: 'LIGHTNING' },
  { Name: 'Buffing and Defensive Miracle', Identifier: 'BUFF_DEF_MIRACLE' },
  { Name: 'Force Miracle', Identifier: 'FORCE' },
])

const displayedWeaponFeats = computed(()=>{
  return (compendiumStore.WeaponFeats as any).filter((feat: any) => selectedProficiency.value === feat.category && (eligibleForWeaponFeat(feat) || viewAll.value)) || []
})

const learnedSpells = computed(()=>{
  return store.Spells
})

onBeforeMount(()=>{
  console.log('Spells', compendiumStore.Spells)
})

function spellCategoryName(spellCategoryName: string) {
  let spell = sorceries.value.find(s => s.Identifier === spellCategoryName)
  if (!spell) spell = hexes.value.find(s => s.Identifier === spellCategoryName)
  if (!spell) spell = pyromancies.value.find(s => s.Identifier === spellCategoryName)
  if (!spell) spell = miracles.value.find(s => s.Identifier === spellCategoryName)

  return spell?.Name
}

function openWeaponFeatDescription(feat: any) {
  selectedProficiency.value = feat.category
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
  return store.WeaponProficiencies[feat.category] >= feat.level
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