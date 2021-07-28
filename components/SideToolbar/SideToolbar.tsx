import { FC, useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useTheme } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useStyles } from './uiStyles'
import { SimulatorContext } from '../../state/context'
import { addClient, addService, addResource } from '../../state/reducer'
export interface ISideToolbar {
  isOpen: boolean
  onClose: () => void
}

export interface Item {
  text: string
  action: () => void
}

export const SideToolbar: FC<ISideToolbar> = (props) => {
  const theme = useTheme()
  const classes = useStyles()
  const { dispatch, state } = useContext(SimulatorContext)

  const listItems: Item[] = [
    {
      text: 'Client',
      action: () => {
        dispatch(
          addClient({
            id: 'cliente_id',
            label: 'Client',
            type: 'cliente',
            requestRate: 10,
            x: 10,
            y: 200,
            resource: 'service_id',
          })
        )
      },
    },
    {
      text: 'Service',
      action: () => {
        dispatch(
          addService({
            id: 'service_id',
            label: 'Service',
            type: 'service',
            maxRequestCapacity: 50,
            x: 200,
            y: 200,
            resources: ['resource_id'],
            concurrency: 5,
          })
        )
      },
    },
    {
      text: 'Resource',
      action: () => {
        dispatch(
          addResource({
            id: 'resource_id',
            label: 'Resource',
            type: 'resource',
            minLatency: 1000,
            maxLatency: 2000,
            failureRate: 20,
            x: 400,
            y: 200,
            concurrency: 5,
          })
        )
      },
    },
  ]

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
      role="toolbar"
    >
      <div className={classes.drawerHeader}>
        Components
        <IconButton onClick={props.onClose} data-testid="back-button">
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {listItems.map((item) => (
          <ListItem button onClick={item.action} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
