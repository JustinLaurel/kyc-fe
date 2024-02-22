"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";

export default function Filter() {
  return (
    <Card
      header="Search"
      buttons={[
        {
          label: "Clear",
          onClick: () => {},
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
        {
          label: "Search",
          onClick: () => {},
        },
      ]}
    >
      <div>Hello</div>
    </Card>
  );
}
