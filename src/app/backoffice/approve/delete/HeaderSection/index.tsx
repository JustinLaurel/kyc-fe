import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Delete User",
  },
];

export default function HeaderSection() {
  return <HeaderStandard label="Delete User" routeItems={routeItems} />;
}
