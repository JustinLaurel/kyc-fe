"use client";
import { useState } from "react";
import { getClient, postClient } from "@/services/clientApi";
import { routes } from "@/config/routes";
import SearchView, { INITIAL_SEARCH_FORM } from "./SearchView";
import AddView, { INITIAL_ADD_FORM } from "./AddView";

const SWIPE_INDEXES = {
  USER_SEARCH: 0,
  USER_ADD: 1,
};

interface UserSectionProps {
  departmentList: ListItem[];
  approverGroupList: ListItem[];
}
export default function UserSection(props: UserSectionProps) {
  const { departmentList, approverGroupList } = props;
  // const [swipeIndex, setSwipeIndex] = useState(SWIPE_INDEXES.USER_SEARCH);
  const [swipeIndex, setSwipeIndex] = useState(SWIPE_INDEXES.USER_ADD);
  const [queriedStaff, setQueriedStaff] = useState(null);

  async function searchStaff({ staffId }: typeof INITIAL_SEARCH_FORM) {
    const staffData = await getClient(
      routes.getStaffSimple.replace("{STAFF_ID}", staffId)
    );
    if (staffData.staffId) {
      setQueriedStaff(staffData);
      setSwipeIndex(SWIPE_INDEXES.USER_ADD);
    }
  }

  return (
    <>
      {swipeIndex === SWIPE_INDEXES.USER_SEARCH && (
        <SearchView onClick={searchStaff} />
      )}
      {swipeIndex === SWIPE_INDEXES.USER_ADD && (
        <AddView
          departmentList={departmentList}
          approverGroupList={approverGroupList}
          staff={queriedStaff}
        />
      )}
    </>
  );
}
