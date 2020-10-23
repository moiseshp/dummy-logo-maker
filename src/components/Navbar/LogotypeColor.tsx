import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ColorPicker } from 'material-ui-color'
import { LogotypeContext } from '../../store/contexts/logotype'
import { LOGOTYPE_STORE } from '../../store/types/logotype'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiButtonBase-root': {
        boxShadow: 'none !important'
      }
    }
  })
)

const LogotypeColor = () => {
  const classes = useStyles()
  const { state: logotype, dispatch }: any = React.useContext(LogotypeContext)
  const handleChange = (color: any) => {
    dispatch({
      type: LOGOTYPE_STORE,
      payload: {
        field: 'color',
        value: `#${color.hex}`
      }
    })
  }
  return (
    <div className={classes.root}>
      <ColorPicker
        value={logotype.color}
        hideTextfield
        disableAlpha
        deferred
        onChange={handleChange}
      />
    </div>
  )
}

export default LogotypeColor
