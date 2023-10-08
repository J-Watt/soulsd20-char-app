
Database Stuff

// Table --- users ---
type User struct {
  UUID string
  CreatedAt time.Time
  Email string
  FirstName string
  LastName string
  PasswordHash string
  Campaigns []string // slice of campaign uuids
  CampaignOwnerships []string // slice of campaign uuids
  Characters []string
}

type Campaign struct {
  UUID string
  OwnedBy []string
  Users []string
}

type AttunedAction struct {
  UUID string
  CampaignUUIDs string[]
  Name string
  Description string
  ActionType string // Spell / Skill

  IntRequirement int
  FaiRequirement int

  AttunementCost int
  APCost int
  FPCost int

  IsSlow bool
  SpellCategory string
  UsageType string
  BaseDmg string
  RangeInfo string
  Duration string

  ChargedSpell string // uuid
}

// Table --- characters ---
type Character struct {
  UUID string
  CreatedAt time.Time
  UserUUID string
  Name string
  Gender string
  Race string
  Background string
  Undying int
  Souls int
  Level int

  UserInputValues UserInputValues

  Inventory []Item
  Equipment Equipment
  LearnedAttunedActions []string
  AttunedActions []string
  DestinyFeatSlots int
  DestinyFeats []string
  CharacterStats CharacterStats
  AvatarURL string
}

type Equipment struct {
  IsTwoHanding bool
  MainHand Item
  OffHand Item
  Armor Item
  Artifact Item
  Ring1 Item
  Ring2 Item
  Ring3 Item
  Ring4 Item
}

type UserInputValues struct {
  Exhaustion int

  TotalDodges int
  CurrentDodges int

  CurrentHP int
  CurrentFP int
  CurrentAP int

  MaxHPBonus int
  MaxFPBonus int
  MaxAPBonus int

  HpFlask int
  FpFlask int
  FlaskLevel int

  AttunementSlots int

  DestinyFeatUsages map[string]int
  WeaponFeatUsages map[string]int

  CurrentStatuses Statuses
  BonusStatuses Statuses
  BonusResistances Resistances
  Conditions Conditions
}

type Conditions struct {
  ImpairedVision bool
  Deaf bool
  ArmFracture bool
  LegFracture bool
  Grappled bool
  Restrained bool
  Prone bool
  Dazed bool
  LockedUp bool
  Staggered bool
  Frenzied bool
  Berzerk bool
}

type Statuses struct {
  Curse int
  Frost int
  Bleed int
  Poison int
  Toxic int
  Poise int
}

type Resistances struct {
  Physical int
  Magic int
  Fire int
  Lightning int
  Dark int

  FlatPhysical int
  FlatMagic int
  FlatFire int
  FlatLightning int
  FlatDark int
}

type DestinyFeat struct{
  UUID string
  Name string
  Cost int
  Description string
  
  UsageFormulaInfo UsageFormulaInfo

  Bonuses Bonuses
}

type WeaponFeat struct {
  UUID string
  Name string
  Level int
  WeaponType string
  Description string

  UsageFormulaInfo UsageFormulaInfo

  Bonuses Bonuses
}

type UsageFormulaInfo struct {
  UsedStat string
  UsedSkill string
  UseLevel bool

  BaseAmt int
  ModifierAmount int
}

type CharacterStats struct {
  BaseHP int
  RolledHP int[]
  BaseStats Stats
  LeveledStats Stats
  Skills Skills
  Knowledge Knowledge
  AttunedActions AttunedAction[]
  WeaponProficiencies WeaponProficiencies
}

type Stats struct {
  Vitality int
  Endurance int
  Strength int
  Dexterity int
  Attunement int
  Intelligence int
  Faith int
}

type Skills struct {
  Athletics int
  Acrobatics int
  Perception int
  FireKeeping int
  Sanity int
  Stealth int
  Precision int
  Diplomacy int
}

type Knowledge struct {
  Magics int
  WorldHistory int
  Monsters int
  Cosmic int
}

type WeaponProficiencies struct {
  Spear int
  Shield int
  Gun int
  Dagger int
  Whip int
  Hammer int
  StraightSword int
  Katana int
  Greatsword int
  Reaper int
  Axe int
  Fist int
  Bow int
  Halberd int
  Twinblade int
  Sorcery int
  Miracles int
}

// Table --- inventories ---
type Inventory struct {
  Items Item[]
  Weapons Weapon[]
  Armor Armor[]
  Rings Ring[]
  Artifacts Artifact[]
}

// Table --- equipment ---
type Equipment struct {
  CharacterUUID string
  Mainhand Weapon
  Offhand Weapon
  Armor Armor
  Artifact Artifact
  Ring1 Ring
  Ring2 Ring
  Ring3 Ring
  Ring4 Ring
}

// Table --- items ---
type Item struct {
  UUID string
  CreatedAt time.Time
  CreatedBy string // UUID of user
  CampaignUUIDs string[]
  
  Name string
  Description string
  Price map[string]int

  ItemType ItemType
}

type ItemType string

const (
  ITEM_TYPE_TOOL ItemType = "Tool"
  ITEM_TYPE_MISC ItemType = "Misc"
)

// Table --- weapons ---
type Weapon struct {
  UUID string
  CreatedAt time.Time
  CreatedBy string // UUID of user
  CampaignUUIDs string[]

  Name string
  Description string
  Price map[string]int
  Identifier string
  Damages []Damage
  Durability int
}

type Damage struct {
  DieCount int
  DieValue int
  Scaling []Scaling
}

type Scaling struct {
  ScalingType string
  Value int
}

const (
  SCALING_TYPE_STR ScalingType = "Str"
  SCALING_TYPE_DEX ScalingType = "Dex"
  SCALING_TYPE_INT ScalingType = "Int"
  SCALING_TYPE_FAI ScalingType = "Fai"
)

// Table --- armors ---
type Armor struct {
  UUID string
  CreatedAt time.Time
  CreatedBy string // UUID of user
  CampaignUUIDs string[]

  Name string
  Description string
  Price map[string]int
  ArmorType ArmorType
  Bonuses Bonuses
}

type ArmorType string

const (
  ARMOR_TYPE_NONE ArmorType = "None"
  ARMOR_TYPE_LIGHT ArmorType = "Light"
  ARMOR_TYPE_MEDIUM = "Medium"
  ARMOR_TYPE_HEAVY = "Heavy"
)

type Ring struct {
  UUID string
  CreatedAt time.Time
  CreatedBy string // UUID of user
  CampaignUUIDs string[]

  Name string
  Description string
  Tier int
  Price map[string]int
  Bonuses Bonuses
}

type Artifact struct {
  UUID string
  CreatedAt time.Time
  CreatedBy string // UUID of user
  CampaignUUIDs string[]

  Name string
  Description string
  Bonuses Bonuses
}

type Bonuses struct {
  Stats Stats
  Skills Skills
  Knowledge Knowledge
  Resistances Resistances
  Statuses Statuses

  HP int
  FP int
  AP int

  MaxHP int
  MaxFP int
  MaxAP int

  AttunementSlots int
}