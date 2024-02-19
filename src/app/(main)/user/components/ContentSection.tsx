"use client";

import { useState } from "react";
import FilterView from "./FilterView";
import UsersResultTable from "./UsersResultTable";
import { UserData } from "../type";
import { routes } from "@/config/routes";
import { postClient } from "@/services/clientApi";
import Loader from "@/components/Loader";

interface ContentSectionProps {
  departmentList: ListItem[];
  roleList: ListItem[];
  users: UserData[];
}
export default function ContentSection(props: ContentSectionProps) {
  const { departmentList, roleList, users } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [usersResult, setUsersResult] = useState(users);

  async function handleSearchUser(filterValues: Record<string, string>) {
    const payload = {
      ...filterValues,
      page: 0,
      itemsPerPage: 10,
      sortBy: "",
    };
    try {
      setIsLoading(true);
      const users = await postClient(routes.searchUser, payload);
      setUsersResult(users?.items ?? []);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <Loader isLoading={isLoading} />
      <FilterView
        departmentList={departmentList}
        roleList={roleList}
        onSubmit={handleSearchUser}
      />
      <UsersResultTable users={usersResult} />
    </>
  );
}
