"use client";
import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "Home",
    onClick: () => {},
  },
  {
    label: "Customer KYC Details",
  },
];
export default function HeaderSection() {
  return (
    <HeaderStandard label={"Customer KYC Details"} routeItems={routeItems} />
  );
}
