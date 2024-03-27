import { Button } from "@mui/material";
import styles from "./index.module.scss";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
export default function TextButton(props: Props) {
  const { onClick, children, className } = props;
  return (
    <Button
      variant="text"
      onClick={onClick}
      classes={{
        root: styles.root + (className ? ` ${className}` : ""),
      }}
    >
      {children}
    </Button>
  );
}
