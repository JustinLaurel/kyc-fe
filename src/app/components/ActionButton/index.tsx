import React from "react";
import styles from "./index.module.scss";

export enum BUTTON_COLOR_SCHEMES {
  WHITE = "whiteBtn",
  RED = "redBtn",
  GREY = "greyBtn",
}

interface Props {
  children?: React.ReactNode;
  colorScheme: BUTTON_COLOR_SCHEMES;
  onClick: () => void;
  className?: string;
}
export default function ActionButton(props: Props) {
  const { colorScheme, onClick, className = null } = props;
  return (
    <button
      className={
        styles.action +
        " " +
        styles[colorScheme] +
        (className ? ` ${className}` : "")
      }
      onClick={() => onClick()}
    >
      {props.children}
    </button>
  );
}
