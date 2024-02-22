"use client";
import React from "react";
import styles from "./searchbar.module.scss";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldDropdown from "@/components/FieldDropdown";
import { UseFormReturn } from "react-hook-form";
import { INITIAL_SEARCH_FORM } from "./ContentSection";
import { ListItem } from "@/config/types";
import StyledFieldContainer from "@/components/StyledFieldContainer";

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

interface FilterViewProps {
  departmentList: ListItem[];
  roleList: ListItem[];
  handleSearch: () => void;
  handleClear: () => void;
  formHook: UseFormReturn<typeof INITIAL_SEARCH_FORM, any, undefined>;
}
export default function FilterView(props: FilterViewProps) {
  const { departmentList, roleList, handleSearch, handleClear, formHook } = props;
  const { register, control } = formHook;

  return (
    <form onSubmit={handleSearch}>
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
            onClick: handleSearch,
            isSubmit: true,
          },
        ]}
      >
        <StyledFieldContainer>
          <FieldInput
            label={"Name"}
            placeholder={"Search by name"}
            {...register("name", VALIDATION_RULES.name)}
          />
          <FieldDropdown
            items={roleList}
            label={"User Role"}
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
                label: "Active",
                value: "Active",
              },
            ]}
            label={"Status"}
            placeholder={"Search by status"}
            control={control}
            {...register("status", VALIDATION_RULES.status)}
          />
          <FieldAutocomplete
            items={departmentList}
            label={"Department"}
            placeholder={"Search by department/branch"}
            control={control}
            {...register("department")}
          />
        </StyledFieldContainer>
      </Card>
    </form>
  );
}
