import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: ({ sidebar }): any => ({
      width: sidebar.show ? sidebar.width : 0,
      flexShrink: 0,
    }),
    drawerPaper: ({ sidebar }: any) => ({
      width: sidebar.show ? sidebar.width : 0,
    }),
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