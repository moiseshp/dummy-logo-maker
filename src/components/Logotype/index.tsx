import React from 'react'
import { Box, Icon, Card, Typography } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import ButtonList from './ButtonList'
import { useStyles } from './useStyles'

type Props = {
  negative?: boolean
}

const Logotype:React.FC<Props> = ({ negative = false }) => {
  const { state: logotype }: any = React.useContext(LogotypeContext)
  const backgroundColor = negative ? logotype.color : '#FFF'
  const color = negative ? '#FFF' : logotype.color
  const htmlDivElementRef = React.useRef() as React.MutableRefObject<HTMLDivElement>
  const classes = useStyles({ layout: logotype.layout })

  return (
    <Box>
      <Card
        variant="outlined" 
        elevation={0} 
        className={classes.card} 
        style={{ backgroundColor, color }}
      >
        <div className={classes.box} ref={htmlDivElementRef}>
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
        </div>
      </Card>

      <Box component="footer" mt={3}>
        <ButtonList 
          htmlDivElementRef={htmlDivElementRef}
          backgroundColor={backgroundColor} 
        />
      </Box>
    </Box>
  )
}

export default Logotype
