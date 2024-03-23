import styles from "./index.module.scss";
import CustomerDetailsFormWrapper from "./CustomerDetailsFormWrapper";
import { memo } from "react";

function CustomerDetails() {
  return (
    <main className={styles.customerDetailsContainer}>
      <CustomerDetailsFormWrapper />
    </main>
  );
}

export default memo(CustomerDetails);
