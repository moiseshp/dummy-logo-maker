import React from 'react'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

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
    <Breadcrumbs aria-label="breadcrumb" separator="|">
      {items.map((item) => (
        <Link 
          key={item}
          component="button"
          onClick={handleClick}
          color={item !== active ? 'inherit' : 'primary'}
          style={{ fontWeight: item === active ? 'bold' : 'normal'}}
          disabled={item === active}
        >
          {item}
        </Link>
      ))}
    </Breadcrumbs>  
  )
}

export default Navigation
