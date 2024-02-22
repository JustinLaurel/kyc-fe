"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DateRangePicker from "@/components/DateRangePicker";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldInput from "@/components/FieldInput";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import { useForm } from "react-hook-form";

export const INITIAL_LISTING_FORM = {
  customerName: "",
  idNo: "",
  submissionDate: "",
  status: "",
};
export default function Filter() {
  const formHook = useForm<typeof INITIAL_LISTING_FORM>({
    defaultValues: {
      ...INITIAL_LISTING_FORM,
    },
  });
  const { register, handleSubmit, control } = formHook;

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
      <StyledFieldContainer>
        <FieldInput
          label={"Customer Name"}
          placeholder={"Search by Customer Name"}
          {...register("customerName")}
        />
        <FieldInput
          label={"ID No"}
          placeholder={"Search by ID No"}
          {...register("idNo")}
        />
        <DateRangePicker label="Submission Date" />
        <FieldAutocomplete
          label="Status"
          items={[
            {
              label: "Active",
              value: "Active",
            },
          ]}
          control={control}
          placeholder={"Search by Status"}
          {...register("status")}
        />
      </StyledFieldContainer>
    </Card>
  );
}
