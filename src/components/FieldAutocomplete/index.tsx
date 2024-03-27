import {
  Autocomplete,
  Grow,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  UseAutocompleteProps,
} from "@mui/material";
import styles from "./index.module.scss";
import { forwardRef } from "react";
import {
  Control,
  Controller,
  FieldError,
  Noop,
  UseFormRegisterReturn,
} from "react-hook-form";
import React from "react";
import { ListItem } from "@/config/types";

interface UncontrolledProps {
  value: string;
  label?: string;
  placeholder?: string;
}
interface ControlledProps
  extends Omit<UncontrolledProps, "value">,
    UseFormRegisterReturn {
  items: ListItem[];
  error?: FieldError;
  control: Control<any, any>;
}
const FieldAutocomplete = React.forwardRef<
  HTMLSelectElement,
  UncontrolledProps | ControlledProps
>(function FieldAutocompleteInternal(props, ref) {
  const isControlled = "control" in props;

  return (
    <div className={styles.fieldContainer}>
      {props.label && <div className={styles.title}>{props.label}</div>}
      {isControlled ? (
        <Controller
          control={props.control}
          name={props.name}
          defaultValue={null}
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <BaseAutocomplete
                items={props.items}
                placeholder={props.placeholder}
                onChange={(_, selectedItem) => {
                  onChange(selectedItem ? selectedItem.value : null);
                }}
                onBlur={onBlur}
                value={
                  props.items
                    ? props.items.find((item) => item.value === value) ?? null
                    : null
                }
                ref={ref}
              />
            );
          }}
        />
      ) : (
        <BaseAutocomplete
          value={props.value}
          placeholder={props.placeholder}
          ref={ref}
        />
      )}
    </div>
  );
});

interface BaseAutocompleteProps<T> {
  placeholder?: string;
  value: T;
}
interface ControlledBaseProps
  extends BaseAutocompleteProps<
    UseAutocompleteProps<ListItem, false, false, false>["value"]
  > {
  items: ListItem[];
  onChange: UseAutocompleteProps<ListItem, false, false, false>["onChange"];
  onBlur: Noop;
}

const BaseAutocomplete = React.forwardRef<
  HTMLSelectElement,
  BaseAutocompleteProps<string> | ControlledBaseProps
>(function BaseAutocompleteInternal(props, ref) {
  const { placeholder, value, ...controlProps } = props;

  const isControlled = "onChange" in props;
  return (
    <Autocomplete
      ref={ref}
      options={isControlled ? props.items : []}
      value={value as any}
      classes={{
        root: styles.root,
        input: styles.input,
        endAdornment: styles.endAdornment,
      }}
      PaperComponent={PaperComponentForward}
      disablePortal
      {...controlProps}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            variant={"standard"}
            placeholder={placeholder ?? "Please Select"}
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start" className={styles.searchIcon}>
                  <img
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
            key={option.value}
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
});

export default FieldAutocomplete;

// Required for popper dropdown animation. See: https://github.com/mui/material-ui/issues/19262
function PaperComponent(paperProps: any, ref: any) {
  return (
    <Grow in>
      <Paper {...paperProps} ref={ref} />
    </Grow>
  );
}
const PaperComponentForward = forwardRef(PaperComponent);
