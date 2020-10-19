import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 500

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    box: {
      height: '100%',
    },
    cardWrapper: {
      height: '100%',
      width: '100%',
      display: 'inline-grid',
      alignItems: 'flex-end',
      padding: theme.spacing(2)
    },
    card: {
      borderRadius: 0,
      padding: theme.spacing(2, 4)
    }
  })
)