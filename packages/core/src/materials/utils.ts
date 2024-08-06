export const parseJsStrToLte = (code: string): string => {
  return code.substring(7)

}

export const isExpression = (str: string): boolean => {
  if (str.startsWith('freejs:')) {
    return true
  }
  return false
}
