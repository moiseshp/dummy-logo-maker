import React from 'react'
import { ILogotype } from '../types/logotype'
import { LogotypeAction, reducer, initialState } from '../reducers/logotype'

export interface ILogotypeContext {
  state: ILogotype
  dispatch: React.Dispatch<LogotypeAction>
}

export const LogotypeContext = React.createContext<ILogotypeContext|undefined>(undefined)

type Props = {
  children: React.ReactNode
}

export const LogotypeProvider = ({ children }: Props) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)
  return (
    <LogotypeContext.Provider value={{ state, dispatch }}>
      {children}
    </LogotypeContext.Provider>
  )
}