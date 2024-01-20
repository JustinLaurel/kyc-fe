"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import Card from "../component/Card";
import { BUTTON_COLOR_SCHEMES } from "../component/ActionButton";

export default function Login() {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Card buttons={[
        {
          label: "Clear",
          onClick: () => {},
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
        {
          label: "Log In",
          onClick: () => {},
          colorScheme: BUTTON_COLOR_SCHEMES.RED,
        }
      ]}>
        <div>
          <div>User ID</div>
          <input />
        </div>
        <div>
          <div>Password</div>
          <input />
        </div>
      </Card>
    </div>
  );
}
