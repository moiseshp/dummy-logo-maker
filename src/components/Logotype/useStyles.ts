import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    }, 
    card: ({ layout, negative }: any) => ({
      textAlign: 'center',
      paddingTop: ['ISO', 'LIV'].includes(layout) ? theme.spacing(9) : theme.spacing(14),
      paddingBottom: ['ISO', 'LIV'].includes(layout) ? theme.spacing(9) : theme.spacing(14) 
    }),
    isotype: ({ layout }: any) => ({
      fontSize: ['ISO', 'LIV'].includes(layout) ? 160 : 90,
      display: 'block',
      marginBottom: layout === 'LIV' ? theme.spacing(1) : 0,
      marginRight: layout === 'LIV' ? 'auto' : theme.spacing(3),
      marginLeft: layout === 'LIV' ? 'auto' : 0,
    })
  })
)