import styles from "./index.module.scss";
import { Backdrop, CircularProgress } from "@mui/material";

interface LoaderProps {
  isLoading: boolean;
}
export default function Loader(props: LoaderProps) {
  const { isLoading } = props;
  return isLoading ? (
    <div className={styles.loaderContainer}>
      <CircularProgress
        className={styles.loader}
        classes={{ svg: styles.loader }}
      />
      <Backdrop open={isLoading} />
    </div>
  ) : (
    ""
  );
}
