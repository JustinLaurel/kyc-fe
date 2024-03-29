import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import CustomerSummaryCard from "./CustomerSummaryCard";
import TabSwitcher from "@/components/TabSwitcher";
import CustomerDetails from "./component/CustomerDetails";
import Ubo from "./component/Ubo";
import OtherRelatedParties from "./component/OtherRelatedParties";
import RiskRatingScreening from "./component/RiskRatingScreening";
import ButtonsView from "./component/ButtonsView";

interface ContentSectionProps {}
export default function ContentSection(props: ContentSectionProps) {
  const formHook = useForm({
    defaultValues: {
      ...INITIAL_CUSTOMER_DETAILS_FORM,
    },
  });

  function handleSubmitCustomerDetails(
    values: typeof INITIAL_CUSTOMER_DETAILS_FORM
  ) {
    console.log(values);
  }

  return (
    <section className={styles.contentSection}>
      <CustomerSummaryCard />
      <TabSwitcher
        tabItems={[
          {
            label: "Customer Details",
            component: <CustomerDetails formHook={formHook} />,
          },
          {
            label: "UBO",
            component: <Ubo />,
          },
          {
            label: "Other Related Parties",
            component: <OtherRelatedParties />,
          },
          {
            label: "Risk Rating & Screening",
            component: <RiskRatingScreening />,
          },
        ]}
      />
      <form onSubmit={formHook.handleSubmit(handleSubmitCustomerDetails)}>
        <ButtonsView />
      </form>
    </section>
  );
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
