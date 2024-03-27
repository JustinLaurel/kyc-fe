import HeaderStandard from "@/components/HeaderWithSteps";
import { useNavigate } from "react-router-dom";

const routeItems = [
  {
    label: "Home",
    onClick: () => {},
  },
  {
    label: "View Customer",
  },
];

export default function HeaderSection() {
  const navigate = useNavigate();
  return (
    <HeaderStandard
      label={"View Customer"}
      routeItems={routeItems}
      button={{
        label: "Audit History",
        onClick: () => navigate("audit/202005123461"),
      }}
    />
  );
}
