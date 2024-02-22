"use client";

import HeaderStandard from "@/components/HeaderWithSteps";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <HeaderStandard
      label={"User Management"}
      button={{
        label: "Create New",
        onClick: () => router.push("/backoffice/make/add"),
      }}
    />
  );
}
