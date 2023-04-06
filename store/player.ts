import { defineStore } from 'pinia'

export interface Item {
  name: string;
  description?: string;
  quantity: number;
}

type RootState = {
  name: string,
  race: string,
  class: string,
  items: Item[],
  inventory: Item[],
}

export const usePlayerStore = defineStore({
  id: 'playerStore',
  state: () => ({
    name: 'Yah',
    race: 'Human',
    class: 'Knight',
    items: [...items.sort((a,b) => {
      if (a.name < b.name) return -1
      if (b.name < a.name) return 1
      return 0
    })],
    inventory: [],
  } as RootState),

  actions: {
    createItem(item: Item) {
      this.items.push(item)
    },

    addInventoryItem(itemName: string) {
      const item = this.items.find(i => i.name === itemName)
      if (!item) return
      this.inventory.push(JSON.parse(JSON.stringify(item)))
    },

    increaseItemQuantity(itemName: string) {
      const item = this.inventory.find(i => i.name === itemName)
      if (!item) return
      item.quantity++
    },

    decreaseItemQuantity(itemName: string) {
      const item = this.inventory.find(i => i.name === itemName)
      if (!item) return
      item.quantity--
      if (item.quantity < 0) item.quantity = 0
    }
  }
})

const items = [
  { name: "Greenblossom bulb", description: "Consume to increase your next turns AP by 2.", quantity: 0 },
  { name: "Blooming greenblossom bulb", description: "Consume to increase your next turns AP by 3.", quantity: 0 },
  { name: "Purple moss bulb", description: "Consume to reduce poison build up by 5, or lower the duration of active poisoning by 5 turns.", quantity: 0 },
  { name: "Blooming purple moss bulb", description: "Consume to reduce toxic or poison build up by 5, or lower the duration of active toxic or poisoning by 5 turns.", quantity: 0 },
  { name: "Bloodred moss bulb", description: "Consume to reduce bleed build up by 5.", quantity: 0 },
  { name: "Rime blue moss bulb", description: "Consume to reduce frost build up by 5, or cure AP lowering effect of frost (frostbite).", quantity: 0 },
  { name: "Mossfruit", description: "Consume to increase all non poise status resistances by 2 for ten rounds (one minute).", quantity: 0 },
  { name: "Ripe Mossfruit", description: "Consume to increase all non poise status resistances by 4 for ten rounds (one minute).", quantity: 0 },
  { name: "Prism stone", description: "A smooth stone which can be thrown or placed to determine the lethality of an area. If the stone takes damage exceeding its last wielders HP, or if it experiences an effect which would have killed its last wielder it screams loudly. For example if a player encounters a dark pit and they are unsure if it is deep enough to kill them if they fall in, or if there is a toxic smog it its depths, they can toss a prism stone into the pit and listen for its screams.", quantity: 0 },
  { name: "Light bugs", description: "A small container of bugs which glow brightly during the daytime regardless of it they are exposed to daylight. Can be fitted with a small window and attached to the waist to provide light in dark areas during the day, without needing to be held in hand. Lights up an area of 10 feet of bright light and 10 feet of dim light around the container.", quantity: 0 },
  { name: "Purging stone", description: "An extremely rare one time use item. Hold against bare skin to reduce a persons undying stacks to zero, and if they are fully undead, restore their sanity while you do so (bringing them back to \"life\").", quantity: 0 },
  { name: "Blessed mushroom", description: "Consume to heal 1d4 HP.", quantity: 0 },
  { name: "Hangfruit meat/Glowroot meat", description: "Consume to heal 1d4 HP on the start of your turns for the next four turns. Spoils after three days.", quantity: 0 },
  { name: "Dried Hangfruit meat/Glowroot meat", description: "Consume to heal 1d2 HP on the start of your turns for the next four turns. Does not spoil.", quantity: 0 },
  { name: "Crimson water/Moss skins", description: "Consume to restore 1d4 FP.", quantity: 0 },
  { name: "Dried Greatfeather", description: "Crush and press against your forehead to restore 1d4 FP.", quantity: 0 },
  { name: "Blood vial", description: "Consume to restore 1d6 HP and 1d4 FP.", quantity: 0 },
  { name: "Bellowing snowbloom", description: "Consume to restore 1d6 HP, but take 1d4 frost build up.", quantity: 0 },
  { name: "Divine blessing", description: "Consume to fully heal, and fully restore FP.", quantity: 0 },
  { name: "Binoculars", description: "Increase your sight range by up to 100 feet away depending on conditions. Can be used repeatedly.", quantity: 0 },
  { name: "Firebomb", description: "Throw up to 20 feet to explode on a target and deal 1d6 + D Str fire damage.", quantity: 0 },
  { name: "Black Firebomb", description: "Throw up to 20 feet to explode on a target and deal 1d8 + D Str fire damage.", quantity: 0 },
  { name: "Lightning Pot", description: "Throw up to 20 feet to shatter on a target and deal 1d6 + D Str lightning damage.", quantity: 0 },
  { name: "Mage's Pot", description: "Shatter in hand to spawn a homing projectile which flies toward a target within 20 feet. Any creature hit takes 1d6 + D Str magic damage.", quantity: 0 },
  { name: "Sleep Pot", description: "Throw up to 15 feet to shatter sleeping dust across a target. Any creature hit by this dust must make a DC 8 sanity or diplomacy check or fall unconscious for one round and be knocked prone. While unconscious, taking any damage wakes them. Any creature hit by the dust cannot be effected by another sleep pot for the next 12 hours, regardless of it they failed the check or not.", quantity: 0 },
  { name: "Throwing knives", description: "Throw up to 20 feet at a target to deal 1d4 + E Dex physical damage.", quantity: 0 },
  { name: "Acidic throwing knives", description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage, and 1d2 durability damage. If targeting a specific piece of equipment or small object, then a precision roll should be required.", quantity: 0 },
  { name: "Lacerating throwing knives", description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 bleed build up.", quantity: 0 },
  { name: "Frosted throwing knives", description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 frost build up.", quantity: 0 },
  { name: "Poison throwing knives", description: "Throw up to 20 feet at a target to deal 1d2 + E Dex physical damage and 1d2 poison build up.", quantity: 0 },
  { name: "Elemental arrows", description: "Elemental arrows to be fired from a shortbow or bow. Changes the normal damage of firing an arrow to be entirely of the element of this arrow. ", quantity: 0 },
  { name: "Status arrows", description: "Arrows to be fired from a shortbow or bow, coated with a status building effect. Adds 1d2 status build up to the normal damage of firing the arrow, based on the specific status effect of this arrow. ", quantity: 0 },
  { name: "Prism stone arrow", description: "An arrow to be fired from a short bow or long bow, with a prism stone fashioned in place of the arrowhead. This arrow deals no damage, but allows one to fire a prism stone in search of danger, up to their maximum bow range. ", quantity: 0 },
  { name: "Elemental bolts", description: "Elemental bolts to be fired from a crossbow. Changes the normal damage of firing a bolt to be entirely of the element of this bolt. ", quantity: 0 },
  { name: "Status bolts", description: "Bolts to be fired from a crossbow, coated with a status building effect. Adds 1d2 status build up to the normal damage of firing the bolt, based on the specific status effect of this bolt. ", quantity: 0 },
  { name: "Elemental great arrows", description: "Elemental great arrows to be fired from a greatbow. Changes the normal damage of firing a great arrow to be entirely of the element of this great arrow. ", quantity: 0 },
  { name: "Status great arrows", description: "Great arrows to be fired from a great bow, coated with a large status building effect. Adds 1d4 status build up to the normal damage of firing the great arrow, based on the specific status effect of this great arrow. ", quantity: 0 },
  { name: "Rouge paste", description: "Rub across any weapon to add a coarse red coating. The wielder of that weapon may add 2d2 bleed status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Rot paste", description: "Rub across any weapon to add a coating of poison. The wielder of that weapon may add 2d2 poison status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Cobalt paste", description: "Rub across any weapon to add a layer of frost. The wielder of that weapon may add 2d2 frost status build up, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Pale resin", description: "Rub across any weapon to add a coating of pale magic. The wielder of that weapon may add 3d6 magic damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Gold resin", description: "Rub across any weapon to add crackling lightning. The wielder of that weapon may add 3d6 lightning damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Charcoal resin", description: "Rub across any weapon to set it ablaze with flickering fire. The wielder of that weapon may add 3d6 fire damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Human resin", description: "Rub across any weapon to add a layer of heavy darkness. The wielder of that weapon may add 3d6 dark damage, once per round to each creature they damaged with that weapon. This buff lasts for three rounds (18 seconds).", quantity: 0 },
  { name: "Blue bug pellet", description: "Consume to increase magic resistance by one tier for ten rounds (one minute). Does not stack with itself.", quantity: 0 },
  { name: "Yellow bug pellet", description: "Consume to increase lightning resistance by one tier for ten rounds (one minute). Does not stack with itself.", quantity: 0 },
  { name: "Red bug pellet", description: "Consume to increase fire resistance by one tier for ten rounds (one minute). Does not stack with itself.", quantity: 0 },
  { name: "Spellbook", description: "Read thoroughly to understand and memorize the spell within, adding it to your spells list. Comprehension depends on a Int or Faith check based on the type of spell described within. Fully learning the spell from the spellbook takes a number of hours equal to each of the spells stat requirements minus ten.", quantity: 0 },
  { name: "Weapon Skill Guidebook", description: "Read thoroughly to understand and memorize the weapon skill described within, adding it to your list of learned skills. Your ability to interpret the movements described in the guidebook depends on a Str, Dex, Int, or Fai check based on the type of skill described within. As well, learning the skill takes a number of hours of practice with the guidebook and a usable weapon, equal to two times the skills FP cost.", quantity: 0 },
  { name: "Low quality strong drink", description: "Consume one charge to roll a 1d2 on your next skill check made within the next hour. If the result is a one you have disadvantage on the check, if the result is a two you have advantage. Has three charges before it is fully consumed, and consuming multiple charges causes its duration to stack.", quantity: 0 },
  { name: "High quality strong drink", description: "Consume one charge to gain advantage on your next skill check within the next hour, and gain one tier of physical damage reduction and magic resistance for the next ten seconds (or two rounds if in combat). Has three charges before it is fully consumed, and consuming multiple charges causes its duration to stack.", quantity: 0 },
  { name: "Orange Soapstone", description: "A small piece of dark orange crystal that can be used to draw a glowing orange summoners sign upon any surface. The sign stores a spoken message no longer than 25 words which must be spoken while it is written. When the sign is first interacted with after being drawn it summons a predetermined spirit (based on the specific soapstone item) which delivers your message, similar to the Summoners Signs feat of the spirit summoning weapon tree. Unlike the feat you cannot see through the sign, are not alerted when it is activated, and it disappears after one activation.", quantity: 0 },
  { name: "Pure infusion stones", description: "Apply to a melee weapon during any bonfire/magical short rest to infuse them with the element of the stone (fire, magic, lightning, or dark). See the end of the “Equipment, Defense, and Shields” section in the “Combat” chapter for more info on weapon infusions. Using an infusion stone to infuse a weapon consumes the stone.", quantity: 0 },
  { name: "Stone of gentle warmth", description: "A stone which radiates a healing aura of gentle warmth after activation. Place on the ground or throw up to 20 feet. Any creature which starts its turn within 5 feet of the stone heals for 1d6 HP. The healing aura of the stone lasts for three rounds. The healing of these stones does not stack.", quantity: 0 },
  { name: "Duel charm", description: "Throw up to 20 feet at a target to disable all magical or special buffs and effects which are currently active on the target.", quantity: 0 },
  { name: "Sand trap", description: "Soft crystal dust which hardens when stepped on preventing movement for one turn if a DC 12 Athletics check is failed. Can be placed within 5 feet. Does not expire, but can be easily blown or sweeped away before activation.", quantity: 0 },
  { name: "Drain capsule", description: "Thrown up to 20 feet at a target to deal 1d4 + D Str FP damage to them. Also drains moisture from a 10x10 foot area where thrown.", quantity: 0 },
  { name: "Numbing mist", description: "Thrown up to 10 feet at a target to prevent any healing or HP replenishment on that target for one round (6 seconds).", quantity: 0 },
  { name: "Repair powder", description: "Rub on a piece of equipment or weapon to repair 1d6 points of durability loss.", quantity: 0 },
  { name: "Torch", description: "A basic torch of cloth and oil. Lasts for 20 minutes and lights up an area of 20 feet of bright light and 20 feet of dim light around it. Must be held in an available hand in order to effectively bring its light along with you, but can be dropped to the ground to provide some static light.", quantity: 0 },
  { name: "Other adventuring supplies", description: "30 feet of rope, a bedroll, lockpicks, a shovel, a pick, empty flasks, parchment, crafting tools. Other basic tools and supplies which vary in cost and availability depending on where you find yourself.", quantity: 0 },
]