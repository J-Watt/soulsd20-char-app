import { usePlayerStore } from "~~/store/player"

export function skillModBonusFromStats(identifier: string): number {
  const playerStore = usePlayerStore()
  if (identifier === 'Athletics') return statMod(playerStore.CharacterStats.Stats.Strength) + statMod(playerStore.CharacterStats.Stats.Endurance)
  else if (identifier === 'Acrobatics') return statMod(playerStore.CharacterStats.Stats.Dexterity) + statMod(playerStore.CharacterStats.Stats.Endurance)
  else if (identifier === 'Perception') return statMod(playerStore.CharacterStats.Stats.Intelligence) + statMod(playerStore.CharacterStats.Stats.Endurance)
  else if (identifier === 'FireKeeping') return statMod(playerStore.CharacterStats.Stats.Faith) + statMod(playerStore.CharacterStats.Stats.Endurance)
  else if (identifier === 'Sanity') return statMod(playerStore.CharacterStats.Stats.Strength) + statMod(playerStore.CharacterStats.Stats.Attunement)
  else if (identifier === 'Stealth') return statMod(playerStore.CharacterStats.Stats.Dexterity) + statMod(playerStore.CharacterStats.Stats.Attunement)
  else if (identifier === 'Precision') return statMod(playerStore.CharacterStats.Stats.Intelligence) + statMod(playerStore.CharacterStats.Stats.Attunement)
  else if (identifier === 'Diplomacy') return statMod(playerStore.CharacterStats.Stats.Faith) + statMod(playerStore.CharacterStats.Stats.Attunement)
  return 0
}

export function statMod(statAmount: number): number {
  const val = Math.floor(Math.abs(10 - statAmount) / 2)
  return statAmount < 10 ? -val : val
}