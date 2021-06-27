import { Divider, Paper, Toolbar, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";

interface IPanelProps {
  title: String | ReactNode;
  children: ReactNode;
}

const Panel = ({ title, children }: IPanelProps) => {
  return (
    <Paper className={"flex flex-col h-full"}>
      <Toolbar variant={"dense"}>
        <Typography variant={"h6"} className={"w-full m-0"}>
          {title}
        </Typography>
      </Toolbar>
      <Divider />
      <Paper
        elevation={0}
        square={true}
        className={"flex-grow flex flex-col overflow-y-auto px-6 py-6"}
        children={children}
      />
    </Paper>
  );
};

export default Panel;