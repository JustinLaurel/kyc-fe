import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { useNavigate } from "react-router-dom";

export default function SearchListing() {
  const navigate = useNavigate();

  const FAKE_DATA = [
    {
      idType: "BRN",
      idNo: {
        label: "202005123461",
        onClick: () => navigate("view/202005123461"),
        isTextButton: true,
      },
      customerType: "C_Corporate",
      dateOfIncorporation: "23/08/2023",
      resultStatus: "Status: Processing (NR)",
      errorMessage: "Unable to connect to NR",
      action: "",
    },
    {
      idType: "BRN",
      idNo: {
        label: "202005123461",
        onClick: () => navigate("view/202005123461"),
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
      idType: "BRN",
      idNo: {
        label: "202005123461",
        onClick: () => navigate("customer/view/202005123461"),
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
        colWidths={[80, 184, 144, 136, 184, 184, 184]}
      />
    </Card>
  );
}
