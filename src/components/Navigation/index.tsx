import React from 'react'
import { Button, Divider, Icon } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2)
    },
    divider: {
      margin: theme.spacing(3, 2)
    }
  })
)
const items = [
  'Only Logo',
  'Logo + Isotype - H',
  'Logo + Isotype - V',
  'Only Isotype'
]
const Navigation = () => {
  const classes = useStyles()
  const [active, setActive] = React.useState<string>('Only Logo') 
  return (
    <React.Fragment>
      <Icon className={classes.icon}>videogame_asset</Icon>
      {items.map((item, key) => (
        <React.Fragment>
          <Button 
            key={item}
            onClick={() => console.info(item)}
            disabled={item === active}
            size="small"
          >
            {item}
          </Button>
          {items.length !== key + 1 && (
            <Divider 
              key={item} 
              orientation="vertical" 
              flexItem className={classes.divider}
            />
          )}
        </React.Fragment>
      ))}
    </React.Fragment>  
  )
}

export default Navigation
