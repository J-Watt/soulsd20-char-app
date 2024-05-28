export default [
   { 
      Name: 'Fire ball (Fire Pyromancy)',
      AP: 2,
      FP: 2,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '1d6 fire damage',
      Requirements: '10 Int and 10 Fai requirements.',
      Description: 'Throw a ball of fire at target in range. Charging this spell causes it to explode, hitting all grid spaces within 5 feet of the target.'
   },
   { 
      Name: 'Sapping Brand (Fire Pyromancy)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '5 foot range',
      Duration: '2 round duration.',
      Damage: '1d4 fire damage',
      Requirements: '11 Int and 10 Fai requirements.',
      Description: 'Conjure a small flame and grab out at an adjacent target with your casting implement, threatening them as you do. A creature you make contact with takes the damage of this spell and must make a DC (10 + your Int or Fai mod) fire keeping check or have their strength temporarily sapped by the heat, causing a -3 penalty to their athletics skill for the next two rounds (twelve seconds). Charging this spell increases the DC by 2 and doubles the duration of the sapping heat.'
   },
   { 
      Name: 'Fire Surge (Fire Pyromancy)',
      AP: 4,
      FP: 'X',
      Cost: 1,
      Range: '10 foot range.',
      Damage: '2d2 fire damage',
      Requirements: '10 Int and 12 Fai requirements.',
      Description: 'Produce a surge of flame from your hand that deals 2d2 damage per FP you choose to spend, to every grid space in a line up to its maximum range. Charging this spell doubles its range and does increase the damage per FP spent to 4d2, but the FP must be spent when initiating the charged spell and not when it resolves.'
   },
   { 
      Name: 'Fire Orb (Fire Pyromancy)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '1d10 fire damage',
      Requirements: '12 Int and 12 Fai requirements.',
      Description: 'Throw a large ball of fire at target in range. Charging this spell causes it to explode, hitting all grid spaces within 5 feet of the target.'
   },
   { 
      Name: 'String of Chaos (Fire Pyromancy)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '90 foot range.',
      Damage: '1d8 fire damage',
      Requirements: '12 Int and 14 Fai requirements.',
      Description: 'Pull back the lid of one of your eyes and create a wild flame deep within it. After a moment you may launch the flame out of your eye in a trailing flash, toward a target space in range. Any creature hit by the projectile takes the damage of this spell, but you also take that same amount of damage (only when you hit and damage a creature) as your eye burns from within. If you are able to make a precision attack with this spell and hit a creature directly in one of their eyes, then they take an extra 1d8 fire damage and you take no damage. Charging this spell imbues it with precision, adding 1d6 to any precision attack you make with it as it resolves.'
   },
   { 
      Name: 'Bursting Fire Ball (Fire Pyromancy)',
      AP: 4,
      FP: 4,
      Cost: 1,
      Range: '20 foot range.',
      Damage: '4d6 fire damage',
      Requirements: '16 Int and 12 Fai requirements.',
      Description: 'Throw a ball of fire which explodes into four smaller balls. Each d6 damage corresponds to one ball of fire and each can be sent toward any target space in range. The scaling damage of this spell is evenly split between each fireball. Charging this spell adds two additional fire balls, corresponding to the two additional d6, and increases its range by 5 feet.'
   },
   { 
      Name: 'Lava Wave (Fire Pyromancy)',
      AP: 3,
      FP: 4,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '2d8 fire damage',
      Requirements: '14 Int and 14 Fai requirements.',
      Description: 'Throw a torrent of jumping lava toward a target in range. If the lava hits and deals damage to target creature, it then jumps to a new target within 15 feet. The lava continues to jump to new targets (prioritizing hostile creatures) until there are no new target creatures in range of its next jump, or it misses or deals no damage to a creature it jumped toward. Charging this spell Increases its range by 5 feet (this includes its jumping range).'
   },
   { 
      Name: 'Pulling Ember (Fire Pyromancy)',
      AP: 4,
      FP: 4,
      Cost: 1,
      Range: '25 foot range',
      Duration: '2 round duration.',
      Damage: '2d6 fire damage',
      Requirements: '15 Int and 14 Fai requirements.',
      Description: 'Cast a small pulsing flame at a location in the spells range. All creatures within three spaces (15 feet) of the flame must make a DC (12 + your Int or Fai mod) athletics check or be pulled one space toward the flame (if their path is unobstructed). If they fail the check and their path is obstructed they are instead knocked prone. A creature in the same space as the flame does not get pulled, but instead takes the damage of the spell (this also happens anytime a creature moves into this space). \par The pulling effect is repeated each round on the start of your turns, for two rounds. The spell may be ended anytime the caster chooses on their own turn. You may not have more than one instance of this spell active at a time, and casting it again dissipates your previous casting. Charging this spell increases the pulling radius to 20 feet, and the DC by 2.'
   },
   { 
      Name: 'Combustion (Fire Pyromancy)',
      AP: 2,
      FP: 1,
      Cost: 1,
      Range: '5 foot range.',
      Damage: '2d4 fire damage',
      Requirements: '10 Int and 10 Fai requirements.',
      Description: 'Create a small explosion from your hand, directed in front of you. Charging this spell causes it to deal 2 poise damage.'
   },
   { 
      Name: 'Great Combustion (Fire Pyromancy)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '5 foot range.',
      Damage: '2d6 fire damage',
      Requirements: '14 Int and 14 Fai requirements.',
      Description: 'Create a large explosion from your hand, directed in front of you and diagonally in front of you to your left and right. Charging this spell causes it to deal 3 poise damage.'
   },
   { 
      Name: 'Sacred Flame of Frenzy (Fire Pyromancy)',
      AP: 6,
      FP: 4,
      Cost: 2,
      Range: '5 foot range.',
      Damage: '2d20 fire damage',
      Requirements: '14 Int and 16 Fai requirements.',
      Description: 'Grab and threaten a creature in range before slowly inserting a frenzied flame within them that burrows and ignites. Effected creatures must succeed on a DC (12 + your Str mod) athletics check or take the fire damage of this spell on the start of their next turn. Any creature damaged by this spell which is also one of the races of humanity, is inflicted by the frenzy status condition for one round. Charging this spell Increases its DC by 2 and causes it to deal 6 poise damage.'
   },
   { 
      Name: 'Immolation (Fire Pyromancy)',
      AP: 3,
      FP: 3,
      Cost: 1,
      Range: 'Self cast',
      Duration: '3 round duration.',
      Damage: '1d8 fire damage',
      Requirements: '14 Int and 16 Fai requirements.',
      Description: 'Coat yourself with flame, burning of your own flesh to create a cleansing heat around you. You, as well as any creature starting their turn within one space (5 feet) of you while this spell is active, takes the spells fire damage. This spell lasts for three rounds (18 seconds). Charging this spell increases its cleansing heat to effect anything starting its turn within 10 feet of you, and increases its duration to five rounds.'
   },
   { 
      Name: 'Chaos Bed Vestiges (Fire Pyromancy)',
      AP: 3,
      FP: 3,
      Cost: 2,
      Range: '15 foot range.',
      Damage: '4d10 fire damage',
      Requirements: '16 Int and 16 Fai requirements.',
      Description: 'Throw a large ball of chaos flame that scorches a target in range. Also hits all grid spaces adjacent to the target space, but for half of the damage dealt. Charging this spell causes it to explode violently, increasing its range by 5 feet and causing it to fully hit all grid spaces within 10 feet of the target space.'
   },
   { 
      Name: 'Seething Chaos (Fire Pyromancy)',
      AP: 3,
      FP: 4,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '4d12 fire damage',
      Requirements: '16 Int and 18 Fai requirements.',
      Description: 'Conjure a seething ball of chaos on a grid space in range. The ball hits and damages any creature which does not dodge out of the target space when it is conjured, as well as any creature which moves into that space over the next round. It then explodes at the start of your next turn (after your slow actions resolve), dealing its fire damage to everything within 2 spaces (10 feet) of the ball. The damage of this spell does not stack with itself if multiple seething chaos balls explode at once. Charging this spell increases its range by 10 feet, and increases the size of the explosion to 15 feet.'
   },
   { 
      Name: 'Pyrovoyance (Fire Pyromancy)',
      AP: '10 minutes',
      FP: 8,
      Cost: 2,
      Range: '5 foot range.',
      Damage: '16 Int and 18 Fai requirements.',
      Description: 'You can perceive past events through gazing into the flames of a permanent bonfire in range after casting this spell. While in this state you may no longer perceive yourself or your surroundings in any way and the spell ends if you take damage',
      Requirements: 'are moved, or the bonfire is extinguished. You may also willingly end the spell at any time. When the spell ends the fire is extinguished. Each recovery flask charge the fire provides after a long rest increases the potency of this spell. A bonfire providing 2 charges allows you to view your location within the last 24 hours up to the casting of this spell, 3 charges for within the last week, 4 charges for within the last three months, 5 charges for within the last year, 6 charges for within the last 10 years, 7 charges for within the last 100 years, 8 charges for within 500 years, 9 charges or more for an unknown span which may expose the mind to some profound revelations from incomprehensible truths. Each time you change your view to a new time within the fires range you instantly age by the amount of time you moved. This spell cannot be charged.'
   },
   { 
      Name: 'Floating Chaos (Fire Pyromancy)',
      AP: 5,
      FP: 3,
      Cost: 2,
      Range: '5 foot range',
      Duration: '3 round duration.',
      Damage: '2d10 fire damage',
      Requirements: '18 Int and 16 Fai requirements.',
      Description: 'Conjure a floating ball of chaos flame into a space in range. The floating flame then shoots a fire projectile at a target of your choice within 20 feet of itself (four grid spaces), once per turn on your turn, dealing the fire damage of this spell. The floating flame lasts for three rounds and dissipates if it is hit by any attack. You may only have two of these flames active at a time, and conjuring a third one replaces the oldest active flame. Charging this spell increases the damage the flame deals as usual, but also gives it HP equal to your Int Stat (although it has no damage resistances).'
   },
   { 
      Name: 'Chaos Firestorm (Fire Pyromancy)',
      AP: 5,
      FP: 3,
      Cost: 2,
      Range: '10 foot range.',
      Damage: '4d8 fire damage',
      Requirements: '18 Int and 16 Fai requirements.',
      Description: 'Chaos flame erupts from the ground around you, up to 10 feet into the air, dealing the spells fire damage to everything within 2 spaces (10 feet) of you. Charging this spell increases its range by 5 feet, and the height it erupts by another 5 feet.'
   },
   { 
      Name: 'Erume Flame Arc (Fire Pyromancy)',
      AP: 3,
      FP: 3,
      Cost: 1,
      Range: '5 foot range',
      Duration: '5 round duration.',
      Damage: '14 Int and 14 Fai requirements.',
      Description: 'Run your casting implement along a melee weapon in range to buff it with arcing flames. The wielder of that weapon may add 2d6 fire damage (plus your scaling from this spell), once per round to each creature that they damaged with that weapon. This buff lasts for five rounds (30 seconds). Charging this spell doubles its duration, but does not increase the damage of the buff.'
   },
   { 
      Name: 'Bellowing Pyre (Dragon Pyromancy)',
      AP: 2,
      FP: 2,
      Cost: 1,
      Range: '15 foot range',
      Duration: '2 round duration.',
      Damage: '1d8 fire damage',
      Requirements: '10 Int and 12 Fai requirements.',
      Description: 'Breathe dense flames that collect and form into a loud blazing orb floating 15 feet above a target space within range. Throughout the duration, at the start of your turns you must spend 1 AP and 1 FP to maintain a bellowing pyre in the air or else the spell ends. When the spell ends the bellowing pyre falls then explodes upon making any contact, hitting that space and all grid spaces within 5 feet with a fiery raging roar that can be heard from a great distance, dealing the damage of this spell plus an additional 1d8 fire damage per round you spent the cost to maintain it. \par Creatures made of inorganic material take an extra 1d8 of fire damage from this spell. The damage of this spell does not stack with itself if multiple bellowing pyres explode at once against creatures but does stack against objects. Objects not being worn or carried take double the damage of this spell, as well any fragile objects within 20 feet of the explosion may instantly shatter. If a bellowing pyre takes damage while floating in the air, it explodes in place. Charging this spell increases the duration to 5 rounds.'
   },
   { 
      Name: 'Magma Heave (Dragon Pyromancy)',
      AP: 2,
      FP: 2,
      Cost: 1,
      Range: '20 foot range.',
      Damage: '1d4 fire damage',
      Requirements: '11 Int and 13 Fai requirements.',
      Description: 'Spew a burst of sticky magma upon a target in range. Any creature hit by this spell takes its fire damage and is marked by the magma for ten rounds of combat (one minute), or until immediately after they are hit by the spell Dragonfire Breath. \par Marked creatures have their fire resistance lowered by one tier, and marked creatures hit by the Dragonfire Breath spell explode taking an additional 3d6 fire damage and 1d2 durability loss to their armor. Charging this spell causes it to send out a blast of heat reaching 10 feet in every direction away from your target space. Any creature hit by the blast of heat is marked, but does not take the damage of the spell.'
   },
   { 
      Name: 'Great Wyrm Slam (Dragon Pyromancy)',
      AP: 4,
      FP: 4,
      Cost: 1,
      Range: '40 foot range.',
      Damage: '2d10 physical damage',
      Requirements: '11 Int and 15 Fai requirements.',
      Description: 'Conjure the claw of a massive serpent and slam it down over a 15ft by 15ft area that is fully within this spells range, dealing physical damage to every creature hit. Charging this spell increases the size of the claw, causing the area of effect to instead be 20ft by 20ft.'
   },
   { 
      Name: 'Dragon\'s Maw (Dragon Pyromancy)',
      AP: 4,
      FP: 4,
      Cost: 1,
      Range: '40 foot range',
      Duration: '3 round duration.',
      Damage: '2d8 fire damage',
      Requirements: '11 Int and 15 Fai requirements.',
      Description: 'Choose a 10ft by 10ft area that is fully within this spells range. That area crackles with primal fire and threatens all grounded creatures that stand atop it, before opening into a fiery pit. Every grounded creature that finds themselves fully within the pits spaces is swallowed by its flaming maw, taking the damage of the spell before being spit out onto an adjacent space of your choice. Upon landing the creature takes an additional 1d6 true damage. The pit lasts for three rounds of combat. Charging this spell increases the size of the pit to 15ft by 15ft, but it still must be placed fully within the spells range.'
   },
   { 
      Name: 'Dragonfire Breath (Dragon Pyromancy)',
      AP: 5,
      FP: 4,
      Cost: 1,
      Range: '25 foot range.',
      Damage: '4d8 fire damage',
      Requirements: '11 Int and 17 Fai requirements.',
      Description: 'Conjure the head of a fire dragon above your own, which breaths fire hitting all spaces in a cone up to its maximum range. Before the spell goes off you may spend additional FP to increase the range of the breath by one grid space (5 feet) per extra FP spent, up to a maximum range of 40 feet. Charging this spell causes it to pierce one tier of fire resistance, and allows any additional FP spent to increase the range by two grid spaces (10 feet) each, up to a maximum range of 55 feet.'
   },
   { 
      Name: 'Dragonrot Breath (Dragon Pyromancy)',
      AP: 5,
      FP: 4,
      Cost: 1,
      Range: '25 foot range.',
      Damage: '11 Int and 17 Fai requirements.',
      Description: 'Conjure the head of a poison dragon above your own, which breaths rotting mist that spreads over all spaces in a cone up to its maximum range. Every creature which the mist makes contact with takes 1d6 poison and 1d4 toxic build up. Before the spell goes off you may spend additional FP to increase the range of the breath by one grid space (5 feet) per extra FP spent, up to a maximum range of 40 feet. Charging this spell causes it to instead deal 2d4 poison and 1d6 toxic build up, and allows any additional FP spent to increase the range by two grid spaces (10 feet) each, up to a maximum range of 55 feet.'
   },
   { 
      Name: 'Crystal Dragon Breath (Dragon Pyromancy)',
      AP: 5,
      FP: 4,
      Cost: 1,
      Range: '30 foot range.',
      Damage: '4d8 magic damage',
      Requirements: '11 Int and 17 Fai requirements.',
      Description: 'Conjure the head of a magic dragon above your own, which breaths a laser of magic into the ground in front of you. The ground then erupts into bursts of crystal which travel forward in a line up to the spells maximum range, damaging every grounded creature in their path. The crystal bursts can move up obstructions as they travel forward, but the total distance traveled may be no greater then the spells maximum range. Any creatures larger than medium that are hit by this spell must make a DC (12 + your Int mod) acrobatics check or take 2d8 additional magic damage from the crystal bursts traveling along them. Charging this spell increases its range by 5 feet, and increases the DC for larger creatures by 3. '
   },
   { 
      Name: 'Abyss Tainted Breath (Dragon Pyromancy)',
      AP: 5,
      FP: 4,
      Cost: 2,
      Range: '30 foot range.',
      Damage: '4d8 dark damage',
      Requirements: '13 Int and 22 Fai requirements.',
      Description: 'Conjure the head of a dark dragon above your own, which chokes up a laser of dark hitting all spaces in a line up to its maximum range. Before the spell goes off you may spend additional FP to increase the range of the breath by one grid space (5 feet) per extra FP spent, up to a maximum range of 45 feet. Charging this spell causes it to pierce one tier of dark resistance, and allows any additional FP spent to increase the range by two grid spaces (10 feet) each, up to a maximum range of 60 feet.'
   },
   { 
      Name: 'Ancient Roar (Dragon Pyromancy)',
      AP: 6,
      FP: 7,
      Cost: 2,
      Range: '20 foot range.',
      Damage: '13 Int and 20 Fai requirements.',
      Description: 'Conjure the head of an ancient dragon above your own. The head then lets out a piercing roar, shattering the fighting will and stance of all creatures within 20 feet of yourself. Every creature in range, that is not afflicted by the deafened status condition, takes 2 poise damage. Additionally, any medium or smaller creature is pushed 5 feet away from you, knocked prone, and inflicted by the locked up status condition for one round when they first stand back up. Charging this spell increases its range to 30 feet, and causes it to deal 4 poise damage instead.'
   },
   { 
      Name: 'Lithomancy (Pestilence Pyromancy)',
      AP: 3,
      FP: 1,
      Cost: 1,
      Range: 'Self cast',
      Requirements: '10 Int and 10 Fai requirements.',
      Description: 'Collect three small natural stones from the local environment, then enchant the held stones to detect magical, cosmic, or a greater power. The stones will permanently change color to represent magical effects or entities in the nearby area, one reflecting lingering past magic, one reflecting magic that is currently active, and another denoting magic or a magical presence that is approaching or will soon be in the nearby area sometime in the future. It is not clear which stone represents which time, and some skill is involved to understand the colors. Charging this spell allows the stones to also detect significantly powerful entities or influences in a larger unknown radius, with colors that require more expertise to read.'
   },
   { 
      Name: 'Pest Strings (Pestilence Pyromancy)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '25 foot range.',
      Damage: '1d4 physical damage',
      Requirements: '11 Int and 11 Fai requirements.',
      Description: 'Conjure up to four sticky pestilent strings which fly through the air at four separate targets in range dealing physical damage on impact. The strings may arch around any cover their target is behind and path themselves to hit from any angle, as long as their full path is no longer than the range of the spell. This spell does not benefit from scaling. Charging this spell increases its range to 30 feet and increases the maximum number of pestilent strings to eight, with each target being able to be hit by two strings each.'
   },
   { 
      Name: 'Molding Earth (Pestilence Pyromancy)',
      AP: 3,
      FP: 3,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '1d6 physical damage',
      Requirements: '12 Int and 12 Fai requirements.',
      Description: 'Toss a mold riddled ball of earth at a target in range dealing physical damage as well as 1d2 poison to any creature it hits. Over the next round, creatures hit by this spell take an additional 1d4 poison and 1 poise damage each time they drink from their recovery flasks or consume anything orally. Charging this spell increases its range by 10 feet and increases the initial poison build up to 2d2.'
   },
   { 
      Name: 'Poison Mist (Pestilence Pyromancy)',
      AP: 4,
      FP: 2,
      Cost: 1,
      Range: '20 foot range',
      Duration: '2 round duration.',
      Damage: '10 Int and 12 Fai requirements.',
      Description: 'Choose a target space in range and conjure a 10ft by 10ft mist of poison which contacts that space and stays in place for 2 rounds (12 seconds). Every creature that begins their turn within the mist, or moves into one of its spaces, takes 1d6 poison build up. Charging this spell increases its range by 5 feet, and the size of the mist to 15ft by 15ft.'
   },
   { 
      Name: 'Toxic Mist (Pestilence Pyromancy)',
      AP: 4,
      FP: 2,
      Cost: 2,
      Range: '20 foot range',
      Duration: '2 round duration.',
      Damage: '10 Int and 14 Fai requirements.',
      Description: 'Choose a target space in range and conjure a 10ft by 10ft mist of intense poison which contacts that space and stays in place for 2 rounds (12 seconds). Every creature that begins their turn within the mist, or moves into one of its spaces, takes 1d4 toxic build up. Charging this spell increases its range by 5 feet, and increases the toxic build up to 1d6.'
   },
   { 
      Name: 'Acid Surge (Pestilence Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '20 foot range',
      Duration: '2 round duration.',
      Damage: '12 Int and 14 Fai requirements.',
      Description: 'Choose a target space in range and conjure a 10ft by 10ft cloud of acid which contacts that space and stays in place for 2 rounds (12 seconds). Every creature that begins their turn within the acid, or moves into one of its spaces, takes 1d4 durability damage to all of its equipment. Any object within the cloud of acid also takes 1d4 durability damage every round on the turn you cast this spell. Charging this spell increases its range by 5 feet, and its duration by one round.'
   },
   { 
      Name: 'Entangling Growth (Pestilence Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '25 foot range',
      Duration: '5 round duration.',
      Damage: '14 Int and 14 Fai requirements.',
      Description: 'Cause a 15ft by 15ft square, which makes contact with a space in range, to grow entangling vines along the ground. Upon first casting, any grounded creatures within the area must make a DC (12 + your Int or Fai mod) athletics or acrobatics check or be entangled by the vines, increasing the cost of their next movement action by 2 AP (this effect does not stack). The area then becomes difficult terrain and deals 1d4 poison status build up to each grounded creature that starts their turn, ends their turn, or moves into one of the spaces. The area lasts 5 rounds or until you choose to dissipate it. Charging this spell increases the DC by 2, and the movement action AP cost increase to 4 AP.'
   },
   { 
      Name: 'Burning Decay (Pestilence Pyromancy)',
      AP: 1,
      FP: 2,
      Cost: 1,
      Range: '20 foot range.',
      Damage: '13 Int and 14 Fai requirements.',
      Description: 'Cause an intense heat to radiate from the decay within a creature in range. This deals fire damage to the target creature equal to its current poison or toxic status build up. This spell can only be cast once per round, but cannot be dodged. This spell cannot be charged.'
   },
   { 
      Name: 'Boulder Heave (Pestilence Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '20 foot range.',
      Damage: '2d10 physical damage',
      Requirements: '13 Int and 15 Fai requirements.',
      Description: 'Throw a conjured boulder at a target space in range, hitting it and all adjacent spaces as the boulder crumbles. Creatures hit by the boulder take the physical damage of the spell and must make a DC (12 + your Int or Fai Mod) athletics or acrobatics check or be knocked prone. Any creatures that fail the check and are hit in the spaces adjacent to the target space, are also moved 5 feet away from the target space. Charging this spell causes it to deal 2 poise damage to any creatures it hits (regardless of their distance from you).'
   },
   { 
      Name: 'Horn Growth Aspect (Pestilence Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '20 foot range.',
      Damage: '1d8 physical damage',
      Requirements: '13 Int and 13 Fai requirements.',
      Description: 'Run your casting implement along your shoulder or head to conjure a glowing jagged growth of spines and horns. Then charge forward with the horns barred, moving up to the maximum range of this spell. After concluding the movement, threaten an adjacent grid space with a upward sweeping horn attack. Any creatures hit by this attack take the damage of the spell and any medium or smaller creatures must make a DC (10 + your Fai mod) athletics or acrobatics check or be thrown upwards and knocked prone as they fall back down. Charging this spell increases the maximum distance you may charge forward to 30 feet and increases its DC by 2.'
   },
   { 
      Name: 'Tail Growth Aspect (Pestilence Pyromancy)',
      AP: 5,
      FP: 3,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '2d6 physical damage',
      Requirements: '14 Int and 14 Fai requirements.',
      Description: 'Bring your casting implement in close to conjure an enlarged glowing tail behind you, then spin to sweep the tail across a 180 degree arc in front of you. This tail sweep threatens all grid spaces in the arc up to this spells maximum range, and all creatures hit take the damage of this spell. Charging this spell does not increase its number of damage die but allows you to immediately spin a second time with the tail, making the spell attack again at an increased maximum range of 20 feet.'
   },
   { 
      Name: 'Wing Growth Aspect (Pestilence Pyromancy)',
      AP: 2,
      FP: 4,
      Cost: 2,
      Range: '25 foot range.',
      Damage: 'Xd6 physical damage',
      Requirements: '16 Int and 16 Fai requirements.',
      Description: 'Lift your casting implement up and back down again in a swift motion to conjure a pair of glowing wings on your back, and initiate a slow action. After this slow action is initiated you may spend any remaining AP of your turn to extend the wings and fly directly up, moving one grid space (5 feet) for each AP spent, before your turn ends. When the slow action resolves, you may glide this spells range in any non-upward direction before slamming toward the ground directly below you. As you hit the ground, the wings break your fall and smash the grid space directly below you, as well as all adjacent grid spaces, threatening any creatures that occupy them. This spell deals 1d6 damage for every 5 feet you descend during the plunge (up to a maximum of 12d6, and including a bonus from scaling). This spell cannot be charged and is interrupted if you are hit by an attack while in the air. Whenever this spell is interrupted, the glowing wings dissipate causing you fall back toward the ground if you were airborne.'
   },
   { 
      Name: 'Humid Dew (Pestilence Pyromancy)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '30 foot range.',
      Damage: '10 Int and 10 Fai requirements.',
      Description: 'Produce a dull blue flame in hand before either tossing it into the sky to produce light rain, or waving it in a desired direction to manipulated a small amount of standing water in range. The rain created by this spell is very localized and only effects an area of 100 feet around a target space in range when it is cast. As well, this spell may only be used to create rain when the caster is exposed to the sky. The rain only lasts for one round but can be extended with additional casts. Anything exposed to this light rain for three or more rounds in a row becomes drenched in water. \par The standing water this spell may manipulate can be no larger than a 5 foot cube, and allows you to slowly pull or push that water at a rate of 10 feet every round (or 2 feet per second). Although, the water must stay within the range of this spell as you manipulate it. Each casting of the spell maintains control over the water for one round. This movement cannot cause damage or produce enough force to push a creature, but can extinguish a small flame or drench a creature it makes contact with. Charging this spell doubles the duration of the rain it produces, and allows you to move the standing water at twice the speed.'
   },
   { 
      Name: 'Torrential Current (Pestilence Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '50 foot range.',
      Damage: '15 Int and 15 Fai requirements.',
      Description: 'Produce a vigorous blue flame in hand before either tossing it into the sky to produce heavy rain, or waving it in a desired direction to manipulated a volume of water in range. The rain created by this spell is very localized and only effects an area of 300 feet around a target space in range when it is cast. As well, this spell may only be used to create rain when the caster is exposed to the sky. The heavy rain lasts for two rounds and can be extended by its full duration with additional casts. Anything exposed to this heavy rain becomes drenched in water. \par The water this spell may manipulate can be no larger than a 15 foot cube, and allows you to pull or push that water at a rate of 20 feet every round (or 4 feet per second). Although, the water must stay within the range of this spell as you manipulate it. Each casting of the spell maintains control over the water for one round. The waters movement can change a current, or create a current where there isn’t one. The moving water may create difficult terrain and once per round cause any creature it is moved into to make a DC 12 athletics or acrobatics check or be knocked prone. Charging this spell doubles the duration of the rain it produces, and allows you to move the water at twice the speed (increasing the DC to 14).'
   },
   { 
      Name: 'Churning Deluge (Pestilence Pyromancy)',
      AP: 4,
      FP: 6,
      Cost: 2,
      Range: '35 foot range',
      Duration: '5 round duration.',
      Damage: '17 Int and 15 Fai requirements.',
      Description: 'Use the chaotic force of nature to churn the currents of water around you. Upon casting this spell and on the beginning of your turns for five full rounds (30 seconds) while you are drenched in water, you may absorb the water to regain 1 FP and gain one bonus AP. If in heavy rain or within a body of water this may be done on each round. \par As well, once per turn on your turn starting with the moment the spell was cast, you may choose to make up to five creatures in range (35 feet), that are drenched in water, make a DC (12 + Int or Fai mod) athletics check or be pulled or pushed one space toward or away from you (your choice for each creature). If this movement is obstructed and a creature fails the check then they are knocked prone. If a drenched creature is successfully pulled then you may choose to transfer the water from the creature onto yourself. \par This spell may also be cast upon an object with an increased casting time of 1 hour. If cast this way the object becomes permanently waterproof and resistant to excess moisture. If cast again on an already effected object the spell is nullified. This spell cannot be charged.'
   },
   { 
      Name: 'Bark Flesh (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 2,
      Cost: 1,
      Range: '5 foot range',
      Duration: '6 hour duration.',
      Damage: '11 Int and 11 Fai requirements.',
      Description: 'Your own, or your targets skin becomes as hard as the bark of a tree, bestowing +1 flat physical damage reduction for the next 2*(your Int or Fai mod) physical attacks taken. (Physical attacks being any attack which deals physical damage). This effect lasts for 6 hours, and can be canceled by you at any time. This spell does not stack with any other “flesh” spells. Charging this spell costs an additional FP, but makes it unable to be dispelled forcefully.'
   },
   { 
      Name: 'Stone Flesh (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '5 foot range',
      Duration: '12 hour duration.',
      Damage: '12 Int and 14 Fai requirements.',
      Description: 'Your own, or your targets skin becomes stone hard, bestowing +3 flat physical damage reduction for the next 2*(your Int or Fai mod) physical attacks taken. (Physical attacks being any attack which deals physical damage). This effect lasts for 12 hours, and can be canceled by you at any time. This spell does not stack with any other “flesh” spells. Charging this spell costs an additional FP, but makes it unable to be dispelled forcefully.'
   },
   { 
      Name: 'Mirror Flesh (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 5,
      Cost: 1,
      Range: 'Self cast',
      Duration: '5 round duration.',
      Damage: '14 Int and 12 Fai requirements.',
      Description: 'Turn your flesh into a light mercury which reverberates with mimicking magic. Whenever you receive a positive buff effect with a duration, you may mirror that same entire effect onto one willing ally within 20 feet of yourself. This spell lasts for five rounds (30 seconds), and can stack with any other “flesh” spell (regardless of that spells own limitations), giving it a reflective polished looking coating. Charging this spell also costs an additional FP, but increases its mirroring range to any ally within 25 feet and once over the spells duration you may choose to mirror an effect onto two allies in range instead of just one.'
   },
   { 
      Name: 'Iron Flesh (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 5,
      Cost: 1,
      Range: 'Self cast',
      Duration: '5 round duration.',
      Damage: '16 Int and 14 Fai requirements.',
      Description: 'Turn your flesh to metal, bestowing two tiers of physical armor but doubling the cost of all movement actions. While this spell is active, melee attacks which hit you you face a recoil which jars the attacker making them take 1 poise damage per attack. This spell lasts for five rounds (30 seconds), and does not stack with any other “flesh” spells. Charging this spell more carefully distributes the weight of the metal, allowing you make regular movement actions without any increased cost (although other movement actions such as dodging still have their cost doubled).'
   },
   { 
      Name: 'Mercury Flesh (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 6,
      Cost: 1,
      Range: 'Self cast',
      Duration: '5 round duration.',
      Damage: '16 Int and 16 Fai requirements.',
      Description: 'Turn your flesh into a metallic mercury which can form and meld itself. Once per round whenever you are struck by a melee attack which made contact with you, the mercury may copy the attack and make it against any creature in range of yourself. The copied attack has the same range and damage as the original. This spell lasts for five rounds (30 seconds), and does not stack with any other “flesh” spells. Charging this spell costs an additional FP, but makes it unable to be dispelled forcefully.'
   },
   { 
      Name: 'Motivation (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 2,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '2d6 heal, 11 Int and 13 Fai requirements.',
      Description: 'Yell a motivational phrase at an allied creature while thrusting your casting implement toward them. Increases the initiative roll of the ally in range by 2d2 from the next round of combat onward. Provides the HP replenishment of the spell only if, and immediately when, it moves the target above another creature in initiative. This spell can only be cast as a slow action and it cannot be charged.'
   },
   { 
      Name: 'Defuse (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '15 foot range',
      Duration: '2 round duration.',
      Damage: '12 Int and 11 Fai requirements.',
      Description: 'A charming spell which can calm a hostile creature of unremarkable intelligence, stopping them from taking aggressive actions against you and your allies for a short time. Targeted creatures can resist with a DC (10 + your Int mod) diplomacy or sanity check. This effect lasts for two rounds (12 seconds) and only works on creatures with Intelligence stats of 10 or lower. If you or your allies damage a creature under the effects of this spell then the spell ends. This spells effects count as a special magical effect on the target creature and can be dispelled. Charging this spell increases the DC by 4. '
   },
   { 
      Name: 'Rapport (Buffing and Debuffing Pyromancy)',
      AP: 5,
      FP: 4,
      Cost: 1,
      Range: '15 foot range',
      Duration: '2 round duration.',
      Damage: '16 Int and 12 Fai requirements.',
      Description: 'A charming spell which can charm an undead with the allure of a warm flame, making them your ally. Targeted creatures can resist with a DC (12 + your Int mod) sanity check. Failing this check makes them obey your every command and fight for you over the spells duration.',
      Damage: 'This spell lasts for two rounds (12 seconds) and only works on fully undead. This spells effects count as a special magical effect on the target creature and can be dispelled. Charging this spell increases its DC by 3. '
   },
   { 
      Name: 'Profuse Sweat (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 2,
      Cost: 1,
      Range: '5 foot range',
      Duration: '5 round duration.',
      Damage: '14 Int and 14 Fai requirements.',
      Description: 'Cause profuse sweating on yourself or a willing creature in range, which drenches them, increasing their fire resistance by one tier and their poison and toxic resistances by 7. This spell lasts for five rounds (30 seconds) and cannot be canceled. Charging this spell increases the fire resistance bonus to two tiers, and lowers any current poison or toxic build up on its target by 4 each. '
   },
   { 
      Name: 'Warmth (Buffing and Debuffing Pyromancy)',
      AP: 4,
      FP: 4,
      Cost: 2,
      Range: '5 foot range',
      Duration: '5 round duration.',
      Damage: '10 Int and 18 Fai requirements.',
      Description: 'Create a gentle flame in front of you that floats above the ground restoring HP to nearby creatures. At the start of their turns, any creature within one space (5 feet) of the fire regains 1d8 (plus scaling bonus) HP. This spell lasts for five rounds (30 seconds). Charging this spell increases the range of its healing aura to 10 feet, and increases its healing to 1d12. '
   },
   { 
      Name: 'Wither Motivation (Debuffing Hex)',
      AP: 4,
      FP: 2,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '2d8 dark damage',
      Requirements: '11 Int and 13 Fai requirements.',
      Description: 'Stare into a hostile creature with withering splotches in your eyes to sap them of their motivation. Lowers the initiative roll of a target creature in range by 2d2 from the next round of combat onward. Deals the damage of the spell only if, and immediately when, it moves the target below another allied creature in initiative. This spell can only be cast as a slow action and it cannot be charged.'
   },
   { 
      Name: 'Black Fire Orb (Darkfrost/Blackfire Hex)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '1d12 dark damage',
      Requirements: '11 Int and 14 Fai requirements.',
      Description: 'Throw a large ball of black fire at target in range, striking them with a weighty force. Charging this spell increases its range by one grid space (5 feet), and causes it to weight any creature it hits with heavy black flame, increasing the AP cost of their dodges by 1 until the start of your next turn. '
   },
   { 
      Name: 'Black Flame Weapon (Darkfrost/Blackfire Hex)',
      AP: 3,
      FP: 4,
      Cost: 1,
      Range: '5 foot range',
      Duration: '3 round duration.',
      Damage: '12 Int and 14 Fai requirements.',
      Description: 'Run your casting implement along a melee weapon in range to buff it with black flame. The wielder of that weapon may deal a bonus 1\% of a creatures max HP in true damage',
      Requirements: 'once per round, to each creature that they damaged with that weapon. This buff lasts for three rounds. Charging this spell increases its duration to five rounds, but does not increase the damage of the buff. '
   },
   { 
      Name: 'Black Flame (Darkfrost/Blackfire Hex)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '5 foot range.',
      Damage: '2d8 dark damage',
      Requirements: '13 Int and 15 Fai requirements.',
      Description: 'Create a large black flame explosion from your hand, directed in front of you and diagonally in front of you to your left and right. Charging this spell causes it to deal a bonus 2 poise damage',
      Requirements: 'and the first time a creature is hit by the charged version of this spell in a 24 hour period, they also take 5\% of their max HP in true damage. '
   },
   { 
      Name: 'Black Fire Storm (Darkfrost/Blackfire Hex)',
      AP: 4,
      FP: 3,
      Cost: 2,
      Range: '5 foot range.',
      Damage: '4d6 dark damage',
      Requirements: '14 Int and 16 Fai requirements.',
      Description: 'Pull a dark flame windstorm around yourself into a twisting vortex, hitting all adjacent grid spaces. All creatures hit take the dark damage of the spell, and the first time they are hit in a round, all medium or smaller creatures have their dodge distance halved until the start of your next turn (with the distance rounded down to the nearest multiple of five, including zero). Charging this spell causes it to deal a bonus 2 poise damage',
      Requirements: 'and the first time a creature is hit by the charged version of this spell in a 24 hour period, they also take 5\% of their max HP in true damage. '
   },
   { 
      Name: 'Black Serpent (Darkfrost/Blackfire Hex)',
      AP: 5,
      FP: 5,
      Cost: 2,
      Range: '40 foot range.',
      Damage: '6d6 dark damage',
      Requirements: '15 Int and 20 Fai requirements.',
      Description: 'Release undulating black flames that trace the ground in any path you choose hitting everything in the path until it travels the spells range in distance. The flames can also travel up walls and around obstacles, but they can only hit each creature in its path once per casting. Charging this spell causes it to leave a trail of fire in its wake for one full round, dealing 1d6 fire damage to any creature which starts, ends, or first moves into the trail. '
   },
   { 
      Name: 'Black Frost Orb (Darkfrost/Blackfire Hex)',
      AP: 3,
      FP: 2,
      Cost: 1,
      Range: '15 foot range.',
      Damage: '1d8 dark damage',
      Requirements: '14 Int and 11 Fai requirements.',
      Description: 'Throw a large dark ice ball at target in range, dealing dark damage and 1d2 frost build up. Frostbitten creatures hit by this spell take an additional d8 of dark damage. Charging this spell increases its range by 10 feet and increases its frost build up to 3d2. '
   },
   { 
      Name: 'Black Ice Eruption (Darkfrost/Blackfire Hex)',
      AP: 4,
      FP: 3,
      Cost: 1,
      Range: '20 foot range.',
      Damage: '4d6 dark damage',
      Requirements: '16 Int and 14 Fai requirements.',
      Description: 'Create a line of explosions of dark frost along the ground, leading up to the spells maximum range. All grounded creatures hit by the line of explosions take the dark damage of the spell, as well as 1d4 frost build up. The line of explosions can be stopped by cover and/or a vertical wall in the terrain. Charging this spell increases its range to 30 feet, and knocks prone all medium or smaller creatures hit by it. '
   },
   { 
      Name: 'Seething Dark Frost (Darkfrost/Blackfire Hex)',
      AP: 4,
      FP: 7,
      Cost: 2,
      Range: '20 foot range.',
      Damage: '4d12 dark damage',
      Requirements: '20 Int and 15 Fai requirements.',
      Description: 'Conjure a seething ball of dark frost on a grid space in range. The ball deals its dark damage and 1d6 frost build up to any creature which does not dodge out of the target space when it is conjured, as well as any creature which moves into that space over the next round. At the start of your next turn (after your slow actions resolve) the dark frost ball moves two spaces in a direction of your choice, hitting all creatures in its path, then it explodes dealing its dark damage and 1d6 frost build up to everything within 2 spaces (10 feet) of the ball. You may only have one instance of this spell active at once, and are unable to cast a new one until the previous instance explodes. Charging this spell increases its range by 10 feet, and increases the frost build up to 2d6.  '
   },
   { 
      Name: 'Dark Fog (Death Hex)',
      AP: 4,
      FP: 4,
      Cost: 2,
      Range: '20 foot range',
      Duration: '2 round duration.',
      Damage: '16 Int and 14 Fai requirements.',
      Description: 'Choose a target space in range and conjure a 10ft by 10ft fog of intense rot which contacts that space and stays in place for 2 rounds (12 seconds). Every creature that begins their turn within the mist, or moves into one of its spaces, takes 1d6 toxic build up. Charging this spell increases its range by 5 feet, and increases the toxic build up to 1d8.  '
   },
   { 
      Name: 'Wall of Bodies (Death Hex)',
      AP: 4,
      FP: 4,
      Cost: 1,
      Range: '40 foot range',
      Duration: '10 round duration.',
      Damage: '14 Int and 14 Fai requirements.',
      Description: 'Pulse out a dull white ghostflame which latches onto any and all (mostly intact) corpses in range. You may then move each corpse into another unoccupied space within 10 feet of itself, before its flesh writhes with the roots of death. The effected corpses then prevent all grounded movement into or through the spaces they occupy for the duration of this spell. Charging this spell empowers you for its duration.',
      Damage: 'This empowerment allows you to once again move any effected corpses within range, 5 feet to another unoccupied space, once per round on each of your turns while the spell is active. '
   },
   { 
      Name: 'Dead Again (Death Hex)',
      AP: 3,
      FP: 3,
      Cost: 1,
      Range: '5 foot range.',
      Damage: '2d10 dark damage',
      Requirements: '14 Int and 16 Fai requirements.',
      Description: 'Cast a dark ghostflame upon a corpse in range, causing them to combust violently after a short time. Two rounds (12 seconds) after this spell is cast on a corpse, on the turn that this spell was cast, the corpse explodes with ghostflame dealing dark damage to all spaces within 10 feet of the corpse before turning it to ash. The damage you cause from creating simultaneous explosions with this spell does not stack. Charging this spell allows you to cast it on two to five corpses at once, all in a pile which can fit into a five foot grid space. The pile of corpses then explode together after two rounds dealing 2d10 dark damage',
      Requirements: 'plus an additional 1d10 per corpse (as well as damage from scaling as usual). '
   },
   { 
      Name: 'Temporal Kinesis (Time Magic)',
      AP: 8,
      FP: 10,
      Cost: 2,
      Range: 'Self cast',
      Duration: '5 round duration.',
      Damage: '22 Int and 22 Fai requirements.',
      Description: 'Cast upon yourself to allow you to manipulate time and the path of causality. For the duration of the spell, once per round at any time, you may will interactions with objects/spells/terrain backwards in time that may or may not have happened in the past. For example, say a monster spits acid all over an ally of yours, you may will it that the acid instead came from a broken flask in your pocket, and that the acid is pulled back in time into the flask which is no longer broken. As a result the acid was never spit from the monster and you have always had a flask of its acid in your pocket. Or as another example, say a projectile spell was cast at you, but instead you willed it that the spell was cast from you and that it is pulled back in time into your casting implement. As a result the spell was never cast at you and you have always known how to cast the spell yourself. This spell cannot be charged. '
   },
]