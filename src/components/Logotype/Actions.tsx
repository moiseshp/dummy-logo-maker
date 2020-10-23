import React from 'react'
import { Button, Icon } from '@material-ui/core'
import domtoimage from 'dom-to-image'

type Props = {
  myRef: any
  backgroundColor: string
}
const Actions:React.FC<Props> = ({ myRef, backgroundColor }) => {
  const handleClick = () => {
    domtoimage.toJpeg(myRef.current, { quality: 1, bgcolor: backgroundColor })
    .then(function (dataUrl: string) {
        var link = document.createElement('a');
        link.download = 'amy-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    })

    // domtoimage.toPng(myRef.current)
    //   .then(function (dataUrl: string) {
    //     var link = document.createElement('a');
    //     link.download = 'my-image-name.png';
    //     link.href = dataUrl;
    //     link.click()
    //   })
    //   .catch(function (error: string) {
    //       console.error('oops, something went wrong!', error);
    //   });
  }

  return (
    <Button 
      endIcon={
        <Icon>vertical_align_bottom</Icon>
      }
      onClick={handleClick}
    >
      JPG
    </Button>
  )
}

export default Actions
