export const THEME_STORE_RESET = 'THEME_STORE_RESET'
export const THEME_STORE_DARK = 'THEME_STORE_DARK'
export const THEME_STORE_COLOR = 'THEME_STORE_COLOR'
export const THEME_STORE_FONT = 'THEME_STORE_FONT'

export interface ITheme {
  color?: string
  dark?: boolean
  fontFamily?: string
}