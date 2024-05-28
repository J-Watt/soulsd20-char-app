import { defineStore } from 'pinia'

type RootState = {
  Items: any[];
  Spells: {
    Pyro: any[];
    Staff: any[];
  };
  WeaponFeats: any[];
  DestinyFeats: any[];
}

export const useCompendiumStore = defineStore({
  id: 'compendiumStore',
  state: () => ({
    Items: [],
    Spells: {
      Pyro: [],
      Staff: [],
    },
    WeaponFeats: [],
    DestinyFeats: [],
  } as RootState),

  actions: {
    async getCompendium() {
      const config = useRuntimeConfig()
      const data = await $fetch(config.public.API_BASE_URL + '/weaponProfFeat/', {
        method: 'GET',
        mode: 'no-cors',
        referrerPolicy: 'origin-when-cross-origin',
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'
        },
      })

      console.log('Weapon data: ', data)
    },

    createItem(item) {
      this.Items.push(item)
    },
  }
})

// const weaponFeats = {
//   Spear: [
//     {
//       UUID: 'a',
//       Level: 3,
//       WeaponType: 'Spear',
//       Name: 'Athletic Thrusts',
//       Description: 'Athletics +1 and Acrobatics +1. Increase the range of all spear attacks by one grid space (5 feet).',
//     },
//     {
//       UUID: 'b',
//       Level: 5,
//       WeaponType: 'Spear',
//       Name: 'Stand Back',
//       Description: `You can spend 2FP on your turn to further increase the range of all spear attacks by one grid
//         space (5 feet), until the start of your next turn (including any slow actions which resolve at the start of that next turn).
//         Upon activating this spear range increase on your turn, you may move one grid space in a direction of your choice for
//         no AP cost. Permanently increase the range of all halberd, reaper and whip attacks by one space (5 feet).`,
//     },
//     {
//       UUID: 'c',
//       Level: 5,
//       WeaponType: 'Spear',
//       Name: 'Improved Charge',
//       Description: `Learn the weapon skill Charge if you have not already learned it. The Charge weapon
//         skill now also hits all enemies you charge through up to the final location, and has its distance increased by one space.
//         You may also stop your charge on any space after your starting location.`,
//     }
//   ]
// }