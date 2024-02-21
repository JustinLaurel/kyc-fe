"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SORT_ORDER } from "@/config/types";
import { SortableColumn, UserData } from "../type";

const COL_WIDTHS = [0.3, 3, 1.5, 2, 2, 2, 1, 1.5];

interface UsersResultTable {
  users: UserData[] | null;
  handleHeaderClick: (sortBy: SortableColumn, order: SORT_ORDER) => void;
}
export default function UsersResultTable(props: UsersResultTable) {
  const { users, handleHeaderClick } = props;
  const [tableData, setTableData] = useState(null);
  const router = useRouter();

  const HEADERS = [
    "No",
    {
      label: "Name",
      onClick: (order: SORT_ORDER) => handleHeaderClick("name", order),
    },
    {
      label: "User ID",
      onClick: (order: SORT_ORDER) => handleHeaderClick("userId", order),
    },
    {
      label: "Department/Branch",
      onClick: (order: SORT_ORDER) => handleHeaderClick("department", order),
    },
    {
      label: "User Role",
      onClick: (order: SORT_ORDER) => handleHeaderClick("userRole", order),
    },
    {
      label: "Activity",
      onClick: (order: SORT_ORDER) => handleHeaderClick("activity", order),
    },
    {
      label: "Status",
      onClick: (order: SORT_ORDER) => handleHeaderClick("name", order),
    },
    "Action",
  ];

  useEffect(() => {
    if (!users) return;
    function handleViewUser(userId: string) {
      router.push(`/user/approve/view/${userId}`);
    }

    const mapped = users.map((item, index) => {
      const actions = [];
      if (item.actionsAllowed.canReview) {
        actions.push({
          label: "Review",
          onClick: () => router.push(`/user/approve/add/${item.userId}`),
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
    setTableData(mapped as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, users]);

  return (
    tableData && (
      <Card header="Search Result">
        <DataTable items={tableData} headers={HEADERS} colWidths={COL_WIDTHS} />
      </Card>
    )
  );
}
