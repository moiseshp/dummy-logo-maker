import React from 'react'
import { Icon, IconButton } from '@material-ui/core'
import { SidebarContext } from '../../store/contexts/sidebar'
import { SIDEBAR_SHOW } from '../../store/types/sidebar'

const SidebarButton = () => {
  const { dispatch }: any = React.useContext(SidebarContext)
  return (
    <IconButton
      onClick={() => dispatch({ type: SIDEBAR_SHOW })}
    >
      <Icon>tune</Icon>
    </IconButton>
  )
}

export default SidebarButton
