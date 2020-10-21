import React from 'react'
import { InputBase } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { LOGOTYPE_STORE } from '../../store/types/logotype'
const LogotypeInput = () => {
  const { dispatch }: any = React.useContext(LogotypeContext)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LOGOTYPE_STORE,
      payload: {
        field: 'name',
        value: e.target.value
      }
    })
  }
  return (
    <InputBase
      placeholder="Type something..."
      onChange={handleChange}
    />
  )
}

export default LogotypeInput
