"use client";
import { Select, MenuItem } from "@mui/material";
import styles from "./index.module.scss";
import React from "react";
import {
  Control,
  Controller,
  FieldError,
  Noop,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ListItem } from "@/config/types";

interface UncontrolledProps {
  value: string;
  label?: string;
  placeholder?: string;
  className?: string;
}
interface ControlledProps
  extends Omit<UncontrolledProps, "value">,
    UseFormRegisterReturn {
  items: ListItem[];
  error?: FieldError;
  control: Control<any, any>;
}
// To suppress warning from react-hook-form's register trying to pass a ref to a functional component
const FieldDropdown = React.forwardRef<
  HTMLSelectElement,
  UncontrolledProps | ControlledProps
>(function FieldDropdownInternal(props, ref) {
  const isControlled = "control" in props;

  return (
    <div
      className={
        styles.fieldContainer + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.label && (
        <label className={styles.title} htmlFor={props.label}>
          {props.label}
        </label>
      )}
      {isControlled ? (
        <Controller
          control={props.control}
          name={props.name}
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <BaseDropdown
                placeholder={props.placeholder ?? "Please Select"}
                items={props.items}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
            );
          }}
        />
      ) : (
        <BaseDropdown
          placeholder={props.placeholder ?? "Please Select"}
          items={[]}
          value={props.value}
          ref={ref}
        />
      )}
    </div>
  );
});

interface BaseDropdownProps {
  label?: string;
  value: string;
}
interface ControlledBaseDropdownProps extends BaseDropdownProps {
  items: ListItem[];
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  error?: FieldError;
  placeholder?: string;
}
const BaseDropdown = React.forwardRef<
  HTMLSelectElement,
  BaseDropdownProps | ControlledBaseDropdownProps
>(function BaseDropdownInternal(props, ref) {
  const isControlled = "onChange" in props;
  return (
    <Select
      id={props.label}
      disableUnderline
      displayEmpty
      renderValue={() => {
        return isControlled
          ? props.items?.find((item) => item.value === props.value)?.label || (
              <div className={styles.placeholder}>{props.placeholder}</div>
            )
          : props.value;
      }}
      variant={"standard"}
      classes={{
        root:
          styles.root +
          (isControlled && props.error ? ` ${styles.hasError}` : ""),
        select: styles.select,
        outlined: styles.outlined,
        icon: styles.icon,
      }}
      ref={ref}
      value={props.value}
      onChange={isControlled ? props.onChange : () => {}}
      onBlur={isControlled ? props.onBlur : () => {}}
    >
      {isControlled ? (
        Array.isArray(props.items) &&
        props.items.length > 0 &&
        props.items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              value={item.value}
              className={styles.dropdownItem}
            >
              {item.label}
            </MenuItem>
          );
        })
      ) : (
        <MenuItem value={props.value}>
          {props.value}
        </MenuItem>
      )}
    </Select>
  );
});

export default FieldDropdown;
