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
  userId: "",
  status: null,
  department: null,
};
const VALIDATION_RULES = {
  name: {
    minLength: 6,
  },
  userId: {
    minLength: 5,
  },
  status: {
    minLength: 1,
  },
};

interface SearchBarProps {
  departmentList: ListItem[];
  onSubmit: SubmitHandler<any>;
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
          isSubmit: true,
        },
      ]}
    >
      <form className={styles.fieldsSection} onSubmit={handleSubmit(onSubmit)}>
        <FieldInput
          label={"Name"}
          placeholder={"Search by name"}
          {...register("name", VALIDATION_RULES.name)}
        />
        <FieldDropdown
          items={[
            {
              label: "Role 1",
              value: "role1",
            },
            {
              label: "Role 2",
              value: "role2",
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
          {...register("userId", VALIDATION_RULES.userId)}
        />
        <FieldAutocomplete
          items={[
            {
              label: "Status 1",
              value: "one",
            },
            {
              label: "Status 2",
              value: "two",
            },
          ]}
          title={"Status"}
          placeholder={"Search by status"}
          control={control}
          {...register("status", VALIDATION_RULES.status)}
        />
        <FieldAutocomplete
          items={departmentList}
          title={"Department"}
          placeholder={"Search by department/branch"}
          control={control}
          {...register("department")}
        />
      </form>
    </Card>
  );
}
