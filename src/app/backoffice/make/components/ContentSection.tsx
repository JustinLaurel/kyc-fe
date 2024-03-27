import { useState } from "react";
import FilterView from "./FilterView";
import UsersResultTable from "./UsersResultTable";
import { SortableColumn } from "../type";
import { routes } from "@/config/routes";
import { post } from "@/services/api";
import Loader from "@/components/Loader";
import { useForm } from "react-hook-form";
import { SORT_ORDER } from "@/config/types";
import { useSuspenseQueries } from "@tanstack/react-query";
import { getListDepartments, getListRoles } from "@/src/services/query";

export const INITIAL_SEARCH_FORM = {
  name: "",
  role: "",
  userId: "",
  status: null,
  department: null,
} as const;

export default function ContentSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [usersResult, setUsersResult] = useState(null);
  const formHook = useForm<typeof INITIAL_SEARCH_FORM>({
    defaultValues: {
      ...INITIAL_SEARCH_FORM,
    },
  });
  const { handleSubmit, reset } = formHook;

  const [{ data: departmentList }, { data: roleList }] = useSuspenseQueries({
    queries: [getListDepartments(), getListRoles()],
  });

  async function handleSearchUser(filterValues: typeof INITIAL_SEARCH_FORM) {
    const payload = {
      ...filterValues,
      page: 0,
      itemsPerPage: 10,
      sortBy: null,
      sortOrder: null,
    };
    try {
      setIsLoading(true);
      const users = await post(routes.searchUser, payload);
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

  async function handleRequestSort(sortBy: SortableColumn, order: SORT_ORDER) {
    console.log(`sortBy`, sortBy);
    console.log(`order`, order);
    // const payload = {
    //   ...getValues(),
    //   page: 0,
    //   itemsPerPage: 10,
    //   sortBy: sortBy,
    //   sortOrder: order,
    // };
    // try {
    //   setIsLoading(true);
    //   const users = await postClient(routes.searchUser, payload);
    //   setUsersResult(users?.items ?? []);
    // } catch (error: any) {
    //   console.error(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
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
      <UsersResultTable
        users={usersResult}
        handleHeaderClick={handleRequestSort}
      />
    </>
  );
}
