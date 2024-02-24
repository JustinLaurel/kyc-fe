"use client";
import { Select, MenuItem } from "@mui/material";
import styles from "./index.module.scss";
import React from "react";
import {
  Control,
  Controller,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ListItem } from "@/config/types";

interface FieldDropdownProps extends UseFormRegisterReturn {
  items: ListItem[];
  label?: string;
  placeholder?: string;
  error?: FieldError;
  control: Control<any, any>;
  className?: string;
}
// To suppress warning from react-hook-form's register trying to pass a ref to a functional component
const FieldDropdown = React.forwardRef<HTMLSelectElement, FieldDropdownProps>(
  function FieldDropdownInternal(props, ref) {
    const {
      items,
      label,
      placeholder = "Please Select",
      error = null,
      control,
      className,
      ...registerProps
    } = props;

    return (
      <div
        className={styles.fieldContainer + (className ? ` ${className}` : "")}
      >
        {label && <div className={styles.title}>{label}</div>}
        <Controller
          control={control}
          name={registerProps.name}
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <Select
                id={label}
                disableUnderline
                displayEmpty
                renderValue={() => {
                  return (
                    items.find((item) => item.value === value)?.label || (
                      <div className={styles.placeholder}>{placeholder}</div>
                    )
                  );
                }}
                variant={"standard"}
                classes={{
                  root: styles.root + (error ? ` ${styles.hasError}` : ""),
                  select: styles.select,
                  outlined: styles.outlined,
                  icon: styles.icon,
                }}
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
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
            );
          }}
        />
      </div>
    );
  }
);
export default FieldDropdown;
