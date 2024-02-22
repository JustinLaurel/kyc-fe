"use client";
import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Add New User",
  },
];

export default function HeaderSection() {
  return <HeaderStandard label="Add New User" routeItems={routeItems} />;
}
