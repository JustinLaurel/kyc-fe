import Card from "@/components/Card";
import styles from "./customerDetails.module.scss";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import { UseFormReturn, useWatch } from "react-hook-form";
import FieldDropdown from "@/components/FieldDropdown";
import { INITIAL_CUSTOMER_DETAILS_FORM } from "../ContentSection";
import FieldInput from "@/components/FieldInput";
import FieldTextArea from "@/components/FieldTextArea";
import FieldPhone from "@/components/FieldPhone";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldInputCurrency from "@/components/FieldInputCurrency";
import { useEffect } from "react";

interface CustomerDetailsProps {
  formHook: UseFormReturn<typeof INITIAL_CUSTOMER_DETAILS_FORM, any, undefined>;
}
export default function CustomerDetails(props: CustomerDetailsProps) {
  const { formHook } = props;
  const { register, control, watch } = formHook;

  const turnover = watch("turnover");
  useEffect(() => {
    console.log(turnover);
  }, [turnover]);

  return (
    <main className={styles.customerDetailsContainer}>
      <Card header={"Customer Identity"}>
        <StyledFieldContainer>
          <FieldInput
            label={"Customer Name*"}
            placeholder={"Enter Customer Name"}
            {...register("customerName")}
          />
          <FieldPhone
            countryCodes={[
              { label: "+60", value: "60" },
              { label: "+1300", value: "1300" },
              { label: "+971", value: "971" },
            ]}
            label={"Foreign Phone"}
            placeholder="Enter Foreign Phone"
            control={control}
            {...register("foreignPhone")}
          />
          <FieldDropdown
            label={"Nature of Business*"}
            items={[
              { label: "Manufacturing", value: "mnfg" },
              { label: "Commercial", value: "comm" },
            ]}
            control={control}
            {...register("natureOfBusiness")}
          />
          <FieldPhone
            countryCodes={COUNTRY_CODES_LIST}
            label={"Fax Phone"}
            placeholder={"Enter Fax"}
            control={control}
            {...register("faxPhone")}
          />
          <FieldAutocomplete
            label={"Country of Incorporation*"}
            items={[
              { label: "Malaysia", value: "my" },
              { label: "Singapore", value: "sg" },
            ]}
            control={control}
            {...register("countryOfIncorporation")}
          />
          <FieldAutocomplete
            label={"Org Unit Code*"}
            items={[{ label: "SHA", value: "sha" }]}
            control={control}
            {...register("orgUnitCode")}
          />
          <FieldAutocomplete
            label={"Geography*"}
            items={[
              { label: "Malaysia", value: "my" },
              { label: "Singapore", value: "sg" },
            ]}
            control={control}
            {...register("geography")}
          />
          <FieldAutocomplete
            label={"Account Type*"}
            items={[
              { label: "Current Account MYR (Code 2091114)", value: "cur" },
            ]}
            control={control}
            {...register("accountType")}
          />
          <FieldTextArea
            label={"Address of Registered Office*"}
            placeholder={"Enter Address of Registered Office"}
            control={control}
            gridColSpan={1}
            gridRowSpan={2}
            className={styles.textarea}
            {...register("addressOfRegisteredOffice")}
          />
          <FieldAutocomplete
            label={"Account Unit Code*"}
            items={[{ label: "SHA", value: "sha" }]}
            control={control}
            {...register("geography")}
          />
          <FieldDropdown
            label={"Purpose of Account"}
            items={[
              { label: "Fund Withdrawal and Deposit", value: "withdraw" },
              { label: "Line of Credit", value: "cc" },
            ]}
            control={control}
            {...register("purposeOfAccount")}
          />
          <FieldInput
            label={"Email"}
            placeholder={"Please enter email"}
            {...register("email")}
          />
          <FieldAutocomplete
            label={"Source of Funds"}
            items={[
              { label: "Fixed Assets", value: "sha" },
              { label: "Loans", value: "loan" },
            ]}
            control={control}
            {...register("sourceOfFunds")}
          />
          <FieldPhone
            label={"Mobile Phone"}
            countryCodes={COUNTRY_CODES_LIST}
            control={control}
            placeholder={"Enter Mobile Phone"}
            {...register("mobilePhone")}
          />
          <FieldInputCurrency
            label={"Turnover*"}
            control={control}
            {...register("turnover")}
          />
          <FieldPhone
            label={"Home Phone"}
            countryCodes={COUNTRY_CODES_LIST}
            control={control}
            placeholder={"Enter Home Phone"}
            {...register("homePhone")}
          />
          <FieldInput
            label={"Staff ID*"}
            placeholder={"Enter Staff ID"}
            {...register("staffId")}
          />
          <FieldPhone
            label={"Office Phone"}
            countryCodes={COUNTRY_CODES_LIST}
            control={control}
            placeholder={"Enter Office Phone"}
            {...register("officePhone")}
          />
        </StyledFieldContainer>
      </Card>
    </main>
  );
}

const COUNTRY_CODES_LIST = [
  { label: "+60", value: "60" },
  { label: "+1300", value: "1300" },
  { label: "+971", value: "971" },
];
