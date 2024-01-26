"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import DataTable from "@/components/DataTable";
import Card from "@/components/Card";
import Notification from "@/components/Notification";

export default function Search() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const [headers, setHeaders] = useState([
    "No",
    {
      label: "Name",
      onClick: () => {},
    },
    {
      label: "User ID",
      onClick: () => {},
    },
    {
      label: "Department/Branch",
      onClick: () => {},
    },
    {
      label: "User Role",
      onClick: () => {},
    },
    {
      label: "Activity",
      onClick: () => {},
    },
    {
      label: "Status",
      onClick: () => {},
    },
    "Action",
  ]);
  const [items, setItems] = useState([
    {
      no: "1",
      name: {
        label: "Chiew Weng Keat",
        onClick: () => {},
      },
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: [
        {
          label: "Update",
          onClick: () => {},
        },
        {
          label: "Delete",
          onClick: () => {},
        },
      ],
    },
    {
      no: "2",
      name: {
        label: "Chiew Weng Keat",
        onClick: () => {},
      },
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: {
        label: "Review",
        onClick: () => {},
      },
    },
    {
      no: "3",
      name: {
        label: "Chiew Weng Keat",
        onClick: () => {},
      },
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: {
        label: "Review",
        onClick: () => {},
      },
    },
    {
      no: "4",
      name: {
        label: "Chiew Weng Keat",
        onClick: () => {},
      },
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: {
        label: "Review",
        onClick: () => {},
      },
    },
    {
      no: "5",
      name: {
        label: "Chiew Weng Keat",
        onClick: () => alert("Name clicked!"),
      },
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: {
        label: "Review",
        onClick: () => alert("Review clicked!"),
      },
    },
  ]);
  const [colWidths, setColWidths] = useState([0.3, 3, 1.5, 2, 2, 2, 1, 1.5]);
  return (
    <section className={styles.userContainer}>
      {/* <Notification
        isVisible={isNotificationVisible}
        closeNotification={() => setIsNotificationVisible(false)}
        buttons={[
          {
            label: "Clear",
            onClick: () => console.log("clear"),
            colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
          },
          {
            label: "Log In",
            onClick: () => console.log("login"),
            colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
          },
        ]}
      >
        This User ID does not exist in the system, please contact your administrator for further assistance.
      </Notification> */}
      <div className={styles.headerSection}>
        <div>User Management</div>
        <ActionButton
          colorScheme={BUTTON_COLOR_SCHEMES.RED}
          onClick={() => {}}
          className={styles.createButton}
        >
          Create New
        </ActionButton>
      </div>
      <SearchBar />
      <Card header="Search Result">
        <DataTable items={items} headers={headers} colWidths={colWidths} />
      </Card>
    </section>
  );
}
