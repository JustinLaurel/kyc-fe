import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import styles from "./buttonsView.module.scss";

export default function ButtonsView() {
  return (
    <main className={styles.buttonsViewContainer}>
      <ActionButton colorScheme={BUTTON_COLOR_SCHEMES.GREY}>
        Cancel
      </ActionButton>
      <ActionButton colorScheme={BUTTON_COLOR_SCHEMES.GREY}>
        Save as Draft
      </ActionButton>
      <ActionButton isSubmit={true}>Submit</ActionButton>
    </main>
  );
}
