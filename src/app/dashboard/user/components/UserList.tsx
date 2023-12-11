import React from "react";
import Table from "../../../component/Table";
import { StringNumberObject } from "../../../types";
import Card from "@/app/component/Card";

interface UserTableProps {
  items: StringNumberObject[];
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
