import React from 'react'
import { Button, Link, Typography } from '@material-ui/core'

const Navigation = () => {
  const [active, setActive] = React.useState<string>('Only Logo') 
  const handleClick = () => {
    console.info('handleClick')
  }
  const items = [
    'Only Logo',
    'Logo + Isotype (H)',
    'Logo + Isotype (V)',
    'Only Isotype'
  ]
  return (
    <React.Fragment>
      {items.map((item) => (
        <Button 
          key={item}
          onClick={handleClick}
          color={item !== active ? 'inherit' : 'primary'}
          // style={{ fontWeight: item === active ? 'bold' : 'normal'}}
          disabled={item === active}
          size="small"
        >
          {item}
        </Button>
      ))}
    </React.Fragment>  
  )
}

export default Navigation
