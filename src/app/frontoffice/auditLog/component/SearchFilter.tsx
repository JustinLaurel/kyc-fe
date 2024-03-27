import { UseFormReturn } from "react-hook-form";
import { INITIAL_SEARCH_FILTER_FORM } from "../ContentSection";
import Card from "@/components/Card";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import FieldInput from "@/components/FieldInput";
import FieldDropdown from "@/components/FieldDropdown";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import DateRangePicker from "@/components/DateRangePicker";

interface SearchFilterProps {
  formHook: UseFormReturn<typeof INITIAL_SEARCH_FILTER_FORM, any, undefined>;
  handleSearch: () => void;
}
export default function SearchFilter(props: SearchFilterProps) {
  const { formHook, handleSearch } = props;
  const { register, control, reset, formState: { errors } } = formHook;

  function handleClear() {
    reset();
  }

  return (
    <Card
      header={"Search"}
      buttons={[
        {
          label: "Clear",
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
          onClick: handleClear,
        },
        { label: "Search", onClick: handleSearch },
      ]}
    >
      <StyledFieldContainer>
        <FieldInput
          label={"Performed By"}
          placeholder={"Enter name"}
          {...register("performedBy")}
        />
        <FieldDropdown
          label={"User Role"}
          items={[
            { label: "RM Maker", value: "adminMaker" },
            { label: "RM Approver", value: "rmApprover" },
          ]}
          placeholder={"Enter role"}
          control={control}
          {...register("userRole")}
        />
        <FieldInput
          label={"Application ID"}
          placeholder={"Search by Application ID"}
          {...register("applicationId")}
        />
        <FieldAutocomplete
          label={"Activity"}
          items={[{ label: "Active", value: "1" }]}
          control={control}
          {...register("activity")}
        />
        <DateRangePicker
          label={"Timestamp"}
          control={control}
          error={errors.timestamp}
          {...register("timestamp")}
        />
      </StyledFieldContainer>
    </Card>
  );
}
