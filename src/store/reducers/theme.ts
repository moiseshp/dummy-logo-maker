import { 
  ITheme,
  THEME_STORE_RESET,
  THEME_STORE_DARK,
  THEME_STORE_COLOR,
  THEME_STORE_FONT 
} from '../types/theme'

export interface ThemeAction {
  type: string
  payload?: any
}

export const initialState: ITheme = {
  color: '#FFFF00',
  dark: false,
  fontFamily: 'Arial'
}

export const reducer = (state: ITheme, action: ThemeAction) => {
  switch (action.type) {
    case THEME_STORE_RESET: {
      return initialState
    }
    case THEME_STORE_DARK: {
      return {
        ...state,
        dark: !state.dark
      }
    }
    case THEME_STORE_COLOR: {
      return {
        ...state,
        color: action.payload
      }
    }
    case THEME_STORE_FONT: {
      return {
        ...state,
        fontFamily: action.payload
      }
    }
    default:
      return state
  }
}