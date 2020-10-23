const theme = {
  typography: {
    fontFamily: [
      'Open Sans',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightRegular: 300,
    fontWeightBold: 600,
    button: {
      // fontWeight: 800,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  }
}

export default theme