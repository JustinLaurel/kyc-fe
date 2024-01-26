import styles from "./index.module.scss";
import ActionButton from "@/components/ActionButton";

interface Props {
  title: string;
  placeholder?: string;
  type?: string;
  onButtonClick?: () => void;
  buttonLabel?: string;
}
export default function FieldInput(props: Props) {
  const {
    title,
    placeholder = "",
    type = "text",
    onButtonClick = null,
    buttonLabel = null,
  } = props;
  return (
    <section className={styles.fieldContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.inputWrapper}>
        <input className={styles.input} placeholder={placeholder} type={type} />
        {onButtonClick && buttonLabel && (<ActionButton className={styles.button} onClick={onButtonClick}>{buttonLabel}</ActionButton>)}
      </div>
    </section>
  );
}
