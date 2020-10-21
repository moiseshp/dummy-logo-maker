import React from 'react'
import { Icon, IconButton } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { LOGOTYPE_STORE } from '../../store/types/logotype'

const LogotypeStyle = () => {
  const { state: logotype, dispatch }: any = React.useContext(LogotypeContext)
  const isItalic = logotype.fontStyle === 'italic'
  const handleClick = () => {
    dispatch({
      type: LOGOTYPE_STORE,
      payload: {
        field: 'fontStyle',
        value: isItalic ? 'normal' : 'italic'
      }
    })
  }
  return (
    <IconButton
      onClick={handleClick}
      color={isItalic ? 'primary' : 'default'}
    >
      <Icon>format_italic</Icon>
    </IconButton>
  )
}

export default LogotypeStyle
