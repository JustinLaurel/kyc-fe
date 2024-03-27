import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import { INITIAL_CUSTOMER_DETAILS_FORM } from "./CustomerDetailsFormWrapper";
import { UseFormReturn } from "react-hook-form";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldDropdown from "@/components/FieldDropdown";
import DatePicker from "@/components/DatePicker";

interface CustomerIdentityProps {
  formHook: UseFormReturn<typeof INITIAL_CUSTOMER_DETAILS_FORM, any, undefined>;
}
export default function CustomerIdentity(props: CustomerIdentityProps) {
  const { formHook } = props;
  const { register, control } = formHook;

  return (
    <Card header={"Customer Identity"}>
      <StyledFieldContainer>
        <FieldAutocomplete
          label={"ID Type*"}
          items={[
            {
              label: "Identification Number",
              value: "1",
            },
            {
              label: "Passport",
              value: "2",
            },
          ]}
          control={control}
          {...register("idType")}
        />
        <FieldDropdown
          label={"Customer Type*"}
          items={[
            {
              label: "Corporate",
              value: "1",
            },
            {
              label: "Commercial",
              value: "2",
            },
          ]}
          control={control}
          {...register("customerType")}
        />
        <FieldInput
          label={"ID No*"}
          placeholder={"Enter ID No"}
          {...register("idNo")}
        />
        <DatePicker
          label={"Date of Incorporation*"}
          control={control}
          {...register("dateOfIncorporation")}
        />
      </StyledFieldContainer>
    </Card>
  );
}
