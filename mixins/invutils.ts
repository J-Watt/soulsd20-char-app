export function itemCategoryDescription(tabName: string) {
  switch (tabName) {
    case 'all':
      return 'items'
    case 'tools':
      return 'tools'
    case 'misc':
      return 'miscellaneous items'
    case 'weapon':
      return 'weapons'
    case 'armor':
      return 'armor'
    case 'ring':
      return 'rings'
    case 'artifact':
      return 'artifacts'
  }

  return ''
}