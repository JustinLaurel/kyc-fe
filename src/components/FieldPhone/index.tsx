import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { ListItem } from "@/config/types";
import {
  ChangeHandler,
  Control,
  Controller,
  FieldError,
  Noop,
  UseFormRegisterReturn,
} from "react-hook-form";
import FieldInput from "../FieldInput";
import { MenuItem, Select } from "@mui/material";

interface UncontrolledProps {
  value: PhoneValue;
  label?: string;
}
interface ControlledProps
  extends Omit<UncontrolledProps, "value">,
    UseFormRegisterReturn {
  countryCodes: ListItem[];
  error?: FieldError;
  control: Control<any, any>;
  placeholder?: string;
}
const FieldPhone = React.forwardRef<
  HTMLInputElement,
  UncontrolledProps | ControlledProps
>(function FieldPhoneInternal(props, ref) {
  const isControlled = "control" in props;

  return (
    <main className={styles.fieldPhoneContainer}>
      {props.label && <div className={styles.label}>{props.label}</div>}
      <section className={styles.fieldSection}>
        {isControlled ? (
          <>
            <Controller
              control={props.control}
              name={props.name}
              render={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <BaseSelect
                    value={value.countryCode ?? ""}
                    onBlur={onBlur}
                    ref={ref}
                    error={props.error}
                    countryCodes={props.countryCodes}
                    onChange={(event: Parameters<ChangeHandler>[0]) => {
                      const newValue = {
                        ...value,
                        countryCode: event.target.value,
                      };
                      onChange({ target: { value: newValue } });
                    }}
                  />
                );
              }}
            />
            <Controller
              control={props.control}
              name={props.name}
              render={({ field: { onChange, value, ...restProps } }) => {
                function handlePhoneChange(
                  event: Parameters<ChangeHandler>[0]
                ) {
                  if (!/^[0-9-]*$/g.test(event.target.value)) {
                    return;
                  }
                  return onChange({
                    target: {
                      value: {
                        ...value,
                        number: event.target.value,
                      },
                    },
                  });
                }
                return (
                  <FieldInput
                    classes={{
                      container: styles.phoneInput,
                    }}
                    placeholder={props.placeholder}
                    onChange={handlePhoneChange as any}
                    value={value.number ?? ""}
                    {...(restProps as any)}
                  />
                );
              }}
            />
          </>
        ) : (
          <>
            <BaseSelect value={props.value.countryCode} />
            <FieldInput
              ref={ref}
              classes={{
                container: styles.phoneInput,
              }}
              value={props.value.number}
            />
          </>
        )}
      </section>
    </main>
  );
});

interface BaseSelectProps {
  label?: string;
  value: string;
}
interface ControlledBaseSelectProps extends BaseSelectProps {
  countryCodes: ListItem[];
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  error?: FieldError;
  placeholder?: string;
}
const BaseSelect = React.forwardRef<
  HTMLSelectElement,
  BaseSelectProps | ControlledBaseSelectProps
>(function BaseSelectInternal(props, ref) {
  const isControlled = "countryCodes" in props;

  return (
    <Select
      id={props.label}
      disableUnderline
      displayEmpty
      variant={"standard"}
      classes={{
        root:
          styles.countryCodeDropdown +
          (isControlled && props.error ? ` ${styles.hasError}` : ""),
        select: styles.select,
        outlined: styles.outlined,
        icon: styles.icon,
      }}
      ref={ref}
      onChange={isControlled && props.onChange ? props.onChange : () => {}}
      value={props.value}
      onBlur={isControlled && props.onBlur ? props.onBlur : () => {}}
    >
      {isControlled ? (
        Array.isArray(props.countryCodes) &&
        props.countryCodes.map((item) => {
          return (
            <MenuItem
              key={item.value}
              value={item.value}
              className={styles.dropdownItem}
            >
              {item.label}
            </MenuItem>
          );
        })
      ) : (
        <MenuItem value={props.value}>{props.value}</MenuItem>
      )}
    </Select>
  );
});

interface PhoneValue {
  countryCode: string;
  number: string;
}

export default FieldPhone;
