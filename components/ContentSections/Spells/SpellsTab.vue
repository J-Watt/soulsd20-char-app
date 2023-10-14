<template>
  <div class="flex w-full overflow-hidden main-tab">
    <div class="flex flex-col w-2/4 border-r overflow-auto">
      <h1 class="sticky top-0 py-4 bg-deepblue w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
        Attuned spells
      </h1>
    
      <div class="flex flex-col">
        <div class="border-b">
          <div class="flex w-full h-full text-xs px-4">
            <div v-if="store.AttunementSlots === 0" class="flex justify-center spells-center w-full h-full text-white text-2xl" style="min-height: 184px;">
              You have no spell slots
            </div>
            <div v-else class="flex flex-wrap w-full inv py-4">
              <div v-for="i in store.AttunementSlots" :key="'spellslot' + i" class="flex justify-center items-center spells-center text-center relative m-3 w-28 h-28 rounded overflow-hidden bg-white">
                <div v-if="store.AttunedSpells[i-1]" class="font-bold text-lg">
                  {{ store.AttunedSpells[i-1].Name }}
                </div>

                <div v-else class="italic text-gray-400 text-lg select-none">
                  Empty slot
                </div>

                <button v-if="store.AttunedSpells[i-1]" class="flex spells-center justify-center absolute top-0 right-0 rounded-bl-sm w-4 h-4" @click="unattuneSpell(i-1)">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
    
        <h1 class="sticky top-0 py-4 bg-deepblue w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
          Spells
        </h1>

        <div class="p-4">
          <div class="flex flex-wrap w-full text-xs">
            <div v-for="spell in allSpells" :key="'spell-' + spell.Name" class="flex flex-col justify-between items-center text-center relative m-3 w-28 h-28 rounded overflow-hidden bg-white">
              <div class="flex items-center h-full text-lg">
                {{ spell.Name }}
              </div>
      
              <button v-if="spellIsNotAttuned(spell)" class="flex items-center justify-center bg-blue-900 text-white w-full h-4" @click="attuneSpell(spell)">
                ~ Attune ~
              </button>

              <span v-else class="w-full h-4 rounded-bl-sm text-white text-xs bg-charcoal">
                Attuned
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/4 h-full p-4">

    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import { useCompendiumStore } from '@/store/compendium'
import * as invutils from '@/mixins/invutils'
import { Spell } from '@/mixins/types'

const emit = defineEmits(['tab'])

const store = usePlayerStore()
const compendiumStore = useCompendiumStore()
const allSpells = ref(compendiumStore.Spells)

const activeTab = shallowRef('all')

function attuneSpell(spell: Spell) {
  store.attuneSpell(spell.UUID)
}

function unattuneSpell(index: number) {
  store.unattuneSpell(index)
}

function spellIsNotAttuned(spell: Spell) {
  return !store.AttunedSpells.find(s => s.UUID === spell.UUID)
}
</script>