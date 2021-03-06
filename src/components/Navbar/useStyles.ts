import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ sidebar }: any) => ({
      width: sidebar.show ? `calc(100% - ${sidebar.width}px)` : '100%',
      marginRight: sidebar.show ? sidebar.width : 0,
      zIndex: theme.zIndex.drawer + 1,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: theme.palette.grey[200],
    }),
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