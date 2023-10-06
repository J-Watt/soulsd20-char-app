<template>
  <div class="flex w-full" style="min-height: calc(100vh - 268px);">
    <div class="w-2/4 p-4 border-r border-white">
      <h1 class="w-full flex justify-center mb-16 text-white text-2xl font-semibold">
        Character
      </h1>
  
      <div class="w-fit">
        <div class="flex justify-between">
          <div class="flex flex-col justify-between mr-4 mb-12 border border-white p-2">
            <div class="flex items-center h-1/6">
              <CharacterStatOption
                name="Athletics"
                identifier="Athletics"
                sType="skill"
                :statAmount="playerStore.Skills.Athletics"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Acrobatics"
                identifier="Acrobatics"
                sType="skill"
                :statAmount="playerStore.Skills.Acrobatics"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Perception"
                identifier="Perception"
                sType="skill"
                :statAmount="playerStore.Skills.Perception"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Fire Keeping"
                identifier="FireKeeping"
                sType="skill"
                :statAmount="playerStore.Skills.FireKeeping"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Sanity"
                identifier="Sanity"
                sType="skill"
                :statAmount="playerStore.Skills.Sanity"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Stealth"
                identifier="Stealth"
                sType="skill"
                :statAmount="playerStore.Skills.Stealth"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Precision"
                identifier="Precision"
                sType="skill"
                :statAmount="playerStore.Skills.Precision"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Diplomacy"
                identifier="Diplomacy"
                sType="skill"
                :statAmount="playerStore.Skills.Diplomacy"
              />
            </div>
          </div>
      
      
      
      
          <div class="flex flex-col justify-between mr-4 mb-12 border border-white p-2">
            <div class="flex items-center h-1/6">
              <CharacterStatOption
                name="Vitality"
                identifier="Vitality"
                sType="stat"
                :statAmount="playerStore.Stats.Vitality"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Endurance"
                identifier="Endurance"
                sType="stat"
                :statAmount="playerStore.Stats.Endurance"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Strength"
                identifier="Strength"
                sType="stat"
                :statAmount="playerStore.Stats.Strength"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Dexterity"
                identifier="Dexterity"
                sType="stat"
                :statAmount="playerStore.Stats.Dexterity"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Attunement"
                identifier="Attunement"
                sType="stat"
                :statAmount="playerStore.Stats.Attunement"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Intelligence"
                identifier="Intelligence"
                sType="stat"
                :statAmount="playerStore.Stats.Intelligence"
              />
            </div>
      
            <div class="flex items-center h-1/6">          
              <CharacterStatOption
                name="Faith"
                identifier="Faith"
                sType="stat"
                :statAmount="playerStore.Stats.Faith"
              />
            </div>
          </div>
        </div>
    
    
    
    
        <div class="flex flex-col justify-between mr-4 mb-12 border border-white p-2">
          <div class="flex items-center h-1/6">
            <CharacterStatOption
              name="Magics"
              identifier="Magics"
              sType="knowledge"
              :statAmount="playerStore.Knowledge.Magics"
            />
          </div>
    
          <div class="flex items-center h-1/6">          
            <CharacterStatOption
              name="World/History"
              identifier="WorldHistory"
              sType="knowledge"
              :statAmount="playerStore.Knowledge.WorldHistory"
            />
          </div>
    
          <div class="flex items-center h-1/6">          
            <CharacterStatOption
              name="Monsters"
              identifier="Monsters"
              sType="knowledge"
              :statAmount="playerStore.Knowledge.Monsters"
            />
          </div>
    
          <div class="flex items-center h-1/6">          
            <CharacterStatOption
              name="Cosmic"
              identifier="Cosmic"
              sType="knowledge"
              :statAmount="playerStore.Knowledge.Cosmic"
            />
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

const playerStore = usePlayerStore()
</script>

<style scoped>
</style>