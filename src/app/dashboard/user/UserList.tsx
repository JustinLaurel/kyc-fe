import React from "react";
import Table from "../../component/Table";
import { StringNumberObject } from "../../types";

interface UserTableProps {
  items: StringNumberObject[];
  headers: string[];
}
export default function UserTable(props: UserTableProps) {
  const { items, headers } = props;
  return (
    <main>
      <section>Search Result</section>
      <Table items={items} headers={headers} />
    </main>
  );
}
