import React from 'react'
import { Box, Card, Drawer, List, ListItem, ListItemText, Toolbar, ListItemSecondaryAction, IconButton  } from '@material-ui/core'
import { SidebarContext } from '../../store/contexts/sidebar'
import { useStyles } from './useStyles'

const Sidebar = () => {
  const { state: sidebar }: any = React.useContext(SidebarContext)
  const classes = useStyles({ sidebar })
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <Toolbar>
        Toolbar
      </Toolbar>
      <Box className={classes.box} padding={3}>
        <Card className={classes.cardWrapper} variant="outlined" style={{ background: '#000'}}>
          {/* <Card className={classes.card} elevation={0}> */}
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemText primary="#000000" color="primary" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    {/* <InvertColorsIcon color="primary" /> */}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          {/* </Card> */}
        </Card>
      </Box>
      {/* <Divider />
      <Box className={classes.box} padding={3}>
        <Card className={classes.cardWrapper} variant="outlined" style={{ background: '#fff'}}>
          <Card className={classes.card} elevation={0}>
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemText primary="Background color" secondary="#ffffff" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <FormatColorFill />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Card>
        </Card>
      </Box> */}
    </Drawer>
  )
}

export default Sidebar
