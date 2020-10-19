import React from 'react'
import { AppBar, Button, Box, Grid, Divider, InputAdornment, Icon, InputBase, IconButton, TextField, Toolbar, Typography } from '@material-ui/core'
import { 
  AccessAlarm as AccessAlarmIcon, 
  Create as CreateIcon,
  Tune as TuneIcon,
  Gesture as GestureIcon,
  AssistantOutlined as AssistantOutlinedIcon,
  TextFields as TextFieldsIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  Spellcheck as SpellcheckIcon
} from '@material-ui/icons'

import { useStyles } from './useStyles'

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="inherit" elevation={0} className={classes.root}>
      <Toolbar>
        {/* <AssistantOutlinedIcon /> */}
        <Icon>add_a_photo</Icon>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Typography variant="h6" noWrap>
          <strong>DUMMY LOGO</strong>
        </Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        |
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
        
        {/* <Typography variant="body2" noWrap>
          Type your logo name
        </Typography> */}
        <div className={classes.search}>
              <TextField size="small" variant="outlined" 
                defaultValue="Logotype"
                className={classes.type}
              InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <Icon>spellcheck</Icon>
                {/* <SpellcheckIcon fontSize="small" /> */}
            </InputAdornment>
          ),
          // endAdornment: (
          //   <InputAdornment position="end">
          //     <Typography variant="caption">
          //     <CreateIcon fontSize="small" />
          //     </Typography>
          //   </InputAdornment>
          // ),
        }}/>
          {/* <div className={classes.searchIcon}>
            <CreateIcon fontSize="small" />
          </div>
            <InputBase
              placeholder="Type something"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'type' }}
            /> */}
        </div>
        <div style={{ flexGrow: 1 }}>
          <IconButton aria-label="delete">
            <FormatBoldIcon />
          </IconButton>

          <IconButton aria-label="delete">
            <FormatItalicIcon />
          </IconButton>
        </div>

        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
        <Button
          className={classes.button}
          startIcon={<GestureIcon />}
          endIcon
        >
          Reset change
        </Button>
        {/* <IconButton color="inherit">
          <Icon>start</Icon>
        </IconButton> */}
        <Divider orientation="vertical" flexItem />
      <Box px={3} style={{
        width: 500,
        backgroundColor: '#F0F',
        marginRight: -25
      }}>

        Hello Setting
      </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
