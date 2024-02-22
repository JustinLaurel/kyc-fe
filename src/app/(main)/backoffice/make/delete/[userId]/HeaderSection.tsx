"use client";
import React from "react";
import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Delete User",
  },
];

interface HeaderSectionProps {}
export default function HeaderSection() {
  return <HeaderStandard label="Delete User" routeItems={routeItems} />;
}
