import React from "react";
import { Fragment } from "react";
import { KeyboardEvent } from "react";
import { MouseEvent } from "react";
import { useState } from "react";
import { Drawer as DrawerMU } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export interface DrawerProps {
  
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
})
 
const Drawer = () => {
  const classes = useStyles();
  const [ openDrawer, setOpenDrawer ] = useState<boolean>(false);

  const toggleDrawer = (open: boolean ) => (event: KeyboardEvent | MouseEvent ) => {
    if(
      event.type === "keydown" && 
      ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")
    ){
      return;
    }
    setOpenDrawer(open)
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
  return ( 
    <div>
      <Fragment>
        <Button onClick={()=>setOpenDrawer(true)}>Abrir drawer</Button>
        <DrawerMU anchor={'right'} open={openDrawer} onClose={toggleDrawer(false)} >
          {list()}
        </DrawerMU>
      </Fragment>
    </div>
   );
}
 
export default Drawer;