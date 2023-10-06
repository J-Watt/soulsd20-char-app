import { defineStore } from 'pinia'

export interface Item {
  Name: string;
  Category: string;
  description?: string;
  Quantity: number;
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

type RootState = {
  Name: string,
  Race: string,
  Class: string,
  Items: Item[],
  Inventory: Item[],
  Stats: Stats,
  Skills: Skills,
  Knowledge: Knowledge,
}

export const usePlayerStore = defineStore({
  id: 'playerStore',
  state: () => ({
    Name: 'Yah',
    Race: 'Human',
    Class: 'Knight',
    Items: [...items.sort((a,b) => {
      if (a.Name < b.Name) return -1
      if (b.Name < a.Name) return 1
      return 0
    })],
    Inventory: [],
    Stats: {
      Vitality: 10,
      Endurance: 10,
      Strength: 10,
      Dexterity: 10,
      Attunement: 10,
      Intelligence: 10,
      Faith: 10
    },
    Skills: {
      Athletics: 0,
      Acrobatics: 0,
      Perception: 0,
      FireKeeping: 0,
      Sanity: 0,
      Stealth: 0,
      Precision: 0,
      Diplomacy: 0
    },
    Knowledge: {
      Magics: 0,
      WorldHistory: 0,
      Monsters: 0,
      Cosmic: 0
    },
  } as RootState),

  actions: {
    createItem(item: Item) {
      this.Items.push(item)
    },

    addInventoryItem(itemName: string) {
      const item = this.Items.find(i => i.Name === itemName)
      if (!item) return
      this.Inventory.push(JSON.parse(JSON.stringify(item)))
    },

    increaseItemQuantity(itemName: string) {
      const item = this.Inventory.find(i => i.Name === itemName)
      if (!item) return
      item.Quantity++
    },

    decreaseItemQuantity(itemName: string) {
      const item = this.Inventory.find(i => i.Name === itemName)
      if (!item) return
      item.Quantity--
      if (item.Quantity < 0) item.Quantity = 0
    }
  }
})

const items = [
  { Name: "Greenblossom bulb", Category: 'misc', Description: "Consume to increase your next turns AP by 2.", Quantity: 0 },
  { Name: "Blooming greenblossom bulb", Category: 'misc', Description: "Consume to increase your next turns AP by 3.", Quantity: 0 },
  { Name: "Purple moss bulb", Category: 'misc', Description: "Consume to reduce poison build up by 5, or lower the duration of active poisoning by 5 turns.", Quantity: 0 },
  { Name: "Blooming purple moss bulb", Category: 'misc', Description: "Consume to reduce toxic or poison build up by 5, or lower the duration of active toxic or poisoning by 5 turns.", Quantity: 0 },
  { Name: "Bloodred moss bulb", Category: 'misc', Description: "Consume to reduce bleed build up by 5.", Quantity: 0 },
  { Name: "Rime blue moss bulb", Category: 'misc', Description: "Consume to reduce frost build up by 5, or cure AP lowering effect of frost (frostbite).", Quantity: 0 },
  { Name: "Mossfruit", Category: 'misc', Description: "Consume to increase all non poise status resistances by 2 for ten rounds (one minute).", Quantity: 0 },
  { Name: "Ripe Mossfruit", Category: 'misc', Description: "Consume to increase all non poise status resistances by 4 for ten rounds (one minute).", Quantity: 0 },
  { Name: "Prism stone", Category: 'misc', Description: "A smooth stone which can be thrown or placed to determine the lethality of an area. If the stone takes damage exceeding its last wielders HP, or if it experiences an effect which would have killed its last wielder it screams loudly. For example if a player encounters a dark pit and they are unsure if it is deep enough to kill them if they fall in, or if there is a toxic smog it its depths, they can toss a prism stone into the pit and listen for its screams.", Quantity: 0 },
  { Name: "Light bugs", Category: 'misc', Description: "A small container of bugs which glow brightly during the daytime regardless of it they are exposed to daylight. Can be fitted with a small window and attached to the waist to provide light in dark areas during the day, without needing to be held in hand. Lights up an area of 10 feet of bright light and 10 feet of dim light around the container.", Quantity: 0 },
  { Name: "Purging stone", Category: 'misc', Description: "An extremely rare one time use item. Hold against bare skin to reduce a persons undying stacks to zero, and if they are fully undead, restore their sanity while you do so (bringing them back to \"life\").", Quantity: 0 },
  { Name: "Blessed mushroom", Category: 'misc', Description: "Consume to heal 1d4 HP.", Quantity: 0 },
  { Name: "Hangfruit meat/Glowroot meat", Category: 'misc', Description: "Consume to heal 1d4 HP on the start of your turns for the next four turns. Spoils after three days.", Quantity: 0 },
  { Name: "Dried Hangfruit meat/Glowroot meat", Category: 'misc', Description: "Consume to heal 1d2 HP on the start of your turns for the next four turns. Does not spoil.", Quantity: 0 },
  { Name: "Crimson water/Moss skins", Category: 'misc', Description: "Consume to restore 1d4 FP.", Quantity: 0 },
  { Name: "Dried Greatfeather", Category: 'misc', Description: "Crush and press against your forehead to restore 1d4 FP.", Quantity: 0 },
  { Name: "Blood vial", Category: 'misc', Description: "Consume to restore 1d6 HP and 1d4 FP.", Quantity: 0 },
  { Name: "Bellowing snowbloom", Category: 'misc', Description: "Consume to restore 1d6 HP, but take 1d4 frost build up.", Quantity: 0 },
  { Name: "Divine blessing", Category: 'misc', Description: "Consume to fully heal, and fully restore FP.", Quantity: 0 },
  { Name: "Binoculars", Category: 'misc', Description: "Increase your sight range by up to 100 feet away depending on conditions. Can be used repeatedly.", Quantity: 0 },
  { Name: "Firebomb", Category: 'misc', Description: "Throw up to 20 feet to explode on a target and deal 1d6 + D Str fire damage.", Quantity: 0 },
  { Name: "Black Firebomb", Category: 'misc', Description: "Throw up to 20 feet to explode on a target and deal 1d8 + D Str fire damage.", Quantity: 0 },
  { Name: "Lightning Pot", Category: 'misc', Description: "Throw up to 20 feet to shatter on a target and deal 1d6 + D Str lightning damage.", Quantity: 0 },
  { Name: "Mage's Pot", Category: 'misc', Description: "Shatter in hand to spawn a homing projectile which flies toward a target within 20 feet. Any creature hit takes 1d6 + D Str magic damage.", Quantity: 0 },
  { Name: "Sleep Pot", Category: 'misc', Description: "Throw up to 15 feet to shatter sleeping dust across a target. Any creature hit by this dust must make a DC 8 sanity or diplomacy check or fall unconscious for one round and be knocked prone. While unconscious, taking any damage wakes them. Any creature hit by the dust cannot be effected by another sleep pot for the next 12 hours, regardless of it they failed the check or not.", Quantity: 0 },
  { Name: "Throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d4 + E Dex physical damage.", Quantity: 0 },
  { Name: "Acidic throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage, and 1d2 durability damage. If targeting a specific piece of equipment or small object, then a precision roll should be required.", Quantity: 0 },
  { Name: "Lacerating throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 bleed build up.", Quantity: 0 },
  { Name: "Frosted throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 frost build up.", Quantity: 0 },
  { Name: "Poison throwing knives", Category: 'misc', Description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 poison build up.", Quantity: 0 },
  { Name: "Elemental arrows", Category: 'misc', Description: "Elemental arrows to be fired from a shortbow or bow. Changes the normal damage of firing an arrow to be entirely of the element of this arrow. ", Quantity: 0 },
  { Name: "Status arrows", Category: 'misc', Description: "Arrows to be fired from a shortbow or bow, coated with a status building effect. Adds 1d2 status build up to the normal damage of firing the arrow, based on the specific status effect of this arrow. ", Quantity: 0 },
  { Name: "Prism stone arrow", Category: 'misc', Description: "An arrow to be fired from a short bow or long bow, with a prism stone fashioned in place of the arrowhead. This arrow deals no damage, but allows one to fire a prism stone in search of danger, up to their maximum bow range. ", Quantity: 0 },
  { Name: "Elemental bolts", Category: 'misc', Description: "Elemental bolts to be fired from a crossbow. Changes the normal damage of firing a bolt to be entirely of the element of this bolt. ", Quantity: 0 },
  { Name: "Status bolts", Category: 'misc', Description: "Bolts to be fired from a crossbow, coated with a status building effect. Adds 1d2 status build up to the normal damage of firing the bolt, based on the specific status effect of this bolt. ", Quantity: 0 },
  { Name: "Elemental great arrows", Category: 'misc', Description: "Elemental great arrows to be fired from a greatbow. Changes the normal damage of firing a great arrow to be entirely of the element of this great arrow. ", Quantity: 0 },
  { Name: "Status great arrows", Category: 'misc', Description: "Great arrows to be fired from a great bow, coated with a large status building effect. Adds 1d4 status build up to the normal damage of firing the great arrow, based on the specific status effect of this great arrow. ", Quantity: 0 },
  { Name: "Rouge paste", Category: 'misc', Description: "Rub across any weapon to add a coarse red coating. The wielder of that weapon may add 2d2 bleed status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Rot paste", Category: 'misc', Description: "Rub across any weapon to add a coating of poison. The wielder of that weapon may add 2d2 poison status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Cobalt paste", Category: 'misc', Description: "Rub across any weapon to add a layer of frost. The wielder of that weapon may add 2d2 frost status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Pale resin", Category: 'misc', Description: "Rub across any weapon to add a coating of pale magic. The wielder of that weapon may add 3d6 magic damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Gold resin", Category: 'misc', Description: "Rub across any weapon to add crackling lightning. The wielder of that weapon may add 3d6 lightning damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Charcoal resin", Category: 'misc', Description: "Rub across any weapon to set it ablaze with flickering fire. The wielder of that weapon may add 3d6 fire damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Human resin", Category: 'misc', Description: "Rub across any weapon to add a layer of heavy darkness. The wielder of that weapon may add 3d6 dark damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", Quantity: 0 },
  { Name: "Blue bug pellet", Category: 'misc', Description: "Consume to increase magic resistance by one tier for ten rounds (one minute). Does not stack with itself.", Quantity: 0 },
  { Name: "Yellow bug pellet", Category: 'misc', Description: "Consume to increase lightning resistance by one tier for ten rounds (one minute). Does not stack with itself.", Quantity: 0 },
  { Name: "Red bug pellet", Category: 'misc', Description: "Consume to increase fire resistance by one tier for ten rounds (one minute). Does not stack with itself.", Quantity: 0 },
  { Name: "Spellbook", Category: 'misc', Description: "Read thoroughly to understand and memorize the spell within, adding it to your spells list. Comprehension depends on a Int or Faith check based on the type of spell described within. Fully learning the spell from the spellbook takes a number of hours equal to each of the spells stat requirements minus ten.", Quantity: 0 },
  { Name: "Weapon Skill Guidebook", Category: 'misc', Description: "Read thoroughly to understand and memorize the weapon skill described within, adding it to your list of learned skills. Your ability to interpret the movements described in the guidebook depends on a Str, Dex, Int, or Fai check based on the type of skill described within. As well, learning the skill takes a number of hours of practice with the guidebook and a usable weapon, equal to two times the skills FP cost.", Quantity: 0 },
  { Name: "Low quality strong drink", Category: 'misc', Description: "Consume one charge to roll a 1d2 on your next skill check made within the next hour. If the result is a one you have disadvantage on the check, if the result is a two you have advantage. Has three charges before it is fully consumed, and consuming multiple charges causes its duration to stack.", Quantity: 0 },
  { Name: "High quality strong drink", Category: 'misc', Description: "Consume one charge to gain advantage on your next skill check within the next hour, and gain one tier of physical damage reduction and magic resistance for the next ten seconds (or two rounds if in combat). Has three charges before it is fully consumed, and consuming multiple charges causes its duration to stack.", Quantity: 0 },
  { Name: "Orange Soapstone", Category: 'misc', Description: "A small piece of dark orange crystal that can be used to draw a glowing orange summoners sign upon any surface. The sign stores a spoken message no longer than 25 words which must be spoken while it is written. When the sign is first interacted with after being drawn it summons a predetermined spirit (based on the specific soapstone item) which delivers your message, similar to the Summoners Signs feat of the spirit summoning weapon tree. Unlike the feat you cannot see through the sign, are not alerted when it is activated, and it disappears after one activation.", Quantity: 0 },
  { Name: "Pure infusion stones", Category: 'misc', Description: "Apply to a melee weapon during any bonfire/magical short rest to infuse them with the element of the stone (fire, magic, lightning, or dark). See the end of the “Equipment, Defense, and Shields” section in the “Combat” chapter for more info on weapon infusions. Using an infusion stone to infuse a weapon consumes the stone.", Quantity: 0 },
  { Name: "Stone of gentle warmth", Category: 'misc', Description: "A stone which radiates a healing aura of gentle warmth after activation. Place on the ground or throw up to 20 feet. Any creature which starts its turn within 5 feet of the stone heals for 1d6 HP. The healing aura of the stone lasts for three rounds. The healing of these stones does not stack.", Quantity: 0 },
  { Name: "Duel charm", Category: 'misc', Description: "Throw up to 20 feet at a target to disable all magical or special buffs and effects which are currently active on the target.", Quantity: 0 },
  { Name: "Sand trap", Category: 'misc', Description: "Soft crystal dust which hardens when stepped on preventing movement for one turn if a DC 12 Athletics check is failed. Can be placed within 5 feet. Does not expire, but can be easily blown or sweeped away before activation.", Quantity: 0 },
  { Name: "Drain capsule", Category: 'misc', Description: "Thrown up to 20 feet at a target to deal 1d4 + D Str FP damage to them. Also drains moisture from a 10x10 foot area where thrown.", Quantity: 0 },
  { Name: "Numbing mist", Category: 'misc', Description: "Thrown up to 10 feet at a target to prevent any healing or HP replenishment on that target for one round (6 seconds).", Quantity: 0 },
  { Name: "Repair powder", Category: 'misc', Description: "Rub on a piece of equipment or weapon to repair 1d6 points of durability loss.", Quantity: 0 },
  { Name: "Torch", Category: 'misc', Description: "A basic torch of cloth and oil. Lasts for 20 minutes and lights up an area of 20 feet of bright light and 20 feet of dim light around it. Must be held in an available hand in order to effectively bring its light along with you, but can be dropped to the ground to provide some static light.", Quantity: 0 },
  { Name: "Other adventuring supplies", Category: 'misc', Description: "30 feet of rope, a bedroll, lockpicks, a shovel, a pick, empty flasks, parchment, crafting tools. Other basic tools and supplies which vary in cost and availability depending on where you find yourself.", Quantity: 0 },
]