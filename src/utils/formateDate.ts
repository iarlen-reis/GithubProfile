export const formateData = (data: string) => {
  const formated = new Date(data)

  const day = formated.getDate()
  const mouth = formated.toLocaleString('default', { month: 'short' })
  const year = formated.getFullYear()

  return `${day} ${mouth} ${year}`
}
