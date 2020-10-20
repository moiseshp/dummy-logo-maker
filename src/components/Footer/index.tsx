import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import Navigation from '../../components/Navigation'
import { useStyles } from './useStyles'

const Footer = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="body2" noWrap style={{ flexGrow: 1 }}>
          Footer &copy; 2020
        </Typography>

        <Navigation />
      </Toolbar>
    </AppBar>
  )
}

export default Footer
