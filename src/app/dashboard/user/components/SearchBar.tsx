import React from "react";
import styles from "./searchbar.module.scss";
import ActionButton, {
  BUTTON_COLOR_SCHEMES,
} from "@/app/component/ActionButton";
import Card from "@/app/component/Card";

export default function SearchBar() {
  return (
    <Card
      header="Search"
      buttons={[
        {
          label: "Clear",
          onClick: () => {},
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
        {
          label: "Search",
          onClick: () => {},
          colorScheme: BUTTON_COLOR_SCHEMES.RED,
        },
      ]}
    >
      <section className={styles.fieldsSection}>
        <div className={styles.field}>
          <div>Name</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search by name"
          />
        </div>
        <div className={styles.field}>
          <div>User Role</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Please Select"
          />
        </div>
        <div className={styles.field}>
          <div>User ID</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search by user ID"
          />
        </div>
        <div className={styles.field}>
          <div>Status</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search by status"
          />
        </div>
        <div className={styles.field}>
          <div>Department</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search by department/branch"
          />
        </div>
      </section>
    </Card>
  );
}
