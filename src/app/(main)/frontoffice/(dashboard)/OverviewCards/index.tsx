import ApplicationsListing from "./ApplicationsListing";
import OverviewChart from "./OverviewChart";
import styles from "./index.module.scss";

export default function OverviewCards() {
  return (
    <main className={styles.overviewCards}>
      <OverviewChart />
      <ApplicationsListing />
    </main>
  )
}