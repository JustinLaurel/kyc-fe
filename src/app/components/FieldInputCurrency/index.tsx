import { PartialRecord } from "@/util";
import styles from "./index.module.scss";
import {
  ChangeHandler,
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import React, { HTMLInputTypeAttribute } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { formatCurrency, reverseCurrencyFormat } from "@/services/util";

const StylingClasses = {
  container: "container",
  label: "label",
  inputWrapper: "inputWrapper",
  input: "input",
  button: "button",
} as const;
interface FieldInputProps {
  label?: string;
  type?: HTMLInputTypeAttribute;
  classes?: PartialRecord<keyof typeof StylingClasses, string>;
  error?: FieldError;
  placeholder?: string;
  control: Control<any, any>;
}

const FieldInputCurrency = React.forwardRef<
  HTMLInputElement,
  FieldInputProps & UseFormRegisterReturn
>(function FieldInputCurrencyInternal(
  props: FieldInputProps &
    (UseFormRegisterReturn | ControllerRenderProps<any, any>),
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const {
    label,
    type = "text",
    classes = {} as PartialRecord<keyof typeof StylingClasses, string>,
    error = null,
    control,
    ...inputProps
  } = props;

  return (
    <section
      className={
        styles.fieldInputCurrencyContainer +
        (classes.container ? ` ${classes.container}` : "")
      }
    >
      {label && (
        <label
          className={styles.label + (classes.label ? ` ${classes.label}` : "")}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={inputProps.name}
        render={({ field: { onChange, value, ref } }) => {
          function handleValueChange(event: Parameters<ChangeHandler>[0]) {
            return onChange({
              target: {
                value: reverseCurrencyFormat(event.target.value),
              },
            });
          }
          return (
            <TextField
              variant={"standard"}
              autoComplete={"on"}
              id={label}
              type={type}
              onChange={handleValueChange}
              value={formatCurrency(value) ?? formatCurrency(0)}
              classes={{
                root: styles.inputWrapper
              }}
              InputProps={{
                ref,
                className: styles.input,
                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                disableUnderline: true,
              }}
            />
          );
        }}
      />
    </section>
  );
});

export default FieldInputCurrency;
