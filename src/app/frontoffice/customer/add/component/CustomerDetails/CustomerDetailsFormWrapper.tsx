
import { useForm } from "react-hook-form";
import CustomerIdentity from "./CustomerIdentity";
import OtherKycDetails from "./OtherKycDetails";

export default function CustomerDetailsFormWrapper() {
  const formHook = useForm({
    defaultValues: {...INITIAL_CUSTOMER_DETAILS_FORM},
  })
  const { control, handleSubmit, getValues } = formHook;

  return (
    <>
      <CustomerIdentity formHook={formHook} />
      <OtherKycDetails formHook={formHook} />
    </>
  )
}

export const INITIAL_CUSTOMER_DETAILS_FORM = {
  idType: "",
  customerType: null,
  idNo: "",
  dateOfIncorporation: null,

  customerName: "",
  foreignPhone: {
    countryCode: "60",
    number: "",
  },
  natureOfBusiness: "",
  faxPhone: {
    countryCode: "60",
    number: "",
  },
  countryOfIncorporation: "",
  orgUnitCode: "",
  geography: "",
  accountType: "",
  addressOfRegisteredOffice: "",
  accountUnitCode: "",
  purposeOfAccount: "",
  email: "",
  sourceOfFunds: "",
  mobilePhone: {
    countryCode: "60",
    number: "",
  },
  turnover: "",
  homePhone: {
    countryCode: "60",
    number: "",
  },
  staffId: "",
  officePhone: {
    countryCode: "60",
    number: "",
  },
};
