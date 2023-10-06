import { usePlayerStore } from "~~/store/player"

export function skillModBonusFromStats(identifier: string): number {
  const playerStore = usePlayerStore()
  if (identifier === 'Athletics') return statMod(playerStore.Stats.Strength) + statMod(playerStore.Stats.Endurance)
  else if (identifier === 'Acrobatics') return statMod(playerStore.Stats.Dexterity) + statMod(playerStore.Stats.Endurance)
  else if (identifier === 'Perception') return statMod(playerStore.Stats.Intelligence) + statMod(playerStore.Stats.Endurance)
  else if (identifier === 'FireKeeping') return statMod(playerStore.Stats.Faith) + statMod(playerStore.Stats.Endurance)
  else if (identifier === 'Sanity') return statMod(playerStore.Stats.Strength) + statMod(playerStore.Stats.Attunement)
  else if (identifier === 'Stealth') return statMod(playerStore.Stats.Dexterity) + statMod(playerStore.Stats.Attunement)
  else if (identifier === 'Precision') return statMod(playerStore.Stats.Intelligence) + statMod(playerStore.Stats.Attunement)
  else if (identifier === 'Diplomacy') return statMod(playerStore.Stats.Faith) + statMod(playerStore.Stats.Attunement)
  return 0
}

export function statMod(statAmount: number): number {
  const val = Math.floor(Math.abs(10 - statAmount) / 2)
  return statAmount < 10 ? -val : val
}