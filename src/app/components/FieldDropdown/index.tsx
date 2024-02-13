"use client";
import { useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import styles from "./index.module.scss";
import React from "react";
import { FieldError } from "react-hook-form";

interface FieldDropdownProps {
  items: {
    label: string;
    value: string;
  }[];
  title?: string;
  placeholder?: string;
  error?: FieldError;
  ref?: React.Ref<HTMLInputElement>;
}
const FieldDropdown = React.forwardRef<HTMLSelectElement, FieldDropdownProps>(
  function FieldDropdownInternal(
    props: FieldDropdownProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) {
    const {
      items,
      title,
      placeholder = "",
      error = null,
      ...registerProps
    } = props;
    const [selectedValue, setSelectedValue] = useState("");

    function handleChange(event: SelectChangeEvent<string>) {
      setSelectedValue(event.target.value);
    }

    return (
      <div className={styles.fieldContainer}>
        {title && <div className={styles.title}>{title}</div>}
        <Select
          id={title}
          disableUnderline
          displayEmpty
          variant={"standard"}
          classes={{
            root: styles.root + (error ? ` ${styles.hasError}` : ""),
            select: styles.select,
            outlined: styles.outlined,
            icon: styles.icon,
          }}
          ref={ref}
          value={selectedValue}
          {...registerProps}
          onChange={handleChange}
        >
          {selectedValue === "" && (
            <MenuItem
              disabled
              value=""
              className={styles.placeholder}
              style={{ display: "none" }}
            >
              <div className={styles.placeholder}>{placeholder}</div>
            </MenuItem>
          )}
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
);
export default FieldDropdown;
