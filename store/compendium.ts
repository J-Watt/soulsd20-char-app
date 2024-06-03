import { defineStore } from 'pinia'

type RootState = {
  WeaponFeats: any[],
  DestinyFeats: any[],
  WeaponSkills: any[],
  Spells: any[],
  Spirits: any[],
  Items: any[],
  Rings: any[],
  Artifacts: any[],
  Armors: any[], 
  Weapons: any[]
}

export const useCompendiumStore = defineStore({
  id: 'compendiumStore',
  state: () => ({
    WeaponFeats: [],
    DestinyFeats: [],
    WeaponSkills: [],
    Spells: [],
    Spirits: [],
    Items: [],
    Rings: [],
    Artifacts: [],
    Armors: [], 
    Weapons: []
  } as RootState),

  actions: {
    async getCompendium() {
      const config = useRuntimeConfig()
      const weaponFeatsData: any[] = await $fetch(config.public.API_BASE_URL + '/weaponProfFeat/', {
        method: 'GET',
      })
      this.WeaponFeats = weaponFeatsData
      
      const destinyFeatsData: any[] = await $fetch(config.public.API_BASE_URL + '/destinyFeat/', {
        method: 'GET',
      })
      this.DestinyFeats = destinyFeatsData
      
      const weaponSkillsData: any[] = await $fetch(config.public.API_BASE_URL + '/weaponSkill/', {
        method: 'GET',
      })
      this.WeaponSkills = weaponSkillsData

      const spellsData: any[] = await $fetch(config.public.API_BASE_URL + '/spell/', {
        method: 'GET',
      })
      this.Spells = spellsData
      
      const spiritsData: any[] = await $fetch(config.public.API_BASE_URL + '/spirit/', {
        method: 'GET',
      })
      this.Spirits = spiritsData

      const itemsData: any[] = await $fetch(config.public.API_BASE_URL + '/item/', {
        method: 'GET',
      })
      this.Items = itemsData

      const ringsData: any[] = await $fetch(config.public.API_BASE_URL + '/ring/', {
        method: 'GET',
      })
      this.Rings = ringsData

      const artifactsData: any[] = await $fetch(config.public.API_BASE_URL + '/artifact/', {
        method: 'GET',
      })
      this.Artifacts = artifactsData

      const armorsData: any[] = await $fetch(config.public.API_BASE_URL + '/armor/', {
        method: 'GET',
      })
      this.Armors = armorsData

      const weaponsData: any[] = await $fetch(config.public.API_BASE_URL + '/weapon/', {
        method: 'GET',
      })
      this.Weapons = weaponsData

      console.log('Compendium state: ', this)
    },

    createItem(item: any) {
      this.Items.push(item)
    },
  }
})