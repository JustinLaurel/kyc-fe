import React from "react";
import styles from "./searchbar.module.scss";

export default function SearchBar() {
  return (
    <main className={styles.searchBar}>
      <section className={styles.headerSection}>Search</section>
      <section className={styles.fieldsSection}>
        <div className={styles.field}>
          <div>Name</div>
          <input className={styles.input} type="text" placeholder="Search by name" />
        </div>
        <div className={styles.field}>
          <div>User Role</div>
          <input className={styles.input} type="text" placeholder="Please Select" />
        </div>
        <div className={styles.field}>
          <div>User ID</div>
          <input className={styles.input} type="text" placeholder="Search by user ID" />
        </div>
        <div className={styles.field}>
          <div>Status</div>
          <input className={styles.input} type="text" placeholder="Search by status" />
        </div>
        <div className={styles.field}>
          <div>Department</div>
          <input className={styles.input} type="text" placeholder="Search by department/branch" />
        </div>
      </section>
      <section className={styles.actionsSection}>
        <button className={styles.action + " " + styles.secondaryBtn}>Clear</button>
        <button className={styles.action + " " + styles.primaryBtn}>Search</button>
      </section>
    </main>
  )
}

