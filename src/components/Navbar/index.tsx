import React from 'react'
import { 
  AppBar,
  Divider, 
  Icon, 
  IconButton, 
  Toolbar
} from '@material-ui/core'
import Logotype from './Logotype'
import LogotypeReset from './LogotypeReset'
import LogotypeInput from './LogotypeInput'
import LogotypeStyle from './LogotypeStyle'
import LogotypeWeight from './LogotypeWeight'
import { useStyles } from './useStyles'

const Navbar = () => {
  const classes = useStyles()

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

        <IconButton>
          <Icon>tune</Icon>
        </IconButton>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
