import styles from "./index.module.scss";
import HeaderSection from "./components/HeaderSection";
import ContentSection from "./components/ContentSection";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getListDepartments, getListRoles } from "@/services/query";
import { Suspense } from "react";

export default function BoMake() {
  return (
    <section className={styles.userContainer}>
      <HeaderSection />
      <Suspense fallback={"HI LOADING"}>
        <ContentSection />
      </Suspense>
    </section>
  );
}
