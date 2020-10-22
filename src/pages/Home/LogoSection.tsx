import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Heading from '../../components/Heading'
import Logotype from '../../components/Logotype'

const LogoSection = () => {
  return (
    <Box py={5}>
      <Heading text={process.env.REACT_APP_NAME} />
      <Box mb={4}>
        <Typography variant="body1">
          Create your own logo or use the one that is ready!
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item md={12} lg={6}>
          <Logotype />
        </Grid>
        <Grid item md={12} lg={6}>
          <Logotype negative />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LogoSection
