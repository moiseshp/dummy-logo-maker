import React from 'react'
import { Toolbar } from '@material-ui/core'
import Navbar from '../../components/Navbar'
import ColorSetting from '../../components/ColorSetting'
import LogoSection from './LogoSection'
import Footer from '../../components/Footer'
import { useStyles } from './useStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <Toolbar />
        <LogoSection />
      </main>
      <Footer />
      <ColorSetting />
    </div>
  )
}

export default Home