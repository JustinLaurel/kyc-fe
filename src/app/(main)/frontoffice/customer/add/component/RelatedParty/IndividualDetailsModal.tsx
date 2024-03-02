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

interface IndividualDetailsModalProps {
  isOpen: boolean;
  handleClose: () => void;
}
export default function IndividualDetailsModal(
  props: IndividualDetailsModalProps
) {
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
            <FieldInput label={"Type*"} value={"P-Personal"} />
            <FieldAutocomplete
              label={"Country of Residence*"}
              value={"Malaysia"}
            />
            <FieldAutocomplete label={"Hierarchy Level*"} value={"1"} />
            <FieldAutocomplete label={"Occupation*"} value={"Site Manager"} />
            <FieldAutocomplete label={"ID Type"} value={"NRIC"} />
            <FieldInput
              label={"Entity in Which Shares are Held*"}
              value={"AeroGuardians SDN BHD"}
            />
            <FieldInput label={"ID No*"} value={"23000202201"} />
            <FieldAutocomplete label={"Shareholding*"} value={"5%"} />
            <FieldInput label={"Name*"} value={"Bryan Low"} />
            <FieldInput label={"Effective Shareholding*"} value={"85%"} />
            <FieldDropdown label={"Gender*"} value={"Male"} />
            <FieldAutocomplete label={"Relationship"} value={"Shareholder"} />
            <DatePicker label={"Date of Birth*"} value={new Date()} />
            <FieldAutocomplete label={"UBO Flag*"} value={"Y"} />
            <FieldAutocomplete label={"Nationality*"} value={"Malaysian"} />
            <FieldDropdown label={"Screening*"} value={"Yes"} />
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
