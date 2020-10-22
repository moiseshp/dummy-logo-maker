import React from 'react'
import { Box, Button, Grid, Icon as MatIcon } from '@material-ui/core'
import { LogotypeContext } from '../../../../store/contexts/logotype'
import { LOGOTYPE_STORE } from '../../../../store/types/logotype'
import { icons } from '../../../../utlis/icons'
const Icon = () => {
  const { state: logotype, dispatch }: any = React.useContext(LogotypeContext)
  const handleClick = (icon: string) => {
    dispatch({
      type: LOGOTYPE_STORE,
      payload: {
        field: 'isotype',
        value: icon
      }
    })
  }
  return (
    <Box p={1}>
      <Grid container spacing={1}>
        {icons.map(name => 
          <Grid key={name} item sm={4}>
            <Button
              fullWidth
              variant={name === logotype.isotype ? 'contained' : 'outlined'}
              disableElevation
              style={{ paddingTop: 20, paddingBottom: 20 }}
              // color="primary"
              onClick={() => handleClick(name)}
            >
              <MatIcon fontSize="large">{name}</MatIcon>
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Icon
