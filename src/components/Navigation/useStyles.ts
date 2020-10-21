import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutText: {
      color: theme.palette.grey[500],
      textTransform: 'uppercase',
      marginRight: theme.spacing(3)
    },
    divider: {
      margin: theme.spacing(3, 2)
    },
    active: {
      fontWeight: theme.typography.fontWeightBold,
      '&.Mui-disabled': {
        color: theme.palette.primary.main
      }
    }
  })
)
