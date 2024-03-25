"use client";
import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";
import { useForm } from "react-hook-form";

export default function SearchCustomer() {
  const { register } = useForm({
    defaultValues: {
      userId: "",
    },
  });
  return (
    <Card hasSeparator={false} header={"Search Existing Customer"}>
      <FieldInput
        placeholder={"Search by Customer Name or ID No"}
        onButtonClick={() => {}}
        buttonLabel={"Search"}
        {...register("userId")}
      />
    </Card>
  );
}
