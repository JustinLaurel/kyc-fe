"use client";
import Card from "@/components/Card";
import styles from "./usersection.module.scss";
import FieldInput from "@/components/FieldInput";
import { useState } from "react";
import FieldDropdown from "@/components/FieldDropdown";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useRouter } from "next/navigation";

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
  const [swipeIndex, setSwipeIndex] = useState(SWIPE_INDEXES.USER_ADD);

  return (
    <>
      {swipeIndex === SWIPE_INDEXES.USER_SEARCH && (
        <UserSearch onClick={() => {}} />
      )}
      {swipeIndex === SWIPE_INDEXES.USER_ADD && (
        <UserAdd
          departmentList={departmentList}
          approverGroupList={approverGroupList}
        />
      )}
    </>
  );
}

interface UserSearchProps {
  onClick: () => void;
}
function UserSearch(props: UserSearchProps) {
  const { onClick } = props;
  return (
    <Card header={"User Details"} className={styles.userSearchContainer}>
      <div className={styles.searchWrapper}>
        <FieldInput
          label={"User ID*"}
          placeholder={"Enter User ID here"}
          onButtonClick={onClick}
          buttonLabel={"Search"}
        ></FieldInput>
      </div>
    </Card>
  );
}

interface UserAddProps {
  departmentList: ListItem[];
  approverGroupList: ListItem[];
}
function UserAdd(props: UserAddProps) {
  const { departmentList, approverGroupList } = props;
  const router = useRouter();

  return (
    <Card
      header={"User Details"}
      className={styles.userAddContainer}
      buttons={[
        {
          label: "Cancel",
          onClick: () => router.back(),
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
        },
        {
          label: "Submit",
          onClick: () => {},
        },
      ]}
    >
      <div className={styles.addWrapper}>
        <FieldInput
          label={"User ID*"}
          onButtonClick={() => {}}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
        />
        <FieldDropdown
          items={departmentList}
          title={"Department/Branch*"}
          placeholder={"Please Select"}
        />
        <FieldInput label={"Name*"} placeholder={"Enter Name here"} />
        <FieldDropdown
          items={[
            {
              label: "Role 1",
              value: "role1",
            },
            {
              label: "Role 2",
              value: "role2",
            },
          ]}
          title={"User Role*"}
          placeholder={"Please Select"}
        />
        <FieldInput label={"Email ID*"} placeholder={"Enter Email ID here"} />
        <FieldDropdown
          title={"Approver Group*"}
          items={approverGroupList}
          placeholder={"Please Select"}
        />
      </div>
    </Card>
  );
}
