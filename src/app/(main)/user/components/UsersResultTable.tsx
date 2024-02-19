"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserData } from "../type";

const HEADERS = [
  "No",
  {
    label: "Name",
    onClick: () => {},
  },
  {
    label: "User ID",
    onClick: () => {},
  },
  {
    label: "Department/Branch",
    onClick: () => {},
  },
  {
    label: "User Role",
    onClick: () => {},
  },
  {
    label: "Activity",
    onClick: () => {},
  },
  {
    label: "Status",
    onClick: () => {},
  },
  "Action",
];
const COL_WIDTHS = [0.3, 3, 1.5, 2, 2, 2, 1, 1.5];

interface UsersResultTable {
  users: UserData[];
}
export default function UsersResultTable(props: UsersResultTable) {
  const { users } = props;
  const [tableData, setTableData] = useState([] as any);
  const router = useRouter();

  useEffect(() => {
    function handleViewUser(userId: string) {
      router.push(`/user/view/${userId}`);
    }
  
    const mapped = users.map((item, index) => {
      const actions = [];
      if (item.actionsAllowed.canDelete) {
        actions.push({
          label: "Edit",
          onClick: () => {},
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        });
      }
      if (item.actionsAllowed.canEdit) {
        actions.push({
          label: "Delete",
          onClick: () => {},
        });
      }
      if (item.actionsAllowed.canReview) {
        actions.push({
          label: "Review",
          onClick: () => {},
        });
      }
      return {
        no: item.no,
        name: {
          label: item.name,
          onClick: () => handleViewUser(item.userId),
          isTextButton: true,
        },
        userId: item.userId,
        department: item.department,
        userRole: item.userRole,
        activity: item.activity,
        status: item.status,
        action: actions,
      };
    });
    setTableData(mapped);
  }, [users]);

  return (
    <Card header="Search Result">
      <DataTable items={tableData} headers={HEADERS} colWidths={COL_WIDTHS} />
    </Card>
  );
}
