"use client";

import SearchCard from "./SearchCard";
import SearchTable from "./SearchTable";


interface ContentSectionProps {
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
export default function ContentSection(props: ContentSectionProps) {
  const { departmentList, users } = props;


  async function handleSearchUser(queryParams: Record<string, string>) {
    console.log(`queryParams`, queryParams);
  }

  return (
    <>
      <SearchCard
        departmentList={departmentList}
        onSubmit={handleSearchUser}
      />
      <SearchTable users={users} />
    </>
  );
}
