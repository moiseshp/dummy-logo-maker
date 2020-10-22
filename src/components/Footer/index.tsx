import React from 'react'
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'
import { SidebarContext } from '../../store/contexts/sidebar'
import Navigation from '../../components/Navigation'
import { useStyles } from './useStyles'

const Footer = () => {
  const { state: sidebar }: any = React.useContext(SidebarContext)
  const classes = useStyles({ sidebar })
  const date = new Date()
  return (
    <AppBar className={classes.root} color="inherit" elevation={0}>
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
