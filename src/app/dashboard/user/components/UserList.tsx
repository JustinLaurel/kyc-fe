import React from "react";
import { Table, Card } from "@/components/index";

interface UserTableProps {
  items: Record<string, string>[];
  headers: string[];
}
export default function UserTable(props: UserTableProps) {
  const { items, headers } = props;
  return (
    <Card header="Search Result">
      <Table items={items} headers={headers} />
    </Card>
  );
}
