import React from 'react'
import { AppBar, Divider, Toolbar } from '@material-ui/core'
import { SidebarContext } from '../../store/contexts/sidebar'
import Logotype from './Logotype'
import LogotypeReset from './LogotypeReset'
import LogotypeInput from './LogotypeInput'
import LogotypeStyle from './LogotypeStyle'
import LogotypeWeight from './LogotypeWeight'
import LogotypeColor from './LogotypeColor'
import SidebarButton from './SidebarButton'
import { useStyles } from './useStyles'

const Navbar = () => {
  const { state: sidebar }: any = React.useContext(SidebarContext)
  const classes = useStyles({ sidebar })
  const CustomDivider = () => (
    <Divider orientation="vertical" flexItem className={classes.dividerSmall} />
  ) 
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      className={classes.root}
    >
      <Toolbar>

        <Logotype />

        <Divider orientation="vertical" flexItem className={classes.dividerLarge} />

        <div style={{ flexGrow: 1 }}>
          <LogotypeReset />
        </div>

        <CustomDivider />

        <LogotypeInput />
      
        <CustomDivider />
  
        <LogotypeWeight />

        <LogotypeStyle />

        <CustomDivider />

        <LogotypeColor />

        <CustomDivider />
        
        <SidebarButton />
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
