import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: ({ sidebar }): any => ({
      width: sidebar.show ? sidebar.width : 0,
      flexShrink: 0,
    }),
    drawerPaper: ({ sidebar }: any) => ({
      width: sidebar.show ? sidebar.width : 0
    }),
    box: {
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: theme.palette.grey[200],
      height: '100%',
      overflow: 'auto',
      scrollbarColor: `${theme.palette.grey[400]} ${theme.palette.grey[100]}`,
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)',
        borderRadius: 10,
        backgroundColor: theme.palette.grey[100],
      },
      '&::-webkit-scrollbar': {
        width: 6,
        height: 6,
        backgroundColor: theme.palette.grey[400]
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 10,
        boxShadow: 'inset 0 0 6px rgba(0,0,0,.1)',
        backgroundColor: theme.palette.grey[400],
      }
    },
    active: {
      fontWeight: theme.typography.fontWeightBold,
      '&.Mui-disabled': {
        color: theme.palette.common.black
      }
    }
  })
)