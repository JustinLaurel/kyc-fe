"use client";

import styles from "./headersection.module.scss";
import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  
  return (
    <div className={styles.headerSection}>
      <div>User Management</div>
      <ActionButton
        onClick={() => router.push("/user/add")}
        className={styles.createButton}
      >
        Create New
      </ActionButton>
    </div>
  );
}
