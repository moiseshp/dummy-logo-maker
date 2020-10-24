import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: ({ layout }: any) => ({
      textAlign: 'center',
      paddingTop: ['ISO', 'LIV'].includes(layout) ? theme.spacing(9) : theme.spacing(14),
      paddingBottom: ['ISO', 'LIV'].includes(layout) ? theme.spacing(9) : theme.spacing(14) 
    }),
    box: ({ layout }: any) => ({
      display: layout === 'LIV' ? 'inline-grid' : 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }),
    isotype: ({ layout }: any) => ({
      fontSize: ['ISO', 'LIV'].includes(layout) ? 160 : 96,
      display: 'block',
      marginBottom: layout === 'LIV' ? theme.spacing(1) : 0,
      marginRight: ['ISO', 'LIV'].includes(layout) ? 'auto' : theme.spacing(4),
      marginLeft: ['ISO', 'LIV'].includes(layout) ? 'auto' : 0,
    }),
    button: {
      paddingLeft: 20,
      paddingRight: 20,
      '& .MuiIcon-root': {
        marginRight: 15
      }
    }
  })
)