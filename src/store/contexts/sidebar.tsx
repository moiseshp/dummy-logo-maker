import React from 'react'
import { ISidebar } from '../types/sidebar'
import { SidebarAction, reducer, initialState } from '../reducers/sidebar'

export interface ISidebarContext {
  state: ISidebar
  dispatch: React.Dispatch<SidebarAction>
}

export const SidebarContext = React.createContext<ISidebarContext|undefined>(undefined)

type Props = {
  children: React.ReactNode
}

export const SidebarProvider = ({ children }: Props) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)
  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  )
}