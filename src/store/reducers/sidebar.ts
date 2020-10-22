import { 
  ISidebar,
  SIDEBAR_SHOW
} from '../types/sidebar'

export interface SidebarAction {
  type: string
}

export const initialState: ISidebar = {
  show: true,
  width: 300
}

export const reducer = (state: ISidebar, action: SidebarAction) => {
  switch (action.type) {
    case SIDEBAR_SHOW: {
      return {
        ...state,
        show: !state.show
      }
    }
    default:
      return state
  }
}