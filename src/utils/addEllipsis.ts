export const addEllipsis = (text: string) => {
  if (text.length <= 70) return text

  return text.substring(0, 70) + '...'
}
