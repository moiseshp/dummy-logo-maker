import React from 'react'
import { ITheme } from '../types/theme'
import { ThemeAction, reducer, initialState } from '../reducers/theme'

export interface IThemeContext {
  state: ITheme
  dispatch: React.Dispatch<ThemeAction>
}

export const ThemeContext = React.createContext<IThemeContext|undefined>(undefined)

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}