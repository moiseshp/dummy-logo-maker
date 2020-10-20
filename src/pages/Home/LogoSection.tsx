import React from 'react'
import { Button, Box, Card, CardContent, CardActions, Grid, Typography, Divider } from '@material-ui/core'
import Heading from '../../components/Heading'
import Logotype from '../../components/Logotype'

const LogoSection = () => {
  return (
    <Box pt={6}>
      <Heading text="Dummy logo design" />
      <Typography variant="body2">
        Nihil aliquam rerum omnis sed impedit magni deleniti veritatis culpa id. Tenetur, dolore laboriosam!
      </Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Logotype
            text="Logotype"
            heading="Light version"
            isotype="admin_panel_settings"
          />
        </Grid>
        <Grid item sm={6}>
          <Logotype 
            text="Logotype"
            heading="Negative version"
            isotype="admin_panel_settings"
            negative
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LogoSection
