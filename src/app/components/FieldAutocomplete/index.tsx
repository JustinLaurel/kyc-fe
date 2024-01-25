import {
  Autocomplete,
  Grow,
  InputAdornment,
  MenuItem,
  Paper,
  Popper,
  TextField,
} from "@mui/material";
import styles from "./index.module.scss";
import Image from "next/image";
import { forwardRef } from "react";

interface Props {
  items: {
    label: string;
    value: string;
  }[];
  title?: string;
  placeholder?: string;
}
export default function FieldAutocomplete(props: Props) {
  const { items, title, placeholder = "" } = props;

  return (
    <div className={styles.fieldContainer}>
      {title && <div className={styles.title}>{title}</div>}
      <Autocomplete
        options={items}
        classes={{
          root: styles.root,
          input: styles.input,
          endAdornment: styles.endAdornment,
        }}
        PaperComponent={PaperComponentForward}
        disablePortal
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
                  <InputAdornment
                    position="start"
                    className={styles.searchIcon}
                  >
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
        renderOption={(props, option, state) => {
          return (
            <MenuItem
              {...props}
              key={(props as any).key}
              classes={{
                root: styles.dropdownItem,
              }}
            >
              {option.label}
            </MenuItem>
          );
        }}
      />
    </div>
  );
}

// Required for popper dropdown animation. See: https://github.com/mui/material-ui/issues/19262
function PaperComponent(paperProps: any, ref: any) {
  return (
    <Grow in>
      <Paper {...paperProps} ref={ref} />
    </Grow>
  );
}
const PaperComponentForward = forwardRef(PaperComponent);
