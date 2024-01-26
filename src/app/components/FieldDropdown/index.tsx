import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import styles from "./index.module.scss";

interface Props {
  items: {
    label: string;
    value: string;
  }[];
  title?: string;
  placeholder?: string;
}
export default function FieldDropdown(props: Props) {
  const { items, title, placeholder = "" } = props;
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className={styles.fieldContainer}>
      {title && <div className={styles.title}>{title}</div>}
      <Select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value as string)}
        disableUnderline
        displayEmpty
        renderValue={() =>
          items.find((item) => item.value === selectedValue)?.label || (
            <div className={styles.placeholder}>{placeholder}</div>
          )
        }
        variant={"standard"}
        classes={{
          root: styles.root,
          select: styles.select,
          outlined: styles.outlined,
          icon: styles.icon,
        }}
      >
        {Array.isArray(items) &&
          items.length > 0 &&
          items.map((item, index) => {
            return (
              <MenuItem
                key={index}
                value={item.value}
                className={styles.dropdownItem}
              >
                {item.label}
              </MenuItem>
            );
          })}
      </Select>
    </div>
  );
}
