import { 
  ILogotype,
  LOGOTYPE_STORE,
  LOGOTYPE_RESET
} from '../types/logotype'

export interface LogotypeAction {
  type: string
  payload?: any
}

export const initialState: ILogotype = {
  name: 'DUMMYLOGO',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontStyle: 'normal',
  color: '#0033FF',
  isotype: 'qr_code',
  layout: 'LIH'
}

export const reducer = (state: ILogotype, action: LogotypeAction) => {
  switch (action.type) {
    case LOGOTYPE_STORE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    case LOGOTYPE_RESET: {
      return initialState
    }
    default:
      return state
  }
}