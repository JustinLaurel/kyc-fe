import styles from "./index.module.scss";

interface Props {
  title: string;
  placeholder?: string;
  type?: string;
}
export default function FieldInput(props: Props) {
  const { title, placeholder = "", type = "text" } = props;
  return (
    <section className={styles.fieldContainer}>
      <div className={styles.title}>{title}</div>
      <input className={styles.input} placeholder={placeholder} type={type} />
    </section>
  );
}
