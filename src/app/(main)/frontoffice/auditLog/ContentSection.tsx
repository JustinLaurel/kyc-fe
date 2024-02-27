"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.scss";
import { AuditRow } from "./type";
import { useState } from "react";
import SearchFilter from "./component/SearchFilter";
import AuditListingTable from "./component/AuditListingTable";

interface ContentSectionProps {
  auditData: AuditRow[];
}
export default function ContentSection(props: ContentSectionProps) {
  const { auditData: initialAuditData } = props;
  const [auditData, setAuditData] = useState(initialAuditData); 
  const formHook = useForm({
    defaultValues: { ...INITIAL_SEARCH_FILTER_FORM },
  });
  const { handleSubmit } = formHook;

  function submitSearch(values: typeof INITIAL_SEARCH_FILTER_FORM) {
    console.log("submitSearch", values);
  }

  return (
    <main className={styles.contentSectionContainer}>
      <SearchFilter formHook={formHook} handleSearch={handleSubmit(submitSearch)} />
      <AuditListingTable data={auditData} />
    </main>
  );
}

export const INITIAL_SEARCH_FILTER_FORM = {
  performedBy: "",
  userRole: "",
  applicationId: "",
  activity: "",
  timestamp: {
    from: null,
    to: null,
  },
};
