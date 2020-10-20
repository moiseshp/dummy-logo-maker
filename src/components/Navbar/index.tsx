import React from 'react'
import { 
  AppBar, 
  Box, 
  Button, 
  Divider, 
  Icon, 
  IconButton, 
  InputBase, 
  Toolbar, 
  Typography
} from '@material-ui/core'
import { useStyles } from './useStyles'

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="inherit" elevation={0} className={classes.root}>
      <Toolbar>
        <Box display="flex" mr={2}>
          <Icon>fingerprint</Icon>
        </Box>        
        <Typography variant="h6" noWrap>
          <strong>FINGERPRINT</strong>
        </Typography>

        <Divider orientation="vertical" flexItem className={classes.dividerLarge} />

        <div style={{ flexGrow: 1 }}>
          <Button 
            variant="text" 
            size="small"
            startIcon={<Icon>replay</Icon>}
          >
            Reset all change
          </Button>
        </div>

        <Divider orientation="vertical" flexItem className={classes.dividerSmall} />

        <Typography variant="body1" className={classes.typography}>
          Type here : 
        </Typography> 
        <Box ml={2}>
          <InputBase
            defaultValue="Logotype"
            placeholder="e.g. Logotype"
          />
        </Box>
      
        <Divider orientation="vertical" flexItem className={classes.dividerSmall} />
  
        <IconButton>
          <Icon>format_bold</Icon>
        </IconButton>
        <IconButton>
          <Icon>format_italic</Icon>
        </IconButton>

        <Divider orientation="vertical" flexItem className={classes.dividerSmall} />

        <IconButton>
          <Icon>tune</Icon>
        </IconButton>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
