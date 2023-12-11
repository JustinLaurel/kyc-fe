"use client";
import React, { useState } from 'react';
import Table from "./component/Table";
import SearchBar from './dashboard/user/SearchBar';
import { StringNumberObject } from './types';
import UserList from './dashboard/user/UserList';

export default function Home() {
  const [headers, setHeaders] = useState([
    "No",
    "Name",
    "User ID",
    "Department/Branch",
    "User Role",
    "Activity",
    "Status",
    "Action"
  ])
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
  ])
  return (
    <div>
      <SearchBar />
      <UserList items={items} headers={headers} />
    </div>
  )
}
