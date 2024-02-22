import Card from "@/components/Card";
import FieldInput from "@/components/FieldInput";

export default function SearchCustomer() {
  return (
    <Card hasSeparator={false} header={"Search Existing Customer"}>
      <FieldInput
        onButtonClick={() => {}}
        buttonLabel={"Search"}
      />
    </Card>
  );
}
