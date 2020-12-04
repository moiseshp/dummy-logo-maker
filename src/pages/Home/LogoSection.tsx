import React from 'react'
import { Box, Grid, Link, Typography } from '@material-ui/core'
import Heading from '../../components/Heading'
import Logotype from '../../components/Logotype'

const LogoSection = () => {
  return (
    <Box py={5}>
      <Heading text="DUMMY LOGO MAKER" />
      <Box mb={4}>
        <Typography variant="body2">
          Easy, fast and even fun! Created by 
          &nbsp;
          <Link
            href={process.env.REACT_APP_TWITTER}
            target="_blank"
            color="inherit"
          >
            <strong>{process.env.REACT_APP_CREATED_BY}</strong>
          </Link>
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
