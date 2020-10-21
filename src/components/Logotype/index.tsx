import React from 'react'
import { Button, Box, Icon, Card, Typography } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { useStyles } from './useStyles'

type Props = {
  negative?: boolean
}

const Logotype:React.FC<Props> = ({ negative = false }) => {
  const { state: logotype }: any = React.useContext(LogotypeContext)
  const classes = useStyles({ layout: logotype.layout })
  const backgroundColor = negative ? logotype.color : '#FFF'
  const color = negative ? '#FFF' : logotype.color
  return (
    <Box>
      <Card variant="outlined" elevation={0} className={classes.card} style={{ backgroundColor, color }}>
        <Box display={logotype.layout === 'LIV' ? 'initial' : 'flex'} alignItems="center" justifyContent="center">
          {logotype.layout !== 'LOG' && (
            <Icon className={classes.isotype}>
              {logotype.isotype}
            </Icon>
          )}
          {logotype.layout !== 'ISO' && (
            <Typography 
              variant="h2" 
              component="div" 
              style={{ 
                fontFamily: logotype.fontFamily,
                fontWeight: logotype.fontWeight,
                fontStyle: logotype.fontStyle
              }}>
              {logotype.name}
            </Typography>
          )}
        </Box>
      </Card>
       {/* TODO:  outside other component */}
      <Box mt={3}>
        <Button 
          size="large" 
          variant="outlined" 
          color="primary"
          className={classes.button}
          endIcon={
            <Icon style={{ fontSize: 14 }}>vertical_align_bottom</Icon>
          }
        >
          JPG
        </Button>
        &nbsp;&nbsp;
        <Button size="large">
          PNG
        </Button>
      </Box>
    </Box>
  )
}

export default Logotype
