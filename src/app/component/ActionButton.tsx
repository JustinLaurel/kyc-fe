import React from "react";
import styles from "./actionbutton.module.scss";

export enum BUTTON_COLOR_SCHEMES {
  WHITE = "whiteBtn",
  RED = "redBtn",
  GREY = "greyBtn",
}

interface Props {
  label: string;
  colorScheme: BUTTON_COLOR_SCHEMES;
  onClick: () => void;
}
export default function ActionButton(props: Props) {
  const { label, colorScheme, onClick } = props;
  return (
    <button className={styles.action + " " + styles[colorScheme]} onClick={() => onClick()}>
      {label}
    </button>
  );
}
