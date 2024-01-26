"use client";
import TextButton from "@/components/TextButton";
import styles from "./index.module.scss";
import React from "react";

interface Props {
  routeItems: {
    label: string;
    onClick?: () => void;
  }[];
}
export default function RouteSteps(props: Props) {
  // const {routeItems} = props;
  const routeItems = [
    {
      label: "User Management",
      onClick: () => {},
    },
    {
      label: "Add User",
    },
  ];
  return (
    <div className={styles.routeStepsContainer}>
      {routeItems.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.onClick ? (
              <TextButton
                className={styles.route}
                onClick={item.onClick ?? (() => {})}
              >
                {item.label}
              </TextButton>
            ) : (
              <div className={styles.route + " " + styles.disabled}>
                {item.label}
              </div>
            )}
            {index !== routeItems.length - 1 && (
              <div className={styles.rightArrow}>{">"}</div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
