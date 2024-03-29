import { defineStore } from 'pinia'
import { useCompendiumStore } from '~~/store/compendium'
import { 
  CharacterStats,
  DestinyFeat,
  Item,
  Spell,
  WeaponFeat,
  WeaponProficiencies,
  UserInputValues,
} from '@/mixins/types'

type RootState = {
  UUID: string;
  UserUUID: string;
  Name: string;
  Gender: string;
  Race: string;
  Class: string;
  Undying: number;
  Souls: number;
  Level: number;

  UserInputValues: UserInputValues;

  AttunementSlots: number;
  DestinyFeatSlots: number;
  AttunedSpells: Spell[];
  DestinyFeats: DestinyFeat[];
  Inventory: Item[],
  WeaponFeats: WeaponFeat[];
  CharacterStats: CharacterStats;
  Spells: Spell[];
  WeaponProficiencies: WeaponProficiencies;
}

export const usePlayerStore = defineStore({
  id: 'playerStore',
  state: () => ({
    UUID: '',
    UserUUID: '',
    Name: 'Yah',
    Gender: 'Male',
    Race: 'Human',
    Class: 'Knight',
    Undying: 0,
    Souls: 0,
    Level: 0,

    UserInputValues: {
      Exhaustion: 0,
      FirekeepingChecks: 0,

      TotalDodges: 0,
      CurrentDodges: 0,

      CurrentHP: 0,
      CurrentFP: 0,
      CurrentAP: 0,

      MaxHPBonus: 0,
      MaxFPBonus: 0,
      MaxAPBonus: 0,

      HpFlask: 0,
      FpFlask: 0,
      FlaskLevel: 0,

      AttunementSlots: 0,

      DestinyFeatUsages: {},
      WeaponFeatUsages: {},

      CurrentStatuses: {
        Curse: 0,
        Frost: 0,
        Bleed: 0,
        Poison: 0,
        Toxic: 0,
        Poise: 0,
      },
      BonusStatuses: {
        Curse: 0,
        Frost: 0,
        Bleed: 0,
        Poison: 0,
        Toxic: 0,
        Poise: 0,
      },
      BonusResistances: {
        Physical: 0,
        Magic: 0,
        Fire: 0,
        Lightning: 0,
        Dark: 0,

        FlatPhysical: 0,
        FlatMagic: 0,
        FlatFire: 0,
        FlatLightning: 0,
        FlatDark: 0,
      },
      Conditions: {
        ImpairedVision: false,
        Deaf: false,
        ArmFracture: false,
        LegFracture: false,
        Grappled: false,
        Restrained: false,
        Prone: false,
        Dazed: false,
        LockedUp: false,
        Staggered: false,
        Frenzied: false,
        Berzerk: false,
      }
    },

    Inventory: [],
    AttunementSlots: 12,
    AttunedSpells: [],
    DestinyFeatSlots: 0,
    DestinyFeats: [],
    WeaponFeats: [],
    CharacterStats: {
      Resistances: {
        Curse: 0,
        Frost: 0,
        Bleed: 0,
        Poison: 0,
        Toxic: 0,
        Poise: 0,

        Physical: 0,
        Magic: 0,
        Fire: 0,
        Lightning: 0,
        Dark: 0,

        FlatPhysical: 0,
        FlatMagic: 0,
        FlatFire: 0,
        FlatLightning: 0,
        FlatDark: 0,
      },
      Stats: {
        Vitality: 10,
        Endurance: 10,
        Strength: 10,
        Dexterity: 10,
        Attunement: 10,
        Intelligence: 10,
        Faith: 10,
      },
      Skills: {
        Athletics: 0,
        Acrobatics: 0,
        Perception: 0,
        FireKeeping: 0,
        Sanity: 0,
        Stealth: 0,
        Precision: 0,
        Diplomacy: 0,
      },
      Knowledge: {
        Magics: 0,
        WorldHistory: 0,
        Monsters: 0,
        Cosmic: 0,
      },
    },
    Spells: [],
    WeaponProficiencies: {
      Spear: 0,
      Shield: 0,
      Gun: 0,
      Dagger: 0,
      Whip: 0,
      Hammer: 0,
      StraightSword: 0,
      Katana: 0,
      Greatsword: 0,
      Reaper: 0,
      Axe: 0,
      Fist: 0,
      Bow: 0,
      Halberd: 0,
      Twinblade: 0,
      Sorcery: 0,
      Miracles: 0,
    },
    AvatarURL: '',
  } as RootState),

  actions: {
    attuneSpell(spellUUID: string) {
      const compendiumStore = useCompendiumStore()
      const spell = compendiumStore.Spells.find(i => i.UUID === spellUUID)
      if (!spell) return
      this.AttunedSpells.push(JSON.parse(JSON.stringify(spell)))
    },

    unattuneSpell(index: number) {
      if (!this.AttunedSpells[index]) return
      this.AttunedSpells.splice(index, 1)
    },

    createItem(item: Item) {
      const compendiumStore = useCompendiumStore()
      compendiumStore.Items.push(item)
    },

    addInventoryItem(itemUUID: string) {
      const compendiumStore = useCompendiumStore()
      const item = compendiumStore.Items.find(i => i.UUID === itemUUID)
      if (!item) return
      this.Inventory.push(JSON.parse(JSON.stringify(item)))
    },

    removeInventoryItem(itemUUID: string) {
      const compendiumStore = useCompendiumStore()
      const item = compendiumStore.Items.find(i => i.UUID === itemUUID)
      if (!item) return
      this.Inventory.splice(this.Inventory.indexOf(item), 1)
    },

    increaseItemQuantity(itemUUID: string) {
      const item = this.Inventory.find(i => i.UUID === itemUUID)
      if (!item) return
      item.Quantity++
    },

    decreaseItemQuantity(itemUUID: string) {
      const item = this.Inventory.find(i => i.UUID === itemUUID)
      if (!item) return
      item.Quantity--
      if (item.Quantity < 0) item.Quantity = 0
    }
  }
})