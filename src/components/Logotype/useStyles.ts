import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      // marginBottom: theme.spacing(6),
    },
    card: ({ negative }: any) => ({
      textAlign: 'center',
      padding: theme.spacing(12, 0)
    
      // display: 'flex',
      // justifyItems: 'center',
      // alignItems: 'center'
    }),
    isotype: ({ vertical, text }: any) => ({
      fontSize: vertical || !text ? 120 : 85,
      display: 'block',
      marginBottom: vertical ? theme.spacing(2) : 0,
      marginRight: vertical ? 'auto' : theme.spacing(3),
      marginLeft: vertical ? 'auto' : 0,
    })
    // typography: {
    //   position: 'relative',
    //   display: 'inline-block',
    //   '&::before': {
    //     content: '""',
    //     position: 'absolute',
    //     backgroundColor: theme.palette.primary.main,
    //     bottom: -15,
    //     left: 0,
    //     width: '40%',
    //     height: 2,
    //   }
    // }
  })
)