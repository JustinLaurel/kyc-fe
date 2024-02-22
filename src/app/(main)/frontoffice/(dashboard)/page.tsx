"use client";

import Card from "@/components/Card";
import styles from "./page.module.scss";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";
import WelcomeMessage from "./WelcomeMessage";
import SearchCustomer from "./SearchCustomer";
import OverviewCards from "./OverviewCards";
import SearchListing from "./SearchListing";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className={styles.dashboardContainer}>
      <WelcomeMessage />
      <SearchCustomer />
      <OverviewCards />
      <SearchListing />
    </div>
  );
}
