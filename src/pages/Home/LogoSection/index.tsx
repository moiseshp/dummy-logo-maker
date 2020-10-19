import React from 'react'
import { Button, Box, Card, CardContent, CardActions, Grid, Typography, Divider } from '@material-ui/core'
import Heading from '../../../components/Heading'
import Logotype from '../../../components/Logotype'

const LogoSection = () => {
  return (
    <Box>
      <Heading text="Only Logo" />
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Logotype
            text="Logotype"
            heading="Heading 1"
            isotype="admin_panel_settings"
          />
        </Grid>
        <Grid item sm={6}>
          <Logotype 
            text="Logotype"
            heading="Heading 2"
            isotype="admin_panel_settings"
            negative
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LogoSection
