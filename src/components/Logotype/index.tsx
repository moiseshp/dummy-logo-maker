import React from 'react'
import { Button, Box, Icon, Card, Typography } from '@material-ui/core'
import { useStyles } from './useStyles'

type Props = {
  text?: string
  heading?: string
  isotype?: string
  negative?: boolean
  vertical?: boolean
}

const Logotype:React.FC<Props> = ({ 
  text,
  heading,
  isotype = '',
  negative = false,
  vertical = false,
}) => {
  const classes = useStyles({ text, vertical, negative })
  // TODO: replace into global material ui: theme
  const backgroundColor = negative ? '#000' : '#FFF'
  const color = negative ? '#FFF' : '#000'
  return (
    <Box>
      {heading && (
        <Box mb={2}>
          <Typography>
            {heading}
          </Typography>
        </Box>
      )}
      <Card variant="outlined" elevation={0} className={classes.card} style={{ backgroundColor, color }}>
        <Box display={vertical ? 'initial' : 'flex'} alignItems="center" justifyContent="center">
          {isotype && (
            <Icon className={classes.isotype}>
              {isotype}
            </Icon>
          )}
          {text && (
            <Typography variant="h2" component="div">
              {text}
            </Typography>
          )}
        </Box>
      </Card>
      <Box mt={3}>
        <Button size="large" variant="outlined" color="primary">
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
