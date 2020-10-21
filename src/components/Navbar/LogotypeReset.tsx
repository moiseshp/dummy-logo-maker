import React from 'react'
import { Button, Icon } from '@material-ui/core'
import { LogotypeContext } from '../../store/contexts/logotype'
import { LOGOTYPE_RESET } from '../../store/types/logotype'

const LogotypeReset = () => {
  const { dispatch }: any = React.useContext(LogotypeContext)
  return (
    <Button 
      variant="text" 
      size="small"
      startIcon={<Icon>replay</Icon>}
      onClick={() => dispatch({ type: LOGOTYPE_RESET })}
    >
      Reset all change
    </Button>
  )
}

export default LogotypeReset
