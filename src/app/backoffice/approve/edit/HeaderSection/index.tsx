import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Update User",
  },
];

export default function HeaderSection() {
  return (
    <HeaderStandard label="Update User" routeItems={routeItems} />
  );
}
