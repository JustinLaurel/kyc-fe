import styles from "./index.module.scss";

interface StyledFieldContainerProps {
  singleColumn?: boolean;
  children: React.ReactNode;
}
export default function StyledFieldContainer(props: StyledFieldContainerProps) {
  const { singleColumn = false, children } = props;
  return (
    <main
      className={
        styles.styledFieldContainer +
        (singleColumn ? ` ${styles.singleColumn}` : "")
      }
    >
      {children}
    </main>
  );
}
