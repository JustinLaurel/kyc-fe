"use client";
import React, { useEffect } from "react";
import styles from "./searchbar.module.scss";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldDropdown from "@/components/FieldDropdown";
import { SubmitHandler, useForm } from "react-hook-form";

export const INITIAL_SEARCH_FORM = {
  name: "",
  role: "",
  staffId: "",
  status: "",
  department: "",
};

interface SearchBarProps {
  departmentList: ListItem[];
  onSubmit: () => void;
}
export default function SearchBar(props: SearchBarProps) {
  const { departmentList, onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    reset,
    control,
  } = useForm<typeof INITIAL_SEARCH_FORM>({
    defaultValues: {
      ...INITIAL_SEARCH_FORM,
    },
  });

  function handleClear() {
    reset({ ...INITIAL_SEARCH_FORM });
  }

  return (
    <Card
      header="Search"
      buttons={[
        {
          label: "Clear",
          onClick: handleClear,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
        {
          label: "Search",
          onClick: handleSubmit(onSubmit),
        },
      ]}
    >
      <section className={styles.fieldsSection}>
        <FieldInput
          label={"Name"}
          placeholder={"Search by name"}
          {...register("name")}
        />
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
          {...register("role")}
          control={control}
        />
        <FieldInput
          label={"User ID"}
          placeholder={"Search by user ID"}
          {...register("staffId")}
        />
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
          items={departmentList}
          title={"Department"}
          placeholder={"Search by department/branch"}
        />
      </section>
    </Card>
  );
}
