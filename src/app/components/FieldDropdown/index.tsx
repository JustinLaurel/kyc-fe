"use client";
import { Select, MenuItem } from "@mui/material";
import styles from "./index.module.scss";
import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

interface FieldDropdownProps {
  items: ListItem[];
  title?: string;
  placeholder?: string;
  error?: FieldError;
  name: string; // From react-hook-form's "{...register()}" call
  control: Control<any, any>;
}
// To suppress warning from react-hook-form's register trying to pass a ref to a functional component
const FieldDropdown = React.forwardRef<HTMLSelectElement, FieldDropdownProps>(
  function FieldDropdownInternal(props, ref) {
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
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <Select
                id={title}
                disableUnderline
                displayEmpty
                renderValue={() =>
                  items.find((item) => item.value === value)?.label || (
                    <div className={styles.placeholder}>{placeholder}</div>
                  )
                }
                variant={"standard"}
                classes={{
                  root: styles.root + (error ? ` ${styles.hasError}` : ""),
                  select: styles.select,
                  outlined: styles.outlined,
                  icon: styles.icon,
                }}
                ref={ref}
                value={value}
                onChange={(event) => {
                  onChange(event);
                }}
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
