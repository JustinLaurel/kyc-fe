import {
  Autocomplete,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import styles from "./index.module.scss";
import Image from "next/image";

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

  return (
    <div className={styles.fieldContainer}>
      {title && <div className={styles.title}>{title}</div>}
      <Autocomplete
        options={items}
        classes={{
          root: styles.root,
          input: styles.input,
        }}
        fullWidth={true}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant={"standard"}
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Image
                      src={`/assets/images/icon_search.png`}
                      alt={"Search Icon"}
                      width={24}
                      height={24}
                    />
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
        renderOption={(props, option) => {
          return (
            <MenuItem {...props} key={(props as any).key} className={styles.dropdownItem}>
              {option.label}
            </MenuItem>
          );
        }}
      />
    </div>
  );
}
