import React from "react";
import styles from "./searchbar.module.scss";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldDropdown from "@/components/FieldDropdown";

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
        },
      ]}
    >
      <section className={styles.fieldsSection}>
        <FieldInput title={"Name"} placeholder={"Search by name"} />
        <FieldDropdown
          items={[
            {
              label: "Role 1",
              value: "Role 1",
            },
            {
              label: "Role 2",
              value: "Role 2",
            },
          ]}
          title={"User Role"}
          placeholder={"Please Select"}
        />
        <FieldInput title={"User ID"} placeholder={"Search by user ID"} />
        <FieldAutocomplete
          items={[
            {
              label: "Status 1",
              value: "Status 1",
            },
            {
              label: "Status 2",
              value: "Status 2",
            },
          ]}
          title={"Status"}
          placeholder={"Search by status"}
        />
        <FieldAutocomplete
          items={[
            {
              label: "Lorem Ipsum",
              value: "Lorem Ipsum",
            },
          ]}
          title={"Department"}
          placeholder={"Search by department/branch"}
        />
      </section>
    </Card>
  );
}
