import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';

import React from 'react';
import Link from 'next/link';

import MenuAppDrawer from '../components/MenuAppDrawer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 48
    },
    menuButton: {
      marginRight: theme.spacing(2),
      height: 58,
      borderRadius: 5,
      padding: theme.spacing(2),
      fontWeight: 'bold'
    },
    title: {
      flexGrow: 1
    },
    logo: {
        maxWidth: 260,
        cursor: 'pointer'
    },
  })
);

function MenuAppBar() {
  const classes = useStyles();
  const [auth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Hidden mdUp>
            <MenuAppDrawer/>
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            <Link href="/" >
             <img src="/pr-unlimited-logoV2.svg"  alt="pru-logo" className={classes.logo} />
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          {!auth && (
            <div>
                <Hidden smDown>

                {[
                    { title: 'Home', link: '/' },
                    { title: 'About', link: '/About' },
                    { title: 'Events', link: '/Events' }
                ].map((text, index) => (
                <Link href={text.link} key={index}>
                        <Button color="inherit" className={classes.menuButton}>{text.title}</Button>
                </Link>
                ))
            }    
               </Hidden>

            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;