import React from 'react'
import { Box, Icon, Typography } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'

const Logotype = () => {
  const { state: logotype }: any = React.useContext(LogotypeContext)
  return (
    <React.Fragment>
      <Box display="flex" mr={2}>
        <Icon style={{ fontSize: 28 }}>{logotype.isotype}</Icon>
      </Box>        
      <Typography 
        variant="h6" 
        noWrap
        style={{ fontFamily: 'Montserrat' }}
      >
        <strong>LOGODESIGN</strong>
      </Typography>
    </React.Fragment>
  )
}

export default Logotype
