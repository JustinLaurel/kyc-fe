"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import DataTable from "@/components/DataTable";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

const TABLE_ITEMS = [
  {
    no: "1",
    name: "Chiew Weng Keat",
    userId: "111111",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "2",
    name: "Chiew Weng Keat",
    userId: "222222",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "3",
    name: "Chiew Weng Keat",
    userId: "333333",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "4",
    name: "Chiew Weng Keat",
    userId: "444444",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "5",
    name: "Chiew Weng Keat",
    userId: "555555",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
];

export default function Search() {
  const router = useRouter();
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

  const [items, setItems] = useState([]);
  const [colWidths, setColWidths] = useState([0.3, 3, 1.5, 2, 2, 2, 1, 1.5]);
  useEffect(() => {
    function handleViewUser(userId: string) {
      router.push(`/user/view/${userId}`);
    }
  
    const mappedItems = TABLE_ITEMS.map((item, index) => {
      return {
        no: item.no,
        name: {
          label: item.name,
          onClick: () => handleViewUser(item.userId),
        },
        userId: item.userId,
        department: item.department,
        userRole: item.userRole,
        activity: item.activity,
        status: item.status,
        action:
          index % 2 === 0
            ? [
                {
                  label: "Edit",
                  onClick: () => {},
                  colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
                },
                {
                  label: "Delete",
                  onClick: () => {},
                },
              ]
            : {
                label: "Review",
                onClick: () => {},
              },
      };
    });
    setItems(mappedItems as any);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={styles.userContainer}>
      <div className={styles.headerSection}>
        <div>User Management</div>
        <ActionButton
          onClick={() => router.push("/user/add")}
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
