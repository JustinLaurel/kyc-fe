"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import styles from "./styles.module.scss";
import axios from "axios";
import Notification from "@/components/Notification";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";

export default function User() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/rest/application/5/view",
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const [headers, setHeaders] = useState([
    "No",
    "Name",
    "User ID",
    "Department/Branch",
    "User Role",
    "Activity",
    "Status",
    "Action",
  ]);
  const [items, setItems] = useState([
    {
      no: 1,
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
    {
      no: 2,
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
    {
      no: 3,
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
  ]);
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
      <div className={styles.header}>User Management</div>
      <SearchBar />
      <UserList items={items} headers={headers} />
    </section>
  );
}
