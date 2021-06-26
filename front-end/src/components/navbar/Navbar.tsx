import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";
import { VscMenu } from "react-icons/all";
import Logo from "../../assets/imgs/logo-white.png"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white',
      letterSpacing: '2px',
      margin: '10px'
    },
  }),
);
 
const Navbar = () => {
  const classes = useStyles();
  
  return ( 
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="logo">
            <div className="w-20">
              <img src={Logo} alt="logo" className="w-full" />
            </div>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Artudito
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <VscMenu color="white" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
   );
}
 
export default Navbar;