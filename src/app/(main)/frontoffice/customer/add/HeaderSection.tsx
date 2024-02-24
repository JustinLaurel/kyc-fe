"use client";

import HeaderStandard from "@/components/HeaderWithSteps";
import { useRouter } from "next/navigation";

export default function HeaderSection() {
  const router = useRouter();
  return (
    <HeaderStandard
      label={"New Customer"}
      routeItems={[
        {
          label: "Home",
          onClick: () => {},
        },
        {
          label: "New Customer",
        },
      ]}
      button={{
        label: "Audit History",
        onClick: () =>
          router.push("/frontoffice/customer/view/audit/202005123461"),
      }}
    />
  );
}
