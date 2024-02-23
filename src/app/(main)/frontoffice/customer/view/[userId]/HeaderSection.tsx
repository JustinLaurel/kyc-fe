"use client";
import HeaderStandard from "@/components/HeaderWithSteps";

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
  return (
    <HeaderStandard
      label={"View Customer"}
      routeItems={routeItems}
      button={{
        label: "Audit History",
        onClick: () => {},
      }}
    />
  );
}
