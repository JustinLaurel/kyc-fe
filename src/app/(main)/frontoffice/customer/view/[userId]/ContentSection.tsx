"use client";
import { ListItem, SimpleStaff } from "@/config/types";
import styles from "./page.module.scss";
import { useState } from "react";
import { MessageManager } from "@/components/MessageModal/type";
import { useForm } from "react-hook-form";
import CustomerSummaryCard from "./CustomerSummaryCard";
import TabSwitcher from "@/components/TabSwitcher";
import CustomerDetails from "./tabComponents/CustomerDetails";
import Ubo from "./tabComponents/Ubo";
import OtherRelatedParties from "./tabComponents/OtherRelatedParties";
import RiskRatingScreening from "./tabComponents/RiskRatingScreening";

interface ContentSectionProps {}
export default function ContentSection(props: ContentSectionProps) {
  const formHook = useForm({
    defaultValues: {
      ...INITIAL_CUSTOMER_DETAILS_FORM,
    },
  });
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
  accountUnitCod: "",
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
