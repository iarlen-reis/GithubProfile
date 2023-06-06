export const formateName = (name: string) => {
  const nameSplit = name.split(' ')

  if (nameSplit.length > 1) return `${nameSplit[0]} ${nameSplit[1]}`

  return name
}
