"use client";

import { useState } from "react";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";
import styles from "./index.module.scss";

interface TabSwitcherProps {
  tabItems: TabItem[];
  initialTabIndex?: number;
}
export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabItems, initialTabIndex = 0 } = props;
  const [swipeIndex, setSwipeIndex] = useState(initialTabIndex);
  return (
    <main className={styles.tabSwitcherContainer}>
      <section className={styles.tabsSection}>
        {tabItems.map((tab, index) => {
          const isActive = swipeIndex === index;
          return (
            <ActionButton
              key={index}
              onClick={() => setSwipeIndex(index)}
              colorScheme={isActive ? BUTTON_COLOR_SCHEMES.RED : BUTTON_COLOR_SCHEMES.LIGHT_GREY}
              className={styles.tabButton + (isActive ? "" : ` ${styles.inactiveButton}`)}
            >
              {tab.label}
            </ActionButton>
          );
        })}
      </section>
      <section className={styles.contentSection}>
        {tabItems[swipeIndex].component}
      </section>
    </main>
  );
}

interface TabItem {
  label: string;
  component: JSX.Element;
}
