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
            <div class="w-full">
              Souls Level
            </div>

            <div class="w-full">
              Souls
            </div>

            <div class="w-full">
              Gender
            </div>
  
            <div class="w-full">
              Lineage
            </div>
  
            <div class="w-full">
              Background
            </div>

            <div class="w-full">
              Undying
            </div>
          </div>
          
          
          <div class="flex flex-col justify-between w-full px-2 mr-2">
            <input
              v-model="playerStore.Level"
              type="text"
              class="w-full max-w-[160px] px-1 text-center text-charcoal bg-white rounded-sm"
            />

            <div class="w-full flex justify-center max-w-[160px] pl-1 pr-3 text-center text-charcoal bg-white rounded-sm">
              <input
                v-model="playerStore.Souls"
                type="text"
                class="w-6 text-right bg-white text-charcoal"
              />
              <div class="ml-1">
                /
                {{ requiredSoulsToLevel }}
              </div>
            </div>

            <input
              v-model="playerStore.Gender"
              type="text"
              class="w-full max-w-[160px] px-1 text-center text-charcoal bg-white rounded-sm"
            />

            <input
              v-model="playerStore.Lineage"
              type="text"
              class="w-full max-w-[160px] px-1 text-center text-charcoal bg-white rounded-sm"
            />

            <input
              v-model="playerStore.Background"
              type="text"
              class="w-full max-w-[160px] px-1 text-center text-charcoal bg-white rounded-sm"
            />

            <input
              v-model="playerStore.Undying"
              type="text"
              class="w-full max-w-[160px] px-1 text-center text-charcoal bg-white rounded-sm"
            />
          </div>
        </div>

        <div class="flex justify-between w-full mb-6">
          <div class="flex flex-col items-start w-2/4 mr-4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              Resistances
            </h2>
  
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
                name="Max bleed bonus"
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
  
              <!-- <CharacterGeneralOption 
                name="Current dodges"
                identifier="CurrentDodges"
                :statAmount="playerStore.UserInputValues.CurrentDodges"
              /> -->

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

        <div class="flex flex-col items-start w-2/4 mr-4">
            <h2 class="pb-4 text-lg font-bold text-white text-center">
              Calculated attributes
            </h2>
  
            <div class="flex flex-col space-y-2 justify-between w-full max-w-xs min-w-fit mb-12">
              <div class="flex justify-between items-center bg-white rounded p-1">
                <span class="mr-2 font-bold">
                  Dodge distance
                </span>

                <span>
                  {{ dodgeDistance }}
                </span>
              </div>

              <div class="flex justify-between items-center bg-white rounded p-1">
                <span class="mr-2 font-bold">
                  Dodge cost
                </span>

                <span>
                  {{ dodgeCost }}
                </span>
              </div>

              <div class="flex justify-between items-center bg-white rounded p-1">
                <span class="mr-2 font-bold">
                  Item usage cost
                </span>

                <span>
                  {{ itemCost }}
                </span>
              </div>

              <div class="flex justify-between items-center bg-white rounded p-1">
                <span class="mr-2 font-bold">
                  Jump distance (horizontal)
                </span>

                <span>
                  {{ jumpHorizontal }}
                </span>
              </div>

              <div class="flex justify-between items-center bg-white rounded p-1">
                <span class="mr-2 font-bold">
                  Jump distance (vertical)
                </span>

                <span>
                  {{ jumpVertical }}
                </span>
              </div>

              <div class="flex justify-between items-center bg-white rounded p-1">
                <span class="mr-2 font-bold">
                  Max equip load
                </span>

                <span>
                  {{ equipLoad }}
                </span>
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
import { usePlayerStore } from '@/store/player'

const playerStore = usePlayerStore()

const requiredSoulsToLevel = computed(()=>{
  return (playerStore.Level * 10) + 10
})

const dodgeDistance = computed(()=> {
  return 'TBD'
})

const dodgeCost = computed(()=> {
  return 'TBD'
})

const itemCost = computed(()=> {
  const dex = playerStore.CharacterStats.Stats.Dexterity
  if (dex < 10) return '4AP'
  if (dex < 18) return '3AP'
  return '2AP'
})

const jumpHorizontal = computed(()=> {
  return playerStore.CharacterStats.Stats.Strength / 2 + ' ft'
})

const jumpVertical = computed(()=> {
  return playerStore.CharacterStats.Stats.Strength / 4 + ' ft'
})

const equipLoad = computed(()=> {
  return ((playerStore.CharacterStats.Stats.Strength + playerStore.CharacterStats.Stats.Endurance) / 2) * 15
})
</script>

<style scoped>
</style>