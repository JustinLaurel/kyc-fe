import React from "react";
import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Edit User",
  },
];

export default function HeaderSection() {
  return <HeaderStandard label="Edit User" routeItems={routeItems} />;
}
