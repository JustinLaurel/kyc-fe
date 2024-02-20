"use client";

import { useState } from "react";
import FilterView from "./FilterView";
import UsersResultTable from "./UsersResultTable";
import { UserData } from "../type";
import { routes } from "@/config/routes";
import { postClient } from "@/services/clientApi";
import Loader from "@/components/Loader";
import { useForm } from "react-hook-form";

export const INITIAL_SEARCH_FORM = {
  name: "",
  role: "",
  userId: "",
  status: null,
  department: null,
} as const;

interface ContentSectionProps {
  departmentList: ListItem[];
  roleList: ListItem[];
  users: UserData[];
}
export default function ContentSection(props: ContentSectionProps) {
  const { departmentList, roleList, users } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [usersResult, setUsersResult] = useState(users);
  const formHook = useForm<typeof INITIAL_SEARCH_FORM>({
    defaultValues: {
      ...INITIAL_SEARCH_FORM,
    },
  });
  const { handleSubmit, reset } = formHook;

  async function handleSearchUser(filterValues: typeof INITIAL_SEARCH_FORM) {
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

  function handleClearFilter() {
    reset({ ...INITIAL_SEARCH_FORM });
  }

  async function handleHeaderClick(sortBy: string) {
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <FilterView
        departmentList={departmentList}
        roleList={roleList}
        handleSearch={handleSubmit(handleSearchUser)}
        handleClear={handleClearFilter}
        formHook={formHook}
      />
      <UsersResultTable users={usersResult} />
    </>
  );
}
