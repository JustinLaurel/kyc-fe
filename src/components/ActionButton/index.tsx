import React from "react";
import styles from "./index.module.scss";
import { Button } from "@mui/material";

export enum BUTTON_COLOR_SCHEMES {
  WHITE = "whiteBtn",
  RED = "redBtn",
  GREY = "greyBtn",
  LIGHT_GREY = "lightGreyBtn",
}

interface Props {
  children?: React.ReactNode;
  colorScheme?: BUTTON_COLOR_SCHEMES;
  onClick?: () => void;
  className?: string;
  isSubmit?: boolean;
  component?: string;
  draggable?: boolean;
}
const ActionButton = React.forwardRef((props: Props, ref: any) => {
  const {
    colorScheme = BUTTON_COLOR_SCHEMES.RED,
    onClick = () => {},
    className = null,
    isSubmit = false,
    ...additionalProps
  } = props;
  return (
    <Button
      {...additionalProps}
      variant="contained"
      disableElevation
      className={
        styles.action +
        " " +
        styles[colorScheme] +
        (className ? ` ${className}` : "")
      }
      {...(props.isSubmit ? { type: "submit" } : { onClick })}
      ref={ref}
    >
      {props.children}
    </Button>
  );
});

export default ActionButton;
