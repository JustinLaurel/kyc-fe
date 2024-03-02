"use client";
import Card from "@/components/Card";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldInput from "@/components/FieldInput";
import Modal from "@/components/Modal";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import styles from "./index.module.scss";
import DatePicker from "@/components/DatePicker";
import FieldDropdown from "@/components/FieldDropdown";
import FieldPhone from "@/components/FieldPhone";
import FieldTextArea from "@/components/FieldTextArea";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";

interface AddModalProps {
  isOpen: boolean;
  handleClose: () => void;
}
export default function AddModal(props: AddModalProps) {
  const { isOpen, handleClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      className={styles.uboDetailsModal}
    >
      <main className={styles.uboDetailsModalContent}>
        <Card header={"Related Party Details"}>
          <StyledFieldContainer>
            <FieldInput label={"Type*"} value={"C-Corporate"} />
            <FieldAutocomplete
              label={"Entity in Which Shares are Held*"}
              value={"AeroGuardians SDN BHD"}
            />
            <FieldAutocomplete label={"Hierarchy Level*"} value={"1"} />
            <FieldInput label={"Shareholding*"} value={"85%"} />
            <FieldAutocomplete label={"ID Type"} value={"BRN"} />
            <FieldInput label={"Effective Shareholding"} value={"85%"} />
            <FieldInput label={"ID No"} value={"23000202201"} />
            <FieldAutocomplete label={"Relationship*"} value={"Shareholder"} />
            <FieldInput label={"Name*"} value={"XYZ Sdn Bhd"} />
            <FieldAutocomplete label={"UBO Flag*"} value={"Y"} />
            <DatePicker label={"Date of Incorporation*"} value={new Date()} />
            <FieldAutocomplete label={"Screening"} value={"Yes"} />
            <FieldAutocomplete label={"Geography*"} value={"Malaysia"} />
            <FieldDropdown label={"Validity"} value={"Pending"} />
            <FieldAutocomplete
              label={"Nature of Business*"}
              value={"Manufacturing"}
            />
            <FieldDropdown label={"Status"} value={"Pending"} />
            <FieldAutocomplete
              label={"Country of Incorporation*"}
              value={"Malaysia"}
            />
          </StyledFieldContainer>
        </Card>
        <Card header={"Contact Details"}>
          <StyledFieldContainer>
            <FieldInput label={"Email*"} value={"bryanlow@gmail.com"} />
            <FieldPhone
              label={"Foreign Phone"}
              value={{
                countryCode: "+60",
                number: "123456789",
              }}
            />
            <FieldPhone
              label={"Mobile Phone*"}
              value={{
                countryCode: "+60",
                number: "123456789",
              }}
            />
            <FieldPhone
              label={"Fax Phone"}
              value={{
                countryCode: "+60",
                number: "123456789",
              }}
            />
            <FieldPhone
              label={"Home Phone"}
              value={{
                countryCode: "+60",
                number: "123456789",
              }}
            />
            <FieldTextArea
              gridRowSpan={2}
              rows={5}
              label={"Registered Address"}
              value={`Lot 1,\nLorong 1,\nJalan Segambut,\n51200, Segambut,\nWilayah Persekutuan Kuala Lumpur, Malaysia`}
            />
            <FieldPhone
              label={"Office Phone"}
              value={{
                countryCode: "+60",
                number: "123456789",
              }}
            />
          </StyledFieldContainer>
        </Card>
        <Card header={"Remarks"}>
          <FieldTextArea
            label={"Remarks"}
            value={"UBO no longer valid."}
            characterCount
          />
        </Card>

        <ActionButton
          onClick={handleClose}
          colorScheme={BUTTON_COLOR_SCHEMES.GREY}
        >
          Back
        </ActionButton>
      </main>
    </Modal>
  );
}
