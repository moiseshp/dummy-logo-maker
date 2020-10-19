import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightBold: 800
  },
  palette: {
    // type: 'dark',
    background: {
      default: '#ffffff'
    },
    primary: {
      main: '#000',
      // light: '#757ce8',
      // dark: '#002884',
      // contrastText: '#fff'
    },
    secondary: {
      main: '#ffba08',
    },
  },
})

export default theme