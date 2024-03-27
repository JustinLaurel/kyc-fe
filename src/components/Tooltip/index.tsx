import { Tooltip as MuiTooltip, IconButton } from "@mui/material";
import styles from "./index.module.scss";

interface TooltipProps {
  message: string;
}
export default function Tooltip(props: TooltipProps) {
  const { message } = props;
  return (
    <MuiTooltip
      title={message}
      arrow
      placement="right"
      classes={{
        tooltip: styles.tooltip,
        arrow: styles.tooltipArrow,
      }}
    >
      <IconButton className={styles.iconButton}>
        <img
          className={styles.tooltipIcon}
          src={"/assets/images/icon_tooltip.png"}
          alt={"Tooltip"}
          width={16.67}
          height={16.67}
        />
      </IconButton>
    </MuiTooltip>
  );
}
