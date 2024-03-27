import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DatePicker from "@/components/DatePicker";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldDropdown from "@/components/FieldDropdown";
import FieldInput from "@/components/FieldInput";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import { UseFormReturn, useForm } from "react-hook-form";
import { INITIAL_SEARCH_FORM } from "./ContentSection";

interface SearchFilterProps {
  formHook: UseFormReturn<typeof INITIAL_SEARCH_FORM, any, undefined>;
  handleSearch: () => void;
  handleClear: () => void;
}
export default function SearchFilter(props: SearchFilterProps) {
  const { formHook, handleSearch, handleClear } = props;

  const { control, register } = formHook;
  return (
    <form onSubmit={handleSearch}>
      <Card
        header={"Customer Identity"}
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
          <FieldAutocomplete
            label={"ID Type*"}
            placeholder={"Search by ID Type"}
            control={control}
            items={[
              { label: "Passport", value: "passport" },
              { label: "National ID", value: "nationalId" },
              { label: "Alien ID", value: "alienId" },
            ]}
            {...register("idType")}
          />
          <FieldDropdown
            label={"Customer Type*"}
            placeholder={"Select Customer Type"}
            items={[
              { label: "Individual", value: "individual" },
              { label: "Corporate", value: "corporate" },
            ]}
            control={control}
            {...register("customerType")}
          />
          <FieldInput
            label={"ID No*"}
            placeholder={"Search by ID No"}
            {...register("idNo")}
          />
          <DatePicker
            label={"Date of Incorporation"}
            control={control}
            {...register("dateOfIncorporation")}
          />
        </StyledFieldContainer>
      </Card>
    </form>
  );
}
