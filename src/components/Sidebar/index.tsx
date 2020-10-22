import React from 'react'
import { Box, Drawer, Grid, Toolbar, Button } from '@material-ui/core'
import { SidebarContext } from '../../store/contexts/sidebar'
import { useStyles } from './useStyles'
import * as Sections from './sections'

const sections = [
  // { id: 'Color', text: 'Colors' },
  { id: 'Icon', text: 'Icons' }
]
const Sidebar = () => {
  const [active, setActive] = React.useState('Icon')
  const { state: sidebar }: any = React.useContext(SidebarContext)
  const classes = useStyles({ sidebar })

  const ActiveSection = () => {
    const AllSections: Record<string, any> = Sections
    const DynamicSection = AllSections[active]
    return <DynamicSection />
  }
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <Toolbar>
        <Grid container>
          {sections.map(section => (
            <Grid key={section.id} item sm={12}>
              <Button
                fullWidth
                size="small"
                onClick={() => setActive(section.id)}
                disabled={section.id === active}
                className={section.id === active ? classes.active : ''}
              >
                {section.text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
      <Box className={classes.box}>
        <Box>
          {ActiveSection}
        </Box>
      </Box>
    </Drawer>
  )
}

export default Sidebar
