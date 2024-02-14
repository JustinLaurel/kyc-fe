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
import { Control, Controller, FieldError } from "react-hook-form";
import React from "react";

interface FieldAutocompleteProps {
  items: ListItem[];
  title?: string;
  placeholder?: string;
  error?: FieldError;
  name: string;
  control: Control<any, any>;
}
const FieldAutocomplete = React.forwardRef<
  HTMLSelectElement,
  FieldAutocompleteProps
>(function FieldAutocompleteInternal(props, ref) {
  const {
    items,
    title,
    placeholder = "",
    error = null,
    control,
    ...registerProps
  } = props;

  return (
    <div className={styles.fieldContainer}>
      {title && <div className={styles.title}>{title}</div>}
      <Controller
        control={control}
        {...registerProps}
        defaultValue={null}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
            <Autocomplete
              ref={ref}
              options={items}
              classes={{
                root: styles.root,
                input: styles.input,
                endAdornment: styles.endAdornment,
              }}
              PaperComponent={PaperComponentForward}
              disablePortal
              value={
                items
                  ? items.find((item) => item.value === value) ?? null
                  : null
              }
              onChange={(_, selectedItem) => {
                onChange(selectedItem ? selectedItem.value : null);
              }}
              onBlur={onBlur}
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
              renderOption={(props, option) => {
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
          );
        }}
      />
    </div>
  );
});

// Required for popper dropdown animation. See: https://github.com/mui/material-ui/issues/19262
function PaperComponent(paperProps: any, ref: any) {
  return (
    <Grow in>
      <Paper {...paperProps} ref={ref} />
    </Grow>
  );
}
const PaperComponentForward = forwardRef(PaperComponent);

export default FieldAutocomplete;
