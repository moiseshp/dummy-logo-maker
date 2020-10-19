import React from 'react'
import Navbar from '../../components/Navbar'
import ColorSetting from '../../components/ColorSetting'
import LogoSection from './LogoSection'
import Navigation from '../../components/Navigation'
import { useStyles } from './useStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <LogoSection />
      </main>
      <footer
        style={{
          position: 'absolute',
          bottom: 30,
          right: 530
        }}
      >
        <Navigation />
      </footer>
      <ColorSetting />
    </div>
  )
}

export default Home
