import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 500

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
      top: 'initial',
      bottom: 0
    }
  })
)