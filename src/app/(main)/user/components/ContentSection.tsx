"use client";

import { useState } from "react";
import FilterView from "./FilterView";
import UsersResultTable from "./UsersResultTable";
import { UserData } from "../type";

interface ContentSectionProps {
  departmentList: ListItem[];
  roleList: ListItem[];
  users: UserData[];
}
export default function ContentSection(props: ContentSectionProps) {
  const { departmentList, roleList, users } = props;
  const [usersResult, setUsersResult] = useState(users);

  async function handleSearchUser(queryParams: Record<string, string>) {
    console.log(`queryParams`, queryParams);
  }

  return (
    <>
      <FilterView
        departmentList={departmentList}
        roleList={roleList}
        onSubmit={handleSearchUser}
      />
      <UsersResultTable users={usersResult} />
    </>
  );
}
