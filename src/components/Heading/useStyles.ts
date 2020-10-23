import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      marginBottom: theme.spacing(4),
    },
    typography: {
      position: 'relative',
      display: 'inline-block',
      '&::before': {
        content: '""',
        position: 'absolute',
        backgroundColor: theme.palette.common.black,
        bottom: -15,
        left: 0,
        width: '60%',
        height: 1,
      }
    }
  })
)