import { defineStore } from 'pinia'
import { useCompendiumStore } from '~~/store/compendium'
import { 
  CharacterStats,
  DestinyFeat,
  Item,
  Spell,
  WeaponFeat,
  UserInputValues,
  Notes,
} from '@/mixins/types'

type RootState = {
  UUID: string;
  UserUUID: string;
  Name: string;
  Gender: string;
  Lineage: string;
  Background: string;
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
  WeaponProficiencies: any;

  Notes: Notes;
}

export const usePlayerStore = defineStore({
  id: 'playerStore',
  state: () => ({
    UUID: '',
    UserUUID: '',
    Name: 'Yah',
    Gender: 'Male',
    Lineage: 'Human',
    Background: 'Knight',
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
    Spells: [],
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
    WeaponProficiencies: {
      FIST: 0,
      DAGGER: 0,
      STRAIGHT_THRUST: 0,
      KATANA_CURVED: 0,
      ULTRA_GREAT_SWORD: 0,
      GREAT_AXE: 0,
      GREAT_HAMMER: 0,
      TWINBLADE: 0,
      SPEAR: 0,
      HALBERD: 0,
      REAPER: 0,
      WHIP: 0,
      CROSS_BOW: 0,
      GREAT_BOW_BALLISTA: 0,
      GUN: 0,
      SHIELD: 0,
      SORCERY: 0,
      MIRACLE: 0,
      PYROMANCY: 0,
      HEX: 0,
      SPIRIT_SUMMONING: 0,
      DUAL_WIELDING: 0,
    },
    Notes: {
      General: []
    },
    AvatarURL: '',
  } as RootState),

  actions: {
    attuneSpell(spellUUID: string) {
      const compendiumStore = useCompendiumStore()
      // const spell = compendiumStore.Spells.find(i => i.UUID === spellUUID)
      // if (!spell) return
      // this.AttunedSpells.push(JSON.parse(JSON.stringify(spell)))
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