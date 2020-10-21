import React from 'react'
import { Icon, IconButton } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { LOGOTYPE_STORE } from '../../store/types/logotype'

const LogotypeStyle = () => {
  const { state: logotype, dispatch }: any = React.useContext(LogotypeContext)
  const isBold = logotype.fontWeight === 'bold'
  const handleClick = () => {
    dispatch({
      type: LOGOTYPE_STORE,
      payload: {
        field: 'fontWeight',
        value: isBold ? 'normal' : 'bold'
      }
    })
  }
  return (
    <IconButton
      onClick={handleClick}
      color={isBold ? 'primary' : 'default'}
    >
      <Icon>format_bold</Icon>
    </IconButton>
  )
}

export default LogotypeStyle
