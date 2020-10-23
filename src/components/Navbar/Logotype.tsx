import React from 'react'
import { Box, Icon, Typography } from '@material-ui/core'

const Logotype = () => {
  return (
    <React.Fragment>
      <Box display="flex" mr={2}>
        <Icon style={{ fontSize: 28 }}>qr_code</Icon>
      </Box>        
      <Typography 
        variant="h6" 
        noWrap
        style={{ fontFamily: 'Montserrat' }}
      >
        <strong>DUMMYLOGO</strong>
      </Typography>
    </React.Fragment>
  )
}

export default Logotype
