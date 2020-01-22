import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import Hidden from "@material-ui/core/Hidden";

import React from "react";
import Link from "next/link";

import MenuAppDrawer from "../components/MenuAppDrawer";
import color from "@material-ui/core/colors/amber";
import theme from "../themes/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      //paddingTop: 48,
      alignContent: "center"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      height: 65,
      borderRadius: 5,
      padding: theme.spacing(2),
      fontWeight: "bold"
    },
    title: {
      flexGrow: 1
    },
    logo: {
      maxWidth: 265,
      cursor: "pointer",
      marginTop: 3
    },
    logOutButton: {
      marginRight: 10,
      color: theme.palette.primary.main
    }
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
      <AppBar position='fixed'>
        <Toolbar>
          <Hidden mdUp>
            <MenuAppDrawer />
          </Hidden>
          <Typography variant='h6' className={classes.title}>
            <Link href='/'>
              <img
                src='/pr-unlimited-logoV2.svg'
                alt='pru-logo'
                className={classes.logo}
              />
            </Link>
          </Typography>

          {!auth && (
            <div>
              <Hidden smDown>
                {[
                  { title: "Home", link: "/" },
                  { title: "Seasons", link: "/Seasons" },
                  { title: "About", link: "/About" },
                  { title: "Events", link: "/Events" }
                ].map((text, index) => (
                  <Link href={text.link} key={index}>
                    <Button color='inherit' className={classes.menuButton}>
                      {text.title}
                    </Button>
                  </Link>
                ))}
              </Hidden>
              <Link href={"/SignIn"}>
                <Button color='inherit' className={classes.menuButton}>
                  Sign In
                </Button>
              </Link>

              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                style={{
                  marginTop: 46,
                  zIndex: 10
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose} style={{ fontWeight: "bold" }}>
                  <ExitToAppRounded className={classes.logOutButton} />
                  {"Sign Out".toUpperCase()}
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
