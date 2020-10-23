import React from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { LogotypeContext } from './store/contexts/logotype'
import Home from './pages/Home'
import theme from './theme'

const App = () => {
  const { state: logotype }: any = React.useContext(LogotypeContext)
  const muiTheme = createMuiTheme({
    ...theme,
    palette: {
      // type: 'dark',
      background: {
        default: '#ffffff'
      },
      primary: {
        main: logotype.color
      }
    },
  })
  
  return(
    <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App