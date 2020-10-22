import React from 'react'
import { Button, Box, Icon, Card, Typography } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { useStyles } from './useStyles'

import domtoimage from 'dom-to-image'

type Props = {
  negative?: boolean
}

const Logotype:React.FC<Props> = ({ negative = false }) => {
  const { state: logotype }: any = React.useContext(LogotypeContext)
  const classes = useStyles({ layout: logotype.layout })
  const backgroundColor = negative ? logotype.color : '#FFF'
  const color = negative ? '#FFF' : logotype.color
  // const myRef = React.useRef<HTMLDivElement|null>(null)
  const myRef = React.useRef() as React.MutableRefObject<HTMLDivElement>
  const [image, setImage] = React.useState('')

  const handleClick = () => {
    // const node = document.getElementById('my-node');
    // domtoimage.toJpeg(myRef.current, { quality: 0.95, bgcolor: '#FFFFFF' })
    // .then(function (dataUrl: string) {
    //     var link = document.createElement('a');
    //     link.download = 'my-image-name.jpeg';
    //     link.href = dataUrl;
    //     link.click();
    // })

    domtoimage.toPng(myRef.current)
      .then(function (dataUrl: string) {
        setImage(dataUrl)
        console.info(dataUrl) 
        var link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click()
  
      })
      .catch(function (error: string) {
          console.error('oops, something went wrong!', error);
      });
  }
  return (
    <Box>
      <img alt="Hello world" src={image} />
      <Card variant="outlined" elevation={0} className={classes.card} style={{ backgroundColor, color }}>
        <Box display={logotype.layout === 'LIV' ? 'initial' : 'flex'} alignItems="center" justifyContent="center">
          <div ref={myRef}>
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
          onClick={handleClick}
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
