import { fade, createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 500

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: theme.palette.grey[200],
    },
    dividerSmall: {
      margin: theme.spacing(2, 3)
    },
    dividerLarge: {
      margin: theme.spacing(2, 6)
    },
    typography: {
      color: theme.palette.grey[400]
    }
  })
)