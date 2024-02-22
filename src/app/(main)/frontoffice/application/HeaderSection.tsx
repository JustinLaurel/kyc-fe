"use client";
import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "Home",
    onClick: () => {},
  },
  {
    label: "Application Listing",
  },
];

export default function HeaderSection() {
  return (
    <HeaderStandard
      label="Application Listing"
      routeItems={routeItems}
      button={{
        label: "Create New",
        onClick: () => {},
      }}
    />
  );
}
