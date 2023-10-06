
Database Stuff

// Table --- users ---
type User struct {
  UUID string
  CreatedAt time.Time
  Email string
  FirstName string ***
  LastName string ***
  PasswordHash string //
  Campaigns []string // slice of campaign uuids
  CampaignOwnerships []string // slice of campaign uuids
  Characters []string
}

type Campaign struct {
  UUID string
  OwnedBy []string
  Users []string
  Items []string
  Armors []string
  Weapons []string
  Accessories []string
  Spells []string
  Skills []string
}

type FeatsOfDestiny struct {
  UUID string
  Name string
  Cost int
  Description string
}

type WeaponFeats struct {
  UUID string
  Name string
  Description string
}

type Spell struct {
  UUID string
  CreatedBy string
  CreatedAt string
  Name string
  Description string
  Cost int
  APCost int
  FPCost int
  Range string
  Duration string
  ChargedRelationUUID string

  ChargedSpell Spell
}

type Skills struct {
  UUID string
  CreatedBy string
  CreatedAt string
  APCost int
  FPCost int

  Name string
  Description string
}

// Table --- items ---
type Item struct {
  UUID string
  CreatedAt time.Time
  CreatedBy string // UUID of user
  Name string
  Description string

  ItemType ItemType
}

type ItemType string

const (
  ITEM_TYPE_TOOL ItemType = "Tool"
  ITEM_TYPE_MISC ItemType = "Misc"
)

type ItemEntry struct {
  UUID string
  UpdatedAt time.Time // To be used for sort by date added/updated
  Quantity int
}

// Table --- characters ---
type Character struct {
  UUID string
  UserUUID string
  Name string
  Gender string
  Race string
  Class string
  Undying int
  Souls int
  Level int
  AttunementSlots int
  AttunedSkillsSpells []string
  FateSlots int
  FatesChosen []string
  CharacterStats CharacterStats
  AvatarURL string
}

// Table --- character_stats ---
type CharacterStats struct {
  Resistances Resistances
  Stats Stats
  Skills Skills
  WeaponProficiencies WeaponProficiencies
}

type Resistances struct {
  Curse int
  Frost int
  Bleed int
  Poison int
  Toxic int
  Poise int

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

type WeaponProficiencies struct {
  Spear	
  Shield	
  Gun Sidearm	
  Dagger	
  Whip	
  Hammer/Grt Hammer	
  Straight/Thrust Swrd	
  Katana/Curved Swrd	
  Great/Ultr Grt Swords	
  Reaper	
  Axe/Great Axe	
  Fist	
  Bow/Great Bow	
  Halberd	
  Twinblade	
  Sorcery	
  Miracles	
}

// Table --- inventories ---
type Inventory struct {
  CharacterUUID string
  Items []ItemEntry // slice of item uuids
}

// Table --- equipment ---
type Equipment struct {
  CharacterUUID string
  Mainhand Weapon
  Offhand Weapon
  Armor Armor
  Artifact Accessory
  Ring1 Accessory
  Ring2 Accessory
  Ring3 Accessory
  Ring4 Accessory
}

// Table --- weapons ---
type Weapon struct {
  UUID string
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
  Name string
  Description string
  ArmorType ArmorType
  StatBonuses
}

type ArmorType string

const (
  ARMOR_TYPE_NONE ArmorType = "None"
  ARMOR_TYPE_LIGHT ArmorType = "Light"
  ARMOR_TYPE_MEDIUM = "Medium"
  ARMOR_TYPE_HEAVY = "Heavy"
)

type Accessory struct {
  UUID string
  Name string
  AccType AccessoryType
  Description string
  StatBonuses
}

type AccessoryType

const (
  ACCESSORY_TYPE_RING ArmorType = "Ring"
  ACCESSORY_TYPE_ADORMNENT ArmorType = "Adornment"
  ACCESSORY_TYPE_ARTIFACT = "Artifact"
)