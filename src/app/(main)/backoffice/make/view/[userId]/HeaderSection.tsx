"use client";
import React from "react";
import HeaderStandard from "@/components/HeaderWithSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "View User",
  },
];

export default function HeaderSection() {
  return <HeaderStandard label="View User" routeItems={routeItems} />
}