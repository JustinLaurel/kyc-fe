"use client";

import { useForm } from "react-hook-form";
import SearchBar from "./SearchBar";
import SearchTable from "./SearchTable";

const VALIDATION_RULES = {
  name: {
    minLength: 6,
  },
  staffId: {
    minLength: 5,
  },
  status: {
    minLength: 1,
  },
};

interface SearchSectionProps {
  departmentList: ListItem[];
  users: {
    no: string;
    name: string;
    userId: string;
    department: string;
    userRole: string;
    activity: string;
    status: string;
  }[];
}
export default function SearchSection(props: SearchSectionProps) {
  const { departmentList, users } = props;


  async function handleSearchUser() {}


  return (
    <>
      <SearchBar
        departmentList={departmentList}
        onSubmit={handleSearchUser}
      />
      <SearchTable users={users} />
    </>
  );
}
