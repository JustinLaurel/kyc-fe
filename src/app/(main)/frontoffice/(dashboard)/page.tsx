import styles from "./page.module.scss";
import WelcomeMessage from "./WelcomeMessage";
import SearchCustomer from "./SearchCustomer";
import OverviewCards from "./OverviewCards";
import SearchListing from "./SearchListing";

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <WelcomeMessage />
      <SearchCustomer />
      <OverviewCards />
      <SearchListing />
    </div>
  );
}
