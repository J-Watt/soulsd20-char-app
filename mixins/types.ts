export interface CharacterStats {
  Resistances: Resistances;
  Stats: Stats;
  Skills: Skills;
  Knowledge: Knowledge;
}

export interface Resistances {
  Curse: number;
  Frost: number;
  Bleed: number;
  Poison: number;
  Toxic: number;
  Poise: number;

  Physical: number;
  Magic: number;
  Fire: number;
  Lightning: number;
  Dark: number;

  FlatPhysical: number;
  FlatMagic: number;
  FlatFire: number;
  FlatLightning: number;
  FlatDark: number;
}

export interface Stats {
  Vitality: number;
  Endurance: number;
  Strength: number;
  Dexterity: number;
  Attunement: number;
  Intelligence: number;
  Faith: number;
}

export interface Skills {
  Athletics: number;
  Acrobatics: number;
  Perception: number;
  FireKeeping: number;
  Sanity: number;
  Stealth: number;
  Precision: number;
  Diplomacy: number;
}

export interface Knowledge {
  Magics: number;
  WorldHistory: number;
  Monsters: number;
  Cosmic: number;
}

export interface WeaponProficiencies {
  Spear: number;
  Shield: number;
  Gun: number;
  Dagger: number;
  Whip: number;
  Hammer: number;
  StraightSword: number;
  Katana: number;
  Greatsword: number;
  Reaper: number;
  Axe: number;
  Fist: number;
  Bow: number;
  Halberd: number;
  Twinblade: number;
  Sorcery: number;
  Miracles: number;
}

export interface Fate {
  UUID: string;
  Cost: number;
  Name: string;
  Description: string;
}

export interface Item {
  UUID: string;
  Name: string;
  Category: string;
  Description?: string;
  Quantity: number;
}

export interface Spell {
  UUID: string;
  Name: string;
  Description: string;
  Requirements: string;
  Cost: number;
  AP: number | string;
  FP: number;
  Damage: string;
  Range: string;
  Duration: string;
  ChargedRelationUUID: string;
  ChargedSpell: Spell | null;
}

export interface DestinyFeat {
  UUID: string;
  Name: string;
  Cost: number;
  Description: string;
}

export interface WeaponFeat {
  UUID: string;
  Name: string;
  Level: number;
  WeaponType: string;
  Description: string;
}

export interface WeaponFeats {
  Spear: WeaponFeat[];
  Shield: WeaponFeat[];
  Gun: WeaponFeat[];
  Dagger: WeaponFeat[];
  Whip: WeaponFeat[];
  Hammer: WeaponFeat[];
  StraightSword: WeaponFeat[];
  Katana: WeaponFeat[];
  Greatsword: WeaponFeat[];
  Reaper: WeaponFeat[];
  Axe: WeaponFeat[];
  Fist: WeaponFeat[];
  Bow: WeaponFeat[];
  Halberd: WeaponFeat[];
  Twinblade: WeaponFeat[];
  Sorcery: WeaponFeat[];
  Miracles: WeaponFeat[];
}

export interface UserInputValues {
  Exhaustion: number;
  FirekeepingChecks: number;

  TotalDodges: number;
  CurrentDodges: number;

  CurrentHP: number;
  CurrentFP: number;
  CurrentAP: number;

  MaxHPBonus: number;
  MaxFPBonus: number;
  MaxAPBonus: number;

  HpFlask: number;
  FpFlask: number;
  FlaskLevel: number;

  AttunementSlots: number;

  DestinyFeatUsages: {};
  WeaponFeatUsages: {};

  CurrentStatuses: Statuses;
  BonusStatuses: Statuses;
  BonusResistances: InputValueResistances;
  Conditions: Conditions;
}

export interface Conditions {
  ImpairedVision: boolean;
  Deaf: boolean;
  ArmFracture: boolean;
  LegFracture: boolean;
  Grappled: boolean;
  Restrained: boolean;
  Prone: boolean;
  Dazed: boolean;
  LockedUp: boolean;
  Staggered: boolean;
  Frenzied: boolean;
  Berzerk: boolean;
}

export interface Statuses {
  Curse: number;
  Frost: number;
  Bleed: number;
  Poison: number;
  Toxic: number;
  Poise: number;
}

export interface InputValueResistances {
  Physical: number;
  Magic: number;
  Fire: number;
  Lightning: number;
  Dark: number;

  FlatPhysical: number;
  FlatMagic: number;
  FlatFire: number;
  FlatLightning: number;
  FlatDark: number;
}

export interface Notes {
  General: any[];
}