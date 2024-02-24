"use client";
import HeaderStandard from "@/components/HeaderWithSteps";

export default function HeaderSection() {
  return (
    <HeaderStandard
      label={"View Customer"}
      routeItems={[
        {
          label: "Home",
          onClick: () => {},
        },
        {
          label: "View Customer",
          onClick: () => {},
        },
        {
          label: "View Audit History",
        },
      ]}
    />
  );
}
