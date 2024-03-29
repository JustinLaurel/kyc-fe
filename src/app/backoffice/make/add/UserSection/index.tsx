import { useState } from "react";
import { get, post } from "@/services/api";
import { routes } from "@/config/routes";
import SearchView, { INITIAL_SEARCH_FORM } from "./SearchView";
import AddView, { INITIAL_ADD_FORM } from "./AddView";
import { ListItem } from "@/config/types";

const SWIPE_INDEXES = {
  USER_SEARCH: 0,
  USER_ADD: 1,
};

interface UserSectionProps {
  departmentList: ListItem[];
  approverGroupList: ListItem[];
  roleList: ListItem[];
}
export default function UserSection(props: UserSectionProps) {
  const { departmentList, approverGroupList, roleList } = props;
  // const [swipeIndex, setSwipeIndex] = useState(SWIPE_INDEXES.USER_SEARCH);
  const [swipeIndex, setSwipeIndex] = useState(SWIPE_INDEXES.USER_ADD);
  const [queriedStaff, setQueriedStaff] = useState(null);

  async function searchStaff({ userId }: typeof INITIAL_SEARCH_FORM) {
    const staffData = await get(
      routes.getStaffSimple.replace("{USER_ID}", userId)
    );
    if (staffData.userId) {
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
          roleList={roleList}
          staff={queriedStaff}
        />
      )}
    </>
  );
}
