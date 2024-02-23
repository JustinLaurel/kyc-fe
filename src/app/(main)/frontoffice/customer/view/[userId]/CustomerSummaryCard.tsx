import Card from "@/components/Card";
import styles from "./page.module.scss";
import SimpleDetailsViewContainer from "@/components/StyledDetailsViewContainer";
export default function CustomerSummaryCard() {
  return (
    <main className={styles.customerSummaryCardContainer}>
      <Card header={"AeroGuardians SDN BHD"}>
        <SimpleDetailsViewContainer
          detailItems={[
            {
              label: "Application ID",
              value: "UKYC2023083100002"
            },
            {
              label: "Risk Rating",
              value: "H",
            },
            {
              label: "Prospect ID",
              value: "AM12233",
            },
            {
              label: "Case ID Master Status",
              value: "Pending",
            },
            {
              label: "Case ID",
              value: "",
            },
            {
              label: "Overall Status",
              value: "Pending for Review in Net Reveal",
            }
          ]}
        />
      </Card>
    </main>
  );
}
