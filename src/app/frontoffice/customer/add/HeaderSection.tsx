
import HeaderStandard from "@/components/HeaderWithSteps";
import { useNavigate } from "react-router-dom";

export default function HeaderSection() {
  const navigate = useNavigate();
  return (
    <HeaderStandard
      label={"New Customer"}
      routeItems={[
        {
          label: "Home",
          onClick: () => {},
        },
        {
          label: "New Customer",
        },
      ]}
      button={{
        label: "Audit History",
        onClick: () =>
          navigate("/frontoffice/customer/view/audit/202005123461"),
      }}
    />
  );
}
