import { defineStore } from 'pinia'
import { Item, Spell, WeaponFeats, DestinyFeat } from '@/mixins/types'

type RootState = {
  Items: Item[];
  Spells: Spell[];
  WeaponFeats: WeaponFeats;
  DestinyFeats: DestinyFeat[];
}

export const useCompendiumStore = defineStore({
  id: 'compendiumStore',
  state: () => ({
    Items: items,
    Spells: spells,
    WeaponFeats: weaponFeats,
    DestinyFeats: destinyFeats,
  } as RootState),

  actions: {
    createItem(item: Item) {
      this.Items.push(item)
    },
  }
})

const spells = [
  {
    UUID: 'soularrow',
    Name: 'Soul arrow',
    Description: 'It is soul arrow',
    Cost: 1,
    APCost: 2,
    FPCost: 1,
    Range: '15 ft',
    Duration: '3 rounds',
    ChargedRelationUUID: '',
    ChargedSpell: null,
  },
  {
    UUID: 'soularrow2',
    Name: 'Supervoracil magic butterflyship',
    Description: 'It is soul arrow',
    Cost: 1,
    APCost: 2,
    FPCost: 1,
    Range: '15 ft',
    Duration: '3 rounds',
    ChargedRelationUUID: '',
    ChargedSpell: null,
  },
  {
    UUID: 'soularrow3',
    Name: 'Soul arrow 3',
    Description: 'It is soul arrow',
    Cost: 1,
    APCost: 2,
    FPCost: 1,
    Range: '15 ft',
    Duration: '3 rounds',
    ChargedRelationUUID: '',
    ChargedSpell: null,
  }
]

const weaponFeats = {
  Spear: [
    {
      UUID: 'a',
      Level: 3,
      WeaponType: 'Spear',
      Name: 'Athletic Thrusts',
      Description: 'Athletics +1 and Acrobatics +1. Increase the range of all spear attacks by one grid space (5 feet).',
    },
    {
      UUID: 'b',
      Level: 5,
      WeaponType: 'Spear',
      Name: 'Stand Back',
      Description: `You can spend 2FP on your turn to further increase the range of all spear attacks by one grid
        space (5 feet), until the start of your next turn (including any slow actions which resolve at the start of that next turn).
        Upon activating this spear range increase on your turn, you may move one grid space in a direction of your choice for
        no AP cost. Permanently increase the range of all halberd, reaper and whip attacks by one space (5 feet).`,
    },
    {
      UUID: 'c',
      Level: 5,
      WeaponType: 'Spear',
      Name: 'Improved Charge',
      Description: `Learn the weapon skill Charge if you have not already learned it. The Charge weapon
        skill now also hits all enemies you charge through up to the final location, and has its distance increased by one space.
        You may also stop your charge on any space after your starting location.`,
    }
  ]
}

const destinyFeats = [
  {
    UUID: 'a',
    Cost: 1,
    Name: 'Athelete',
    Description: 'Athletics +1, run really fast and stuff, etc.',
  },
  { 
    UUID: 'Accurate',
    Cost: 1,
    Name: 'Accurate',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Advanced Legwork',
    Cost: 1,
    Name: 'Advanced Legwork',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Armorer',
    Cost: 1,
    Name: 'Armorer',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Artisan of Physic',
    Cost: 1,
    Name: 'Artisan of Physic',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Athlete',
    Cost: 1,
    Name: 'Athlete',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Bloodthirsty',
    Cost: 1,
    Name: 'Bloodthirsty',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Companion',
    Cost: 1,
    Name: 'Companion',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Cook',
    Cost: 1,
    Name: 'Cook',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Craftsperson',
    Cost: 1,
    Name: 'Craftsperson',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Critical Rolls',
    Cost: 1,
    Name: 'Critical Rolls',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Cultvate Mass',
    Cost: 1,
    Name: 'Cultvate Mass',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Delay Death',
    Cost: 1,
    Name: 'Delay Death',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Deliberate Items',
    Cost: 1,
    Name: 'Deliberate Items',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Desperation Dive',
    Cost: 1,
    Name: 'Desperation Dive',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Durable',
    Cost: 1,
    Name: 'Durable',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Elemental',
    Cost: 1,
    Name: 'Elemental',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Fast Roll',
    Cost: 1,
    Name: 'Fast Roll',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Fire Clairvoyant',
    Cost: 1,
    Name: 'Fire Clairvoyant',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Focus Armor',
    Cost: 1,
    Name: 'Focus Armor',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Free of Burden',
    Cost: 1,
    Name: 'Free of Burden',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Haggler',
    Cost: 1,
    Name: 'Haggler',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Hidden Bobby',
    Cost: 1,
    Name: 'Hidden Bobby',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Human Skill',
    Cost: 1,
    Name: 'Human Skill',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Innate Spell',
    Cost: 1,
    Name: 'Innate Spell',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Library of Knowledge (Skills)',
    Cost: 1,
    Name: 'Library of Knowledge (Skills)',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Library of Knowledge (Spells)',
    Cost: 1,
    Name: 'Library of Knowledge (Spells)',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Limitless',
    Cost: 1,
    Name: 'Limitless',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Linguist',
    Cost: 1,
    Name: 'Linguist',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Lord of Undeath',
    Cost: 1,
    Name: 'Lord of Undeath',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Lucky',
    Cost: 1,
    Name: 'Lucky',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Mage Slayer',
    Cost: 1,
    Name: 'Mage Slayer',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Mobile',
    Cost: 1,
    Name: 'Mobile',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Multi Proficient',
    Cost: 1,
    Name: 'Multi Proficient',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Observant',
    Cost: 1,
    Name: 'Observant',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Power Funnel',
    Cost: 1,
    Name: 'Power Funnel',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Prosthetic Limb',
    Cost: 1,
    Name: 'Prosthetic Limb',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Protege 1',
    Cost: 1,
    Name: 'Protege 1',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Protege 2',
    Cost: 1,
    Name: 'Protege 2',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Protege 3',
    Cost: 1,
    Name: 'Protege 3',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Purity',
    Cost: 1,
    Name: 'Purity',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Quick Hands',
    Cost: 1,
    Name: 'Quick Hands',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Reassignment',
    Cost: 1,
    Name: 'Reassignment',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Ritual Caster',
    Cost: 1,
    Name: 'Ritual Caster',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Skill Monkey',
    Cost: 1,
    Name: 'Skill Monkey',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Skilled Undead',
    Cost: 1,
    Name: 'Skilled Undead',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Spellsword',
    Cost: 1,
    Name: 'Spellsword',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Stance Change',
    Cost: 1,
    Name: 'Stance Change',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Story Teller',
    Cost: 1,
    Name: 'Story Teller',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Tactical Mind',
    Cost: 1,
    Name: 'Tactical Mind',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Toxicology',
    Cost: 1,
    Name: 'Toxicology',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'True to Form',
    Cost: 1,
    Name: 'True to Form',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Voice of Inspiration',
    Cost: 1,
    Name: 'Voice of Inspiration',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Wanderer',
    Cost: 1,
    Name: 'Wanderer',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Weapon Master',
    Cost: 1,
    Name: 'Weapon Master',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Weapon Sculptor',
    Cost: 1,
    Name: 'Weapon Sculptor',
    Description: 'This is the feat description'
  },
  { 
    UUID: 'Worthless Husk',
    Cost: 1,
    Name: 'Worthless Husk',
    Description: 'This is the feat description'
  },
]

const items = [
  { Name: "Greenblossom bulb", Category: 'misc', Description: "Consume to increase your next turns AP by 2.", Quantity: 0, UUID: 'Greenblossom bulb' },
  { Name: "Blooming greenblossom bulb", Category: 'misc', Description: "Consume to increase your next turns AP by 3.", Quantity: 0, UUID: 'Blooming greenblossom bulb' },
  { Name: "Purple moss bulb", Category: 'misc', Description: "Consume to reduce poison build up by 5, or lower the duration of active poisoning by 5 turns.", Quantity: 0, UUID: 'Purple moss bulb' },
  { Name: "Blooming purple moss bulb", Category: 'misc', Description: "Consume to reduce toxic or poison build up by 5, or lower the duration of active toxic or poisoning by 5 turns.", Quantity: 0, UUID: 'Blooming purple moss bulb' },
  { Name: "Bloodred moss bulb", Category: 'misc', Description: "Consume to reduce bleed build up by 5.", Quantity: 0, UUID: 'Bloodred moss bulb' },
  { Name: "Rime blue moss bulb", Category: 'misc', Description: "Consume to reduce frost build up by 5, or cure AP lowering effect of frost (frostbite).", Quantity: 0, UUID: 'Rime blue moss bulb' },
  { Name: "Mossfruit", Category: 'misc', Description: "Consume to increase all non poise status resistances by 2 for ten rounds (one minute).", Quantity: 0, UUID: 'Mossfruit' },
  { Name: "Ripe Mossfruit", Category: 'misc', Description: "Consume to increase all non poise status resistances by 4 for ten rounds (one minute).", Quantity: 0, UUID: 'Ripe Mossfruit' },
  { Name: "Prism stone", Category: 'misc', Description: "A smooth stone which can be thrown or placed to determine the lethality of an area. If the stone takes damage exceeding its last wielders HP, or if it experiences an effect which would have killed its last wielder it screams loudly. For example if a player encounters a dark pit and they are unsure if it is deep enough to kill them if they fall in, or if there is a toxic smog it its depths, they can toss a prism stone into the pit and listen for its screams.", Quantity: 0, UUID: 'Prism stone' },
  { Name: "Light bugs", Category: 'misc', Description: "A small container of bugs which glow brightly during the daytime regardless of it they are exposed to daylight. Can be fitted with a small window and attached to the waist to provide light in dark areas during the day, without needing to be held in hand. Lights up an area of 10 feet of bright light and 10 feet of dim light around the container.", Quantity: 0, UUID: 'Light bugs' },
  { Name: "Purging stone", Category: 'misc', Description: "An extremely rare one time use item. Hold against bare skin to reduce a persons undying stacks to zero, and if they are fully undead, restore their sanity while you do so (bringing them back to \"life\").", Quantity: 0, UUID: 'Purging stone' },
  { Name: "Blessed mushroom", Category: 'misc', Description: "Consume to heal 1d4 HP.", Quantity: 0, UUID: 'Blessed mushroom' },
  { Name: "Hangfruit meat / Glowroot meat", Category: 'misc', Description: "Consume to heal 1d4 HP on the start of your turns for the next four turns. Spoils after three days.", Quantity: 0, UUID: 'Hangfruit meat/Glowroot meat' },
  { Name: "Dried Hangfruit meat / Glowroot meat", Category: 'misc', Description: "Consume to heal 1d2 HP on the start of your turns for the next four turns. Does not spoil.", Quantity: 0, UUID: 'Dried Hangfruit meat/Glowroot meat' },
  { Name: "Crimson water / Moss skins", Category: 'misc', Description: "Consume to restore 1d4 FP.", Quantity: 0, UUID: 'Crimson water/Moss skins' },
  { Name: "Dried Greatfeather", Category: 'misc', Description: "Crush and press against your forehead to restore 1d4 FP.", Quantity: 0, UUID: 'Dried Greatfeather' },
  { Name: "Blood vial", Category: 'misc', Description: "Consume to restore 1d6 HP and 1d4 FP.", Quantity: 0, UUID: 'Blood vial' },
  { Name: "Bellowing snowbloom", Category: 'misc', Description: "Consume to restore 1d6 HP, but take 1d4 frost build up.", Quantity: 0, UUID: 'Bellowing snowbloom' },
  { Name: "Divine blessing", Category: 'misc', Description: "Consume to fully heal, and fully restore FP.", Quantity: 0, UUID: 'Divine blessing' },
  { Name: "Binoculars", Category: 'misc', Description: "Increase your sight range by up to 100 feet away depending on conditions. Can be used repeatedly.", Quantity: 0, UUID: 'Binoculars' },
  { Name: "Firebomb", Category: 'misc', Description: "Throw up to 20 feet to explode on a target and deal 1d6 + D Str fire damage.", Quantity: 0, UUID: 'Firebomb' },
  { Name: "Black Firebomb", Category: 'misc', Description: "Throw up to 20 feet to explode on a target and deal 1d8 + D Str fire damage.", Quantity: 0, UUID: 'Black Firebomb' },
  { Name: "Lightning Pot", Category: 'misc', Description: "Throw up to 20 feet to shatter on a target and deal 1d6 + D Str lightning damage.", Quantity: 0, UUID: 'Lightning Pot' },
  { Name: "Mage's Pot", Category: 'misc', Description: "Shatter in hand to spawn a homing projectile which flies toward a target within 20 feet. Any creature hit takes 1d6 + D Str magic damage.", Quantity: 0, UUID: 'Mage\'s Pot' },
  { Name: "Sleep Pot", Category: 'misc', Description: "Throw up to 15 feet to shatter sleeping dust across a target. Any creature hit by this dust must make a DC 8 sanity or diplomacy check or fall unconscious for one round and be knocked prone. While unconscious, taking any damage wakes them. Any creature hit by the dust cannot be effected by another sleep pot for the next 12 hours, regardless of it they failed the check or not.", Quantity: 0, UUID: 'Sleep Pot' },
  { Name: "Throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d4 + E Dex physical damage.", Quantity: 0, UUID: 'Throwing knives' },
  { Name: "Acidic throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage, and 1d2 durability damage. If targeting a specific piece of equipment or small object, then a precision roll should be required.", Quantity: 0, UUID: 'Acidic throwing knives' },
  { Name: "Lacerating throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 bleed build up.", Quantity: 0, UUID: 'Lacerating throwing knives' },
  { Name: "Frosted throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 frost build up.", Quantity: 0, UUID: 'Frosted throwing knives' },
  { Name: "Poison throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 poison build up.", Quantity: 0, UUID: 'Poison throwing knives' },
  { Name: "Elemental arrows", Category: 'misc', Description: "Elemental arrows to be fired from a shortbow or bow. Changes the normal damage of firing an arrow to be entirely of the element of this arrow. ", Quantity: 0, UUID: 'Elemental arrows' },
  { Name: "Status arrows", Category: 'misc', Description: "Arrows to be fired from a shortbow or bow, coated with a status building effect. Adds 1d2 status build up to the normal damage of firing the arrow, based on the specific status effect of this arrow. ", Quantity: 0, UUID: 'Status arrows' },
  { Name: "Prism stone arrow", Category: 'misc', Description: "An arrow to be fired from a short bow or long bow, with a prism stone fashioned in place of the arrowhead. This arrow deals no damage, but allows one to fire a prism stone in search of danger, up to their maximum bow range. ", Quantity: 0, UUID: 'Prism stone arrow' },
  { Name: "Elemental bolts", Category: 'misc', Description: "Elemental bolts to be fired from a crossbow. Changes the normal damage of firing a bolt to be entirely of the element of this bolt. ", Quantity: 0, UUID: 'Elemental bolts' },
  { Name: "Status bolts", Category: 'misc', Description: "Bolts to be fired from a crossbow, coated with a status building effect. Adds 1d2 status build up to the normal damage of firing the bolt, based on the specific status effect of this bolt. ", Quantity: 0, UUID: 'Status bolts' },
  { Name: "Elemental great arrows", Category: 'misc', Description: "Elemental great arrows to be fired from a greatbow. Changes the normal damage of firing a great arrow to be entirely of the element of this great arrow. ", Quantity: 0, UUID: 'Elemental great arrows' },
  { Name: "Status great arrows", Category: 'misc', Description: "Great arrows to be fired from a great bow, coated with a large status building effect. Adds 1d4 status build up to the normal damage of firing the great arrow, based on the specific status effect of this great arrow. ", Quantity: 0, UUID: 'Status great arrows' },
  { Name: "Rouge paste", Category: 'misc', Description: "Rub across any weapon to add a coarse red coating. The wielder of that weapon may add 2d2 bleed status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Rouge paste' },
  { Name: "Rot paste", Category: 'misc', Description: "Rub across any weapon to add a coating of poison. The wielder of that weapon may add 2d2 poison status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Rot paste' },
  { Name: "Cobalt paste", Category: 'misc', Description: "Rub across any weapon to add a layer of frost. The wielder of that weapon may add 2d2 frost status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Cobalt paste' },
  { Name: "Pale resin", Category: 'misc', Description: "Rub across any weapon to add a coating of pale magic. The wielder of that weapon may add 3d6 magic damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Pale resin' },
  { Name: "Gold resin", Category: 'misc', Description: "Rub across any weapon to add crackling lightning. The wielder of that weapon may add 3d6 lightning damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Gold resin' },
  { Name: "Charcoal resin", Category: 'misc', Description: "Rub across any weapon to set it ablaze with flickering fire. The wielder of that weapon may add 3d6 fire damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Charcoal resin' },
  { Name: "Human resin", Category: 'misc', Description: "Rub across any weapon to add a layer of heavy darkness. The wielder of that weapon may add 3d6 dark damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0, UUID: 'Human resin' },
  { Name: "Blue bug pellet", Category: 'misc', Description: "Consume to increase magic resistance by one tier for ten rounds (one minute). Does not stack with itself.", Quantity: 0, UUID: 'Blue bug pellet' },
  { Name: "Yellow bug pellet", Category: 'misc', Description: "Consume to increase lightning resistance by one tier for ten rounds (one minute). Does not stack with itself.", Quantity: 0, UUID: 'Yellow bug pellet' },
  { Name: "Red bug pellet", Category: 'misc', Description: "Consume to increase fire resistance by one tier for ten rounds (one minute). Does not stack with itself.", Quantity: 0, UUID: 'Red bug pellet' },
  { Name: "Spellbook", Category: 'misc', Description: "Read thoroughly to understand and memorize the spell within, adding it to your spells list. Comprehension depends on a Int or Faith check based on the type of spell described within. Fully learning the spell from the spellbook takes a number of hours equal to each of the spells stat requirements minus ten.", Quantity: 0, UUID: 'Spellbook' },
  { Name: "Weapon Skill Guidebook", Category: 'misc', Description: "Read thoroughly to understand and memorize the weapon skill described within, adding it to your list of learned skills. Your ability to interpret the movements described in the guidebook depends on a Str, Dex, Int, or Fai check based on the type of skill described within. As well, learning the skill takes a number of hours of practice with the guidebook and a usable weapon, equal to two times the skills FP cost.", Quantity: 0, UUID: 'Weapon Skill Guidebook' },
  { Name: "Low quality strong drink", Category: 'misc', Description: "Consume one charge to roll a 1d2 on your next skill check made within the next hour. If the result is a one you have disadvantage on the check, if the result is a two you have advantage. Has three charges before it is fully consumed, and consuming multiple charges causes its duration to stack.", Quantity: 0, UUID: 'Low quality strong drink' },
  { Name: "High quality strong drink", Category: 'misc', Description: "Consume one charge to gain advantage on your next skill check within the next hour, and gain one tier of physical damage reduction and magic resistance for the next ten seconds (or two rounds if in combat). Has three charges before it is fully consumed, and consuming multiple charges causes its duration to stack.", Quantity: 0, UUID: 'High quality strong drink' },
  { Name: "Orange Soapstone", Category: 'misc', Description: "A small piece of dark orange crystal that can be used to draw a glowing orange summoners sign upon any surface. The sign stores a spoken message no longer than 25 words which must be spoken while it is written. When the sign is first interacted with after being drawn it summons a predetermined spirit (based on the specific soapstone item) which delivers your message, similar to the Summoners Signs feat of the spirit summoning weapon tree. Unlike the feat you cannot see through the sign, are not alerted when it is activated, and it disappears after one activation.", Quantity: 0, UUID: 'Orange Soapstone' },
  { Name: "Pure infusion stones", Category: 'misc', Description: "Apply to a melee weapon during any bonfire/magical short rest to infuse them with the element of the stone (fire, magic, lightning, or dark). See the end of the “Equipment, Defense, and Shields” section in the “Combat” chapter for more info on weapon infusions. Using an infusion stone to infuse a weapon consumes the stone.", Quantity: 0, UUID: 'Pure infusion stones' },
  { Name: "Stone of gentle warmth", Category: 'misc', Description: "A stone which radiates a healing aura of gentle warmth after activation. Place on the ground or throw up to 20 feet. Any creature which starts its turn within 5 feet of the stone heals for 1d6 HP. The healing aura of the stone lasts for three rounds. The healing of these stones does not stack.", Quantity: 0, UUID: 'Stone of gentle warmth' },
  { Name: "Duel charm", Category: 'misc', Description: "Throw up to 20 feet at a target to disable all magical or special buffs and effects which are currently active on the target.", Quantity: 0, UUID: 'Duel charm' },
  { Name: "Sand trap", Category: 'misc', Description: "Soft crystal dust which hardens when stepped on preventing movement for one turn if a DC 12 Athletics check is failed. Can be placed within 5 feet. Does not expire, but can be easily blown or sweeped away before activation.", Quantity: 0, UUID: 'Sand trap' },
  { Name: "Drain capsule", Category: 'misc', Description: "Thrown up to 20 feet at a target to deal 1d4 + D Str FP damage to them. Also drains moisture from a 10x10 foot area where thrown.", Quantity: 0, UUID: 'Drain capsule' },
  { Name: "Numbing mist", Category: 'misc', Description: "Thrown up to 10 feet at a target to prevent any healing or HP replenishment on that target for one round (6 seconds).", Quantity: 0, UUID: 'Numbing mist' },
  { Name: "Repair powder", Category: 'misc', Description: "Rub on a piece of equipment or weapon to repair 1d6 points of durability loss.", Quantity: 0, UUID: 'Repair powder' },
  { Name: "Torch", Category: 'misc', Description: "A basic torch of cloth and oil. Lasts for 20 minutes and lights up an area of 20 feet of bright light and 20 feet of dim light around it. Must be held in an available hand in order to effectively bring its light along with you, but can be dropped to the ground to provide some static light.", Quantity: 0, UUID: 'Torch' },
  { Name: "Other adventuring supplies", Category: 'misc', Description: "30 feet of rope, a bedroll, lockpicks, a shovel, a pick, empty flasks, parchment, crafting tools. Other basic tools and supplies which vary in cost and availability depending on where you find yourself.", Quantity: 0, UUID: 'Other adventuring supplies' },
]