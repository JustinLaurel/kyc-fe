"use client";
import React, { useState } from 'react';
import Table from "./component/Table";
import SearchBar from './SearchBar';

export default function Home() {
  const [items, setItems] = useState([
    {
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
    {
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
    {
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
      <Table items={items} />
    </div>
  )
}
