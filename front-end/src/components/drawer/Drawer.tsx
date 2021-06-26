import React from "react";
import { Fragment } from "react";
import { useContext } from "react";
import { Drawer as DrawerMU } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaHome } from "react-icons/all";
import { BsTable } from "react-icons/all";
import { Typography } from "@material-ui/core";

import BattleContext from "../../context/battle/battleContext";


const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100%',
    backgroundColor: '#272C34',
  },
  fullList: {
    width: 'auto',
  },
  text: {
    color: 'white',
    letterSpacing: "2px",
  },
  title: {
    color: 'white',
    letterSpacing: "2px",
    margin: "10px 0px",
  }
})
 
const Drawer = () => {
  const battleContext = useContext(BattleContext);
  const { showDrawer, closeDrawer } = battleContext;
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    > 
      <Typography variant="h5" className={`${classes.title} text-center`}>Artudito</Typography>
      <Divider />
      <List >
        {['Inicio', 'Reporte',].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <FaHome color="white" fontSize="24px" /> : <BsTable color="white"  fontSize="24px" />}</ListItemIcon>
            <ListItemText primary={text} className={classes.text}/>
          </ListItem>
        ))}
      </List>
    </div>
  )
  return ( 
    <div>
      <Fragment>
        <DrawerMU anchor={'right'} open={showDrawer} onClose={closeDrawer}  >
          {list()}
        </DrawerMU>
      </Fragment>
    </div>
   );
}
 
export default Drawer;