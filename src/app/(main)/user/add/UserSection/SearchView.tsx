"use client";
import Card from "@/components/Card";
import styles from "./index.module.scss";
import FieldInput from "@/components/FieldInput";
import { useState } from "react";
import FieldDropdown from "@/components/FieldDropdown";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useRouter } from "next/navigation";
import { getClient, postClient } from "@/services/clientApi";
import { routes } from "@/config/routes";
import { useForm } from "react-hook-form";

export const INITIAL_SEARCH_FORM = {
  userId: "",
};

interface SearchViewProps {
  onClick: (data: typeof INITIAL_SEARCH_FORM) => void;
}
export default function SearchView(props: SearchViewProps) {
  const { onClick } = props;

  const { register, handleSubmit } = useForm<typeof INITIAL_SEARCH_FORM>({
    defaultValues: {
      ...INITIAL_SEARCH_FORM,
    },
  });

  return (
    <Card header={"User Details"} className={styles.searchView}>
      <div className={styles.searchWrapper}>
        <FieldInput
          label={"User ID*"}
          placeholder={"Enter User ID here"}
          onButtonClick={handleSubmit(onClick)}
          buttonLabel={"Search"}
          {...register("userId")}
        />
      </div>
    </Card>
  );
}
