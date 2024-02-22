import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/navigation";

export default function SearchListing() {
  const router = useRouter();

  const FAKE_DATA = [
    {
      no: "1",
      idType: "BRN",
      idNo: {
        label: "202005123461",
        onClick: () => router.push("customer/view/202005123461"),
        isTextButton: true,
      },
      customerType: "C_Corporate",
      dateOfIncorporation: "23/08/2023",
      resultStatus: "Status: Processing (NR)",
      errorMessage: "Unable to connect to NR",
      action: "",
    },
    {
      no: "2",
      idType: "BRN",
      idNo: {
        label: "202005123461",
        onClick: () => router.push("customer/view/202005123461"),
        isTextButton: true,
      },
      customerType: "C_Corporate",
      dateOfIncorporation: "23/08/2023",
      resultStatus: "Status: Processing (NR)",
      errorMessage: "Unable to connect to NR",
      action: [
        {
          label: "Retry",
          onClick: () => {},
        },
      ],
    },
    {
      no: "3",
      idType: "BRN",
      idNo: {
        label: "202005123461",
        onClick: () => router.push("customer/view/202005123461"),
        isTextButton: true,
      },
      customerType: "C_Corporate",
      dateOfIncorporation: "23/08/2023",
      resultStatus: "Status: Processing (NR)",
      errorMessage: "Unable to connect to NR",
      action: [
        {
          label: "View/Update",
          onClick: () => {},
        },
      ],
    },
  ];

  return (
    <Card
      header={"Search Listing"}
      headerButton={{
        label: "Refresh Status",
        onClick: () => {},
      }}
    >
      <DataTable
        items={FAKE_DATA}
        headers={[
          "No",
          {
            label: "ID Type",
            onClick: () => {},
          },
          {
            label: "ID No",
            onClick: () => {},
          },
          {
            label: "Customer Type",
            onClick: () => {},
          },
          {
            label: "Date of Incorporation",
            onClick: () => {},
          },
          {
            label: "Result Status",
            onClick: () => {},
          },
          {
            label: "Error Message",
            onClick: () => {},
          },
          "Action",
        ]}
        colWidths={[24, 80, 184, 144, 136, 184, 184, 184]}
      />
    </Card>
  );
}
