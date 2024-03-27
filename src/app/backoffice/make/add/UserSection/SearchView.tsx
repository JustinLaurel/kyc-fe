import Card from "@/components/Card";
import styles from "./index.module.scss";
import FieldInput from "@/components/FieldInput";
import { useForm } from "react-hook-form";
import StyledFieldContainer from "@/components/StyledFieldContainer";

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
      <StyledFieldContainer singleColumn={true}>
        <FieldInput
          label={"User ID*"}
          placeholder={"Enter User ID here"}
          onButtonClick={handleSubmit(onClick)}
          buttonLabel={"Search"}
          {...register("userId")}
        />
      </StyledFieldContainer>
    </Card>
  );
}
