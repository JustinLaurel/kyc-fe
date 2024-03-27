import styles from "./index.module.scss";

interface SimpleDetailsViewContainerProps {
  detailItems: DetailItem[];
}
export default function SimpleDetailsViewContainer(
  props: SimpleDetailsViewContainerProps
) {
  const { detailItems } = props;
  return (
    <main className={styles.simpleDetailsViewContainer}>
      {detailItems.map((item, index) => (
        <div key={index} className={styles.detailItem}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.value}>{item.value}</div>
        </div>
      ))}
    </main>
  );
}

interface DetailItem {
  label: string;
  value: number | string | React.ReactNode;
}
