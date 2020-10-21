import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2)
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
