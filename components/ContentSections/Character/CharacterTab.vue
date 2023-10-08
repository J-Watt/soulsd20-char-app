<template>
  <div class="flex w-full main-tab">
    <div class="w-2/4 pb-4 border-r border-white overflow-auto">
      <h1 class="sticky top-0 py-4 bg-deepblue w-full flex justify-center text-white text-2xl font-semibold z-10 border-b border-borderlight">
        Character
      </h1>
  
      <div class="w-full p-4">
        <div class="flex justify-around space-x-8">
          <div class="flex flex-col w-2/4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              Skills
            </h2>

            <div class="flex flex-col space-y-1 justify-between mb-12">
              <div class="flex items-center">
                <CharacterStatOption
                  name="Athletics"
                  identifier="Athletics"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Athletics"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Acrobatics"
                  identifier="Acrobatics"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Acrobatics"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Perception"
                  identifier="Perception"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Perception"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Fire Keeping"
                  identifier="FireKeeping"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.FireKeeping"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Sanity"
                  identifier="Sanity"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Sanity"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Stealth"
                  identifier="Stealth"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Stealth"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Precision"
                  identifier="Precision"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Precision"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Diplomacy"
                  identifier="Diplomacy"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Diplomacy"
                />
              </div>
            </div>
          </div>
      
      
      
      
          <div class="flex flex-col w-2/4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              Stats
            </h2>
            <div class="flex flex-col justify-start space-y-1 mb-12">
              <div class="flex items-center">
                <CharacterStatOption
                  name="Vitality"
                  identifier="Vitality"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Vitality"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Endurance"
                  identifier="Endurance"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Endurance"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Strength"
                  identifier="Strength"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Strength"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Dexterity"
                  identifier="Dexterity"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Dexterity"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Attunement"
                  identifier="Attunement"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Attunement"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Intelligence"
                  identifier="Intelligence"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Intelligence"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Faith"
                  identifier="Faith"
                  sType="stat"
                  :statAmount="playerStore.CharacterStats.Stats.Faith"
                />
              </div>
            </div>
          </div>
        </div>
    
    
    
    
        <div class="flex justify-between space-x-8">
          <div class="flex flex-col w-2/4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              Knowledge
            </h2>
  
            <div class="flex flex-col justify-between space-y-1 mb-12">
              <div class="flex items-center">
                <CharacterStatOption
                  name="Magics"
                  identifier="Magics"
                  sType="knowledge"
                  :statAmount="playerStore.CharacterStats.Knowledge.Magics"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="World/History"
                  identifier="WorldHistory"
                  sType="knowledge"
                  :statAmount="playerStore.CharacterStats.Knowledge.WorldHistory"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Monsters"
                  identifier="Monsters"
                  sType="knowledge"
                  :statAmount="playerStore.CharacterStats.Knowledge.Monsters"
                />
              </div>
        
              <div class="flex items-center">          
                <CharacterStatOption
                  name="Cosmic"
                  identifier="Cosmic"
                  sType="knowledge"
                  :statAmount="playerStore.CharacterStats.Knowledge.Cosmic"
                />
              </div>
            </div>
          </div>

          <div class="w-2/4" />
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