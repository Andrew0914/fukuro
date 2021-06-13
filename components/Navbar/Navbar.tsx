import { FC, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import { useStyles } from './uiStyles'
export interface INavbarProps {
  onBurgerClick: () => void
  isOpen: boolean
}

const Navbar: FC<INavbarProps> = (props) => {
  const classes = useStyles()
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.isOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={props.onBurgerClick}
          className={clsx(classes.menuButton, props.isOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          🦉 Architectural patterns simulator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
