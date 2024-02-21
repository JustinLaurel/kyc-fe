"use client";
import React from "react";
import RouteSteps from "@/components/RouteSteps";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Delete User",
  },
];

interface RouteStepsViewProps {}
export default function RouteStepsView() {
  return <RouteSteps routeItems={routeItems} />
}