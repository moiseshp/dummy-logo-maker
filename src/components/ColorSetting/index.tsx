import React from 'react'
import { Box, Card, CardHeader, Drawer, List, ListItem, ListItemText, Toolbar, ListItemSecondaryAction, IconButton, Divider  } from '@material-ui/core'
import { ThreeDRotation } from '@material-ui/icons'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import { FormatColorFill } from '@material-ui/icons'
import { useStyles } from './useStyles'

const Sidebar = () => {
  const classes = useStyles()
  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <Toolbar >
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
                      <InvertColorsIcon color="primary" />
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
