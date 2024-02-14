import React from "react";
import styles from "./index.module.scss";
import { Button } from "@mui/material";

export enum BUTTON_COLOR_SCHEMES {
  WHITE = "whiteBtn",
  RED = "redBtn",
  GREY = "greyBtn",
}

interface Props {
  children?: React.ReactNode;
  colorScheme?: BUTTON_COLOR_SCHEMES;
  onClick?: () => void;
  className?: string;
  isSubmit?: boolean;
}
export default function ActionButton(props: Props) {
  const {
    colorScheme = BUTTON_COLOR_SCHEMES.RED,
    onClick = () => {},
    className = null,
    isSubmit = false,
  } = props;
  return (
    <Button
      variant="contained"
      disableElevation
      className={
        styles.action +
        " " +
        styles[colorScheme] +
        (className ? ` ${className}` : "")
      }
      onClick={isSubmit ? () => {} : onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {props.children}
    </Button>
  );
}
