import React from "react";
import styles from "./searchbar.module.scss";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { Card } from "@/components/index";

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
          <div className={styles.fieldTitle}>Name</div>
          <input
            className={styles.fieldInput}
            type="text"
            placeholder="Search by name"
          />
        </div>
        <div className={styles.field}>
          <div className={styles.fieldTitle}>User Role</div>
          <input
            className={styles.fieldInput}
            type="text"
            placeholder="Please Select"
          />
        </div>
        <div className={styles.field}>
          <div className={styles.fieldTitle}>User ID</div>
          <input
            className={styles.fieldInput}
            type="text"
            placeholder="Search by user ID"
          />
        </div>
        <div className={styles.field}>
          <div className={styles.fieldTitle}>Status</div>
          <input
            className={styles.fieldInput}
            type="text"
            placeholder="Search by status"
          />
        </div>
        <div className={styles.field}>
          <div className={styles.fieldTitle}>Department</div>
          <input
            className={styles.fieldInput}
            type="text"
            placeholder="Search by department/branch"
          />
        </div>
      </section>
    </Card>
  );
}
