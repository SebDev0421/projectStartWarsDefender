import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ReactNode } from "react";
import React from "react";

const useStyle = makeStyles((theme) => ({
  fixedScrollSection: {
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
  },
}));

interface IFixedScrollSectionTemplate {
  children: ReactNode;
  classname?: string;
}

const FixedScrollSectionTemplate = (props: IFixedScrollSectionTemplate) => {
  const { children, classname } = props;
  const classes = useStyle();
  return (
    <div className={clsx(classes.fixedScrollSection, "p-6", classname)}>
      {children}
    </div>
  );
};

export default FixedScrollSectionTemplate;