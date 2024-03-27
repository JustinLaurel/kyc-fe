import { startTransition, useEffect, useState } from "react";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";
import styles from "./index.module.scss";

interface TabSwitcherProps {
  tabItems: TabItem[];
  initialTabIndex?: number;
}
export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabItems, initialTabIndex = 0 } = props;
  const [swipeIndex, setSwipeIndex] = useState(initialTabIndex);
  const [mountedTabs, setMountedTabs] = useState([initialTabIndex]);

  useEffect(() => { // Pseudo-caching of tabs
    setMountedTabs((prevMountedTabs) => {
      return prevMountedTabs.includes(swipeIndex)
        ? prevMountedTabs
        : [...prevMountedTabs, swipeIndex];
    });
  }, [swipeIndex]);

  return (
    <main className={styles.tabSwitcherContainer}>
      <section className={styles.tabsSection}>
        {tabItems.map((tab, index) => {
          const isActive = swipeIndex === index;
          return (
            <ActionButton
              key={index}
              onClick={() => {
                startTransition(() => setSwipeIndex(index));
              }}
              colorScheme={
                isActive
                  ? BUTTON_COLOR_SCHEMES.RED
                  : BUTTON_COLOR_SCHEMES.LIGHT_GREY
              }
              className={
                styles.tabButton + (isActive ? "" : ` ${styles.inactiveButton}`)
              }
            >
              {tab.label}
            </ActionButton>
          );
        })}
      </section>
      <section className={styles.contentSection}>
        {/* "Caches" mounted tabs, and lazily loads "uncached" tabs */}
        {tabItems.map((tab, index) =>
          mountedTabs.includes(index) ? (
            <div
              key={index}
              style={{ display: index === swipeIndex ? "block" : "none" }}
            >
              {tab.component}
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}

interface TabItem {
  label: string;
  component: JSX.Element;
}
