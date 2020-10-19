import { fade, createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 500

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginRight: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: theme.palette.grey[200],
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    type: {
      fontWeight: 'bold'
    },
    inputInput: {
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create('width'),
      fontWeight: theme.typography.fontWeightBold,
      borderBottom: '1px solid #000'
      // [theme.breakpoints.up('md')]: {
      //   width: '20ch',
      // },
    }, 
    button: {
      margin: theme.spacing(1),
    },
  })
)