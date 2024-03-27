import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Add User",
  },
];

export default function HeaderSection() {
  return (
    <HeaderStandard label={"Add User"} routeItems={routeItems}/>
  );
}
