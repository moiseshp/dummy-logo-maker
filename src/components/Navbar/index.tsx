import React from 'react'
import { AppBar, Divider, Toolbar } from '@material-ui/core'
import { SidebarContext } from '../../store/contexts/sidebar'
import Logotype from './Logotype'
import LogotypeReset from './LogotypeReset'
import LogotypeInput from './LogotypeInput'
import LogotypeStyle from './LogotypeStyle'
import LogotypeWeight from './LogotypeWeight'
import SidebarButton from './SidebarButton'
import { useStyles } from './useStyles'

const Navbar = () => {
  const { state: sidebar }: any = React.useContext(SidebarContext)
  const classes = useStyles({ sidebar })

  return (
    <AppBar position="fixed" color="inherit" elevation={0} className={classes.root}>
      <Toolbar>

        <Logotype />

        <Divider orientation="vertical" flexItem className={classes.dividerLarge} />

        <div style={{ flexGrow: 1 }}>
          <LogotypeReset />
        </div>

        <Divider orientation="vertical" flexItem className={classes.dividerSmall} />

        <LogotypeInput />
      
        <Divider orientation="vertical" flexItem className={classes.dividerSmall} />
  
        <LogotypeWeight />

        <LogotypeStyle />

        <Divider orientation="vertical" flexItem className={classes.dividerSmall} />

        <SidebarButton />
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
