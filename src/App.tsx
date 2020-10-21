import React from 'react'
// import { ThemeContext } from './store/contexts/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './pages/Home'
import theme from './theme'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App