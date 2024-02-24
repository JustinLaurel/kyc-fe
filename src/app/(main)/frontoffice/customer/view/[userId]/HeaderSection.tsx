"use client";
import HeaderStandard from "@/components/HeaderWithSteps";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  function tempRouteHandler() {
    router.push("audit/202005123461");
  }
  return (
    <HeaderStandard
      label={"View Customer"}
      routeItems={routeItems}
      button={{
        label: "Audit History",
        onClick: () => router.push("audit/202005123461"),
      }}
    />
  );
}
