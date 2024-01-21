import React from "react";
import { Table, Card } from "@/components/index";

interface UserTableProps {
  items: Record<string, string>[];
  headers: string[];
  colWidths?: number[];
}
export default function UserTable(props: UserTableProps) {
  const { items, headers, colWidths } = props;
  return (
    <Card header="Search Result">
      <Table items={items} headers={headers} colWidths={colWidths} />
    </Card>
  );
}
