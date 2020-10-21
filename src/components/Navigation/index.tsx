import React from 'react'
import { Box, Button, Divider } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { LOGOTYPE_STORE } from '../../store/types/logotype'
import { useStyles } from './useStyles'
const items = [
  { id: 'LOG', text: 'Logo' },
  { id: 'LIH', text: 'Logo + Isotype - H' },
  { id: 'LIV', text: 'Logo + Isotype - V' },
  { id: 'ISO', text: 'Isotype' }
]

const Navigation = () => {
  const classes = useStyles()
  const { state: logotype, dispatch }: any = React.useContext(LogotypeContext)
  const handleClick = (id: string) => {
    dispatch({
      type: LOGOTYPE_STORE,
      payload: {
        field: 'layout',
        value: id
      }
    })
  }
  return (
    <React.Fragment>
      <Box mr={2}>
        Select to Layout : 
      </Box>
      {items.map((item, key) => (
        <React.Fragment key={item.id}>
          <Button 
            onClick={() => handleClick(item.id)}
            disabled={item.id === logotype.layout}
            className={item.id === logotype.layout ? classes.active : ''}
            size="small"
          >
            {item.text}
          </Button>
          {items.length !== (key + 1) && (
            <Divider 
              orientation="vertical" 
              flexItem 
              className={classes.divider}
            />
          )}
        </React.Fragment>
      ))}
    </React.Fragment>  
  )
}

export default Navigation
