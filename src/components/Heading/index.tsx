import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './useStyles'

type Props = {
  text?: string
}

const Heading:React.FC<Props> = ({ text }) => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Typography variant="h5" className={classes.typography}>
        { text }
      </Typography>
    </Box>
  )
}

export default Heading
