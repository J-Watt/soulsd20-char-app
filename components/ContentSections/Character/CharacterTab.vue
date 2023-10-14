<template>
  <div class="flex flex-col w-full main-tab">
    <h1 class="py-4 bg-dismid w-full flex justify-center text-white text-3xl font-semibold z-10 border-b">
      Character
    </h1>

    <div class="flex w-full h-full">
      <div class="w-2/5 p-4 border-r overflow-auto">
        <div class="flex w-full mb-4 text-white">
          <!-- left -->
          <div class="flex flex-col space-y-2 border-r py-1 px-2">
            <!-- gender -->
            <div class="w-full">
              Gender
            </div>
  
            <!-- race -->
            <div class="w-full">
              Race
            </div>
  
            <!-- class -->
            <div class="w-full">
              Class
            </div>
          </div>
  
          <div class="flex flex-col w-full px-2 mr-2">
            <div class="flex items-center text-left h-1/3 w-full">
              <input
                v-model="playerStore.Gender"
                type="text"
                class="px-1 text-center text-charcoal rounded-sm"
              />
            </div>
  
            <div class="flex items-center text-left h-1/3 w-full">
              <input
                v-model="playerStore.Race"
                type="text"
                class="px-1 text-center text-charcoal rounded-sm"
              />
            </div>
  
            <div class="flex items-center text-left h-1/3 w-full">
              <input
                v-model="playerStore.Class"
                type="text"
                class="px-1 text-center text-charcoal rounded-sm"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-between w-full mb-20">
          <div class="flex flex-col items-start w-2/4 mr-4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              Resistances
            </h2>
  
            <div class="flex flex-col space-y-2 justify-between w-full max-w-xs min-w-fit mb-12">
              <CharacterResistanceOption
                name="Physical resistance"
                identifier="Physical"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.Physical"
              />
                
              <CharacterResistanceOption
                name="Magic resistance"
                identifier="Magic"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.Magic"
              />
                
              <CharacterResistanceOption
                name="Fire resistance"
                identifier="Fire"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.Fire"
              />
                
              <CharacterResistanceOption
                name="Lightning resistance"
                identifier="Lightning"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.Lightning"
              />
                
              <CharacterResistanceOption
                name="Dark resistance"
                identifier="Dark"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.Dark"
              />
            </div>
  
            <div class="flex flex-col space-y-2 justify-between w-full max-w-xs min-w-fit mb-12">
              <CharacterResistanceOption
                name="Flat physical resistance"
                identifier="FlatPhysical"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.FlatPhysical"
              />
                
              <CharacterResistanceOption
                name="Flat magic resistance"
                identifier="FlatMagic"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.FlatMagic"
              />
                
              <CharacterResistanceOption
                name="Flat fire resistance"
                identifier="FlatFire"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.FlatFire"
              />
                
              <CharacterResistanceOption
                name="Flat lightning resistance"
                identifier="FlatLightning"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.FlatLightning"
              />
                
              <CharacterResistanceOption
                name="Flat dark resistance"
                identifier="FlatDark"
                sType="resistance"
                :statAmount="playerStore.UserInputValues.BonusResistances.FlatDark"
              />
            </div>
  
            <div class="flex flex-col space-y-2 justify-between w-full max-w-xs min-w-fit mb-12">
              <CharacterResistanceOption
                name="Max curse bonus"
                identifier="Curse"
                sType="status"
                :statAmount="playerStore.UserInputValues.BonusStatuses.Curse"
              />
                
              <CharacterResistanceOption
                name="Max frost bonus"
                identifier="Frost"
                sType="status"
                :statAmount="playerStore.UserInputValues.BonusStatuses.Frost"
              />
                
              <CharacterResistanceOption
                name="Max fleed bonus"
                identifier="Bleed"
                sType="status"
                :statAmount="playerStore.UserInputValues.BonusStatuses.Bleed"
              />
                
              <CharacterResistanceOption
                name="Max poison bonus"
                identifier="Poison"
                sType="status"
                :statAmount="playerStore.UserInputValues.BonusStatuses.Poison"
              />
                
              <CharacterResistanceOption
                name="Max toxic bonus"
                identifier="Toxic"
                sType="status"
                :statAmount="playerStore.UserInputValues.BonusStatuses.Toxic"
              />
  
              <CharacterResistanceOption
                name="Max poise bonus"
                identifier="Poise"
                sType="status"
                :statAmount="playerStore.UserInputValues.BonusStatuses.Poise"
              />
            </div>
          </div>
  
          <div class="flex flex-col items-start w-2/4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              General
            </h2>
  
            <div class="flex flex-col space-y-2 justify-between w-full max-w-xs min-w-fit mb-12">
              <CharacterGeneralOption 
                name="Max HP bonus"
                identifier="MaxHPBonus"
                :statAmount="playerStore.UserInputValues.MaxHPBonus"
              />
  
              <CharacterGeneralOption 
                name="Max FP bonus"
                identifier="MaxFPBonus"
                :statAmount="playerStore.UserInputValues.MaxFPBonus"
              />
  
              <CharacterGeneralOption 
                name="Max AP bonus"
                identifier="MaxAPBonus"
                :statAmount="playerStore.UserInputValues.MaxAPBonus"
              />

              <CharacterGeneralOption 
                name="Flask level"
                identifier="FlaskLevel"
                :statAmount="playerStore.UserInputValues.FlaskLevel"
              />

              <CharacterGeneralOption 
                name="Total dodges"
                identifier="TotalDodges"
                :statAmount="playerStore.UserInputValues.TotalDodges"
              />
  
              <CharacterGeneralOption 
                name="Current dodges"
                identifier="CurrentDodges"
                :statAmount="playerStore.UserInputValues.CurrentDodges"
              />

              <CharacterGeneralOption 
                name="Attunement slots bonus"
                identifier="AttunementSlots"
                :statAmount="playerStore.UserInputValues.AttunementSlots"
              />

              <CharacterGeneralOption 
                name="Firekeeping checks"
                identifier="FirekeepingChecks"
                :statAmount="playerStore.UserInputValues.FirekeepingChecks"
              />

              <CharacterGeneralOption 
                name="Exhaustion"
                identifier="Exhaustion"
                :statAmount="playerStore.UserInputValues.Exhaustion"
              />
            </div>
          </div>
        </div>
      </div>
  
      <div class="w-3/5 h-full pb-4 overflow-auto">  
        <div class="w-full p-4">
          <div class="flex justify-around space-x-8">
            <div class="flex flex-col items-start w-2/4">
              <h2 class="pb-4 text-lg font-bold text-white text-center">
                Skills
              </h2>

              <div class="flex flex-col space-y-2 justify-between items-center mb-12 w-full max-w-sm">
                <CharacterStatOption
                  name="Athletics"
                  identifier="Athletics"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Athletics"
                />
                  
                <CharacterStatOption
                  name="Acrobatics"
                  identifier="Acrobatics"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Acrobatics"
                />
                  
                <CharacterStatOption
                  name="Perception"
                  identifier="Perception"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Perception"
                />
                  
                <CharacterStatOption
                  name="Fire Keeping"
                  identifier="FireKeeping"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.FireKeeping"
                />
                  
                <CharacterStatOption
                  name="Sanity"
                  identifier="Sanity"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Sanity"
                />
                  
                <CharacterStatOption
                  name="Stealth"
                  identifier="Stealth"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Stealth"
                />
                  
                <CharacterStatOption
                  name="Precision"
                  identifier="Precision"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Precision"
                />
                  
                <CharacterStatOption
                  name="Diplomacy"
                  identifier="Diplomacy"
                  sType="skill"
                  :statAmount="playerStore.CharacterStats.Skills.Diplomacy"
                />
              </div>
            </div>
        
            <div class="flex flex-col items-start w-2/4">
              <h2 class="pb-4 text-lg font-bold text-white text-center">
                Stats
              </h2>
              <div class="flex flex-col justify-start space-y-2 mb-12 w-full max-w-sm">
                  <CharacterStatOption
                    name="Vitality"
                    identifier="Vitality"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Vitality"
                  />
                    
                  <CharacterStatOption
                    name="Endurance"
                    identifier="Endurance"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Endurance"
                  />
                    
                  <CharacterStatOption
                    name="Strength"
                    identifier="Strength"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Strength"
                  />
                    
                  <CharacterStatOption
                    name="Dexterity"
                    identifier="Dexterity"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Dexterity"
                  />
                    
                  <CharacterStatOption
                    name="Attunement"
                    identifier="Attunement"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Attunement"
                  />
                    
                  <CharacterStatOption
                    name="Intelligence"
                    identifier="Intelligence"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Intelligence"
                  />
                    
                  <CharacterStatOption
                    name="Faith"
                    identifier="Faith"
                    sType="stat"
                    :statAmount="playerStore.CharacterStats.Stats.Faith"
                  />
              </div>
            </div>
          </div>
      
          <div class="flex justify-between space-x-8">
            <div class="flex flex-col items-start w-2/4">
              <h2 class="pb-4 text-lg font-bold text-white text-center">
                Knowledge
              </h2>
    
              <div class="flex flex-col justify-between space-y-2 mb-12 w-full max-w-sm">
                  <CharacterStatOption
                    name="Magics"
                    identifier="Magics"
                    sType="knowledge"
                    :statAmount="playerStore.CharacterStats.Knowledge.Magics"
                  />
                
                  <CharacterStatOption
                    name="World/History"
                    identifier="WorldHistory"
                    sType="knowledge"
                    :statAmount="playerStore.CharacterStats.Knowledge.WorldHistory"
                  />
                
                  <CharacterStatOption
                    name="Monsters"
                    identifier="Monsters"
                    sType="knowledge"
                    :statAmount="playerStore.CharacterStats.Knowledge.Monsters"
                  />
                
                  <CharacterStatOption
                    name="Cosmic"
                    identifier="Cosmic"
                    sType="knowledge"
                    :statAmount="playerStore.CharacterStats.Knowledge.Cosmic"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as utils from '@/mixins/utils'
import { usePlayerStore } from '@/store/player'

const playerStore = usePlayerStore()
</script>

<style scoped>
</style>