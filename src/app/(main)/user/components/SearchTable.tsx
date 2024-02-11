"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

interface UserData {
  no: string;
  name: string;
  userId: string;
  department: string;
  userRole: string;
  activity: string;
  status: string;
}
interface SearchTableProps {
  users: UserData[];
}
export default function SearchTable(props: SearchTableProps) {
  const { users } = props;
  const [tableData, setTableData] = useState([] as any);
  const router = useRouter();

  useEffect(() => {
    function handleViewUser(userId: string) {
      router.push(`/user/view/${userId}`);
    }
  
    const mapped = users.map((item, index) => {
      return {
        no: item.no,
        name: {
          label: item.name,
          onClick: () => handleViewUser(item.userId),
        },
        userId: item.userId,
        department: item.department,
        userRole: item.userRole,
        activity: item.activity,
        status: item.status,
        action:
          index % 2 === 0
            ? [
                {
                  label: "Edit",
                  onClick: () => {},
                  colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
                },
                {
                  label: "Delete",
                  onClick: () => {},
                },
              ]
            : {
                label: "Review",
                onClick: () => {},
              },
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
