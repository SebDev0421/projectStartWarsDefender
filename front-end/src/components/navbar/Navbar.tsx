import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";

import Logo from "../../assets/imgs/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      fontSize: "24px"
    },
    title: {
      flexGrow: 1,
      color: 'black',
      letterSpacing: '2px',
      margin: '10px'
    },
  }),
);
 
const Navbar = () => {
  const classes = useStyles();
  
  return ( 
    <div className={classes.root}>
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="logo">
            <div className="w-20">
              <img src={Logo} alt="logo" className="w-full" />
            </div>
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            Artudito
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
   );
}
 
export default Navbar;