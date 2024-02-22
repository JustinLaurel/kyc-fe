"use client";
import { useForm } from "react-hook-form";
import SearchFilter from "./SearchFilter";
import SearchListing from "./SearchListing";
import styles from "./page.module.scss";

export const INITIAL_SEARCH_FORM = {
  idType: "",
  customerType: "",
  idNo: "",
  dateOfIncorporation: null,
};
export default function ContentSection() {
  const formHook = useForm<typeof INITIAL_SEARCH_FORM>({
    defaultValues: {
      ...INITIAL_SEARCH_FORM,
    },
  });
  const { reset, handleSubmit } = formHook;

  function submitSearchListing(values: typeof INITIAL_SEARCH_FORM) {
    console.log("values", values);
  }

  return (
    <main className={styles.contentSection}>
      <SearchFilter
        formHook={formHook}
        handleSearch={handleSubmit(submitSearchListing)}
        handleClear={() => reset(INITIAL_SEARCH_FORM)}
      />
      <SearchListing />
    </main>
  );
}
