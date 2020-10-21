import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightRegular: 300,
    fontWeightBold: 600
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