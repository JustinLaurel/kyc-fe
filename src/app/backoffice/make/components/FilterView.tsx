import React from "react";
import styles from "./searchbar.module.scss";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldDropdown from "@/components/FieldDropdown";
import { useForm, UseFormReturn } from "react-hook-form";
import { INITIAL_SEARCH_FORM } from "./ContentSection";
import { ListItem } from "@/config/types";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import DateRangePicker from "@/components/DateRangePicker";

interface FilterViewProps {
  departmentList: ListItem[];
  roleList: ListItem[];
  onSubmit: (values: typeof INITIAL_SEARCH_FORM) => void;
}
export default function FilterView(props: FilterViewProps) {
  const { departmentList, roleList, onSubmit } = props;
  const {
    register,
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<typeof INITIAL_SEARCH_FORM>({
    defaultValues: {
      ...INITIAL_SEARCH_FORM,
    },
    reValidateMode: "onSubmit",
  });

  function handleClearFilter() {
    reset({ ...INITIAL_SEARCH_FORM });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card
        header="Search"
        buttons={[
          {
            label: "Clear",
            onClick: handleClearFilter,
            colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
          },
          {
            label: "Search",
            isSubmit: true,
          },
        ]}
      >
        <StyledFieldContainer>
          <FieldInput
            label={"Name"}
            placeholder={"Search by name"}
            error={errors.name}
            {...register("name", VALIDATION_RULES.name)}
          />
          <FieldDropdown
            items={roleList}
            label={"User Role"}
            error={errors.role}
            {...register("role")}
            control={control}
          />
          <FieldInput
            label={"User ID"}
            placeholder={"Search by user ID"}
            error={errors.userId}
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
            error={errors.status}
            {...register("status", VALIDATION_RULES.status)}
          />
          <FieldAutocomplete
            items={departmentList}
            label={"Department"}
            placeholder={"Search by department/branch"}
            control={control}
            error={errors.department}
            {...register("department")}
          />
        </StyledFieldContainer>
      </Card>
    </form>
  );
}

const VALIDATION_RULES = {
  name: {
    minLength: {
      value: 3,
      message: "Please enter at least 3 characters in the field.",
    },
  },
  userId: {
    minLength: {
      value: 3,
      message: "Please enter at least 3 characters in the field.",
    },
  },
};
