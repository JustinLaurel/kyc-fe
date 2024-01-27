"use client";
import Card from "@/components/Card";
import styles from "./page.module.scss";
import RouteSteps from "@/components/RouteSteps";
import FieldInput from "@/components/FieldInput";
import FieldDropdown from "@/components/FieldDropdown";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import DataTable from "@/components/DataTable";
import dayjs from "dayjs";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Delete User",
  },
];

export default function UserDeletePage() {
  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <div className={styles.header}>Delete User</div>
        <RouteSteps routeItems={routeItems} />
      </section>
      <section className={styles.cardsSection}>
        <UserDetailsView />
        <ReviewTable />
      </section>
    </div>
  );
}

interface UserDetailsProps {}
function UserDetailsView(props: UserDetailsProps) {
  return (
    <Card header={"User Details"} className={styles.userDetailsContainer}>
      <div className={styles.detailsWrapper}>
        <FieldInput
          title={"User ID*"}
          onButtonClick={() => {}}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
        />
        <FieldDropdown
          items={[
            {
              label: "Department 1",
              value: "Dept1",
            },
            {
              label: "Department 2",
              value: "Dept2",
            },
          ]}
          title={"Department/Branch*"}
          placeholder={"Please Select"}
        />
        <FieldInput title={"Name*"} placeholder={"Enter Name here"} />
        <FieldDropdown
          items={[
            {
              label: "Role 1",
              value: "role1",
            },
            {
              label: "Role 2",
              value: "role2",
            },
          ]}
          title={"User Role*"}
          placeholder={"Please Select"}
        />
        <FieldInput title={"Email ID*"} placeholder={"Enter Email ID here"} />
        <FieldDropdown
          title={"Approver Group*"}
          items={[
            {
              label: "Group 1",
              value: "group1",
            },
            {
              label: "Group 2",
              value: "group2",
            },
          ]}
          placeholder={"Please Select"}
        />
      </div>
    </Card>
  );
}

interface ReviewTableProps {}
function ReviewTable(props: ReviewTableProps) {
  return (
    <Card
      header={"Review"}
      subheader={"List of Remark(s)"}
      buttons={[
        {
          label: "Cancel",
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
          onClick: () => {},
        },
        {
          label: "Update",
          onClick: () => {},
        },
      ]}
    >
      <DataTable
        items={[
          {
            no: "1",
            remarks: "Remarks from row 1",
            from: "Chiew Weng Keat",
            timestamp: dayjs().subtract(2, "day").format(
              "DD/MM/YYYY"
            ),
          },
          {
            no: "2",
            remarks: "Second remarks row",
            from: "Teo Tan Siang",
            timestamp: dayjs()
              .subtract(5, "day")
              .format("DD/MM/YYYY"),
          },
          {
            no: "3",
            remarks: "Third remarks row",
            from: "Fu Suan Huang",
            timestamp: dayjs().subtract(6, "day").format(
              "DD/MM/YYYY"
            ),
          },
        ]}
        headers={[
          "No",
          {
            label: "Remarks",
            onClick: () => {},
          },
          {
            label: "From",
            onClick: () => {},
          },
          {
            label: "Timestamp",
            onClick: () => {},
          },
        ]}
        colWidths={[1, 28, 10, 10]}
      />
    </Card>
  );
}
