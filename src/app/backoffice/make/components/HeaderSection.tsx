import HeaderStandard from "@/components/HeaderWithSteps";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderStandard
      label={"User Management"}
      button={{
        label: "Create New",
        onClick: () => navigate("/backoffice/make/add"),
      }}
    />
  );
}
