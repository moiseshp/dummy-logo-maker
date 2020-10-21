import React from 'react'
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'
import Navigation from '../../components/Navigation'
import { useStyles } from './useStyles'

const Footer = () => {
  const classes = useStyles()
  const date = new Date()
  return (
    <AppBar className={classes.root} color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="caption" noWrap style={{ flexGrow: 1 }}>
          &copy; {date.getFullYear()} {process.env.REACT_APP_NAME} is powered by 
          &nbsp;
          <Link
            href={process.env.REACT_APP_GITHUB}
            target="_blank"
          >
            <strong>{process.env.REACT_APP_SIGNATURE}</strong> 
          </Link>
        </Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  )
}

export default Footer
