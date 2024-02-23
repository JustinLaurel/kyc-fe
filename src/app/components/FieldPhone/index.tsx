import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { ListItem } from "@/config/types";
import {
  ChangeHandler,
  Control,
  Controller,
  FieldError,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import FieldInput from "../FieldInput";
import { MenuItem, Select } from "@mui/material";

interface FieldPhoneProps {
  countryCodes: ListItem[];
  label?: string;
  placeholder?: string;
  error?: FieldError;
  control: Control<any, any>;
}
const FieldPhone = React.forwardRef<
  HTMLInputElement,
  FieldPhoneProps & UseFormRegisterReturn
>(function FieldPhoneInternal(props, ref) {
  const {
    countryCodes,
    label,
    placeholder = "",
    error = null,
    control,
    ...registerProps
  } = props;

  return (
    <main className={styles.fieldPhoneContainer}>
      {label && <div className={styles.label}>{label}</div>}
      <section className={styles.fieldSection}>
        <Controller
          control={control}
          name={registerProps.name}
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <Select
                id={label}
                disableUnderline
                displayEmpty
                variant={"standard"}
                classes={{
                  root: styles.countryCodeDropdown + (error ? ` ${styles.hasError}` : ""),
                  select: styles.select,
                  outlined: styles.outlined,
                  icon: styles.icon,
                }}
                ref={ref}
                value={value.countryCode ?? ""}
                onChange={(event: Parameters<ChangeHandler>[0]) => {
                  const newValue = {
                    ...value,
                    countryCode: event.target.value,
                  };
                  onChange({ target: { value: newValue } });
                }}
                onBlur={onBlur}
              >
                {Array.isArray(countryCodes) &&
                  countryCodes.length > 0 &&
                  countryCodes.map((item, index) => {
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
        <Controller
          control={control}
          name={registerProps.name}
          render={({ field: { onChange, value, ...restProps } }) => {
            function handlePhoneChange(event: Parameters<ChangeHandler>[0]) {
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
                placeholder={placeholder}
                onChange={handlePhoneChange as any}
                value={value.number ?? ""}
                {...(restProps as any)}
              />
            );
          }}
        />
      </section>
    </main>
  );
});
export default FieldPhone;
