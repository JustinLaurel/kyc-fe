import { isNotNullOrUndefined, PartialRecord } from "@/util";
import styles from "./index.module.scss";
import ActionButton from "@/components/ActionButton";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import React, { HTMLInputTypeAttribute, useCallback, useMemo } from "react";

const StylingClasses = {
  container: "container",
  label: "label",
  inputWrapper: "inputWrapper",
  input: "input",
  button: "button",
} as const;
interface UncontrolledFieldInputProps {
  label?: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  onButtonClick?: () => void;
  buttonLabel?: string;
  classes?: PartialRecord<keyof typeof StylingClasses, string>;
}
interface ControlledFieldInputProps
  extends Omit<UncontrolledFieldInputProps, "value">,
    UseFormRegisterReturn {
  error?: FieldError;
  placeholder?: string;
}

const FieldInput = React.forwardRef<
  HTMLInputElement,
  (UncontrolledFieldInputProps | ControlledFieldInputProps) &
    React.HTMLProps<HTMLInputElement>
>(function FieldInputInternal(props, ref) {
  function handleInputEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && onButtonClick && buttonLabel) {
      onButtonClick();
    }
  }

  const maxLengthCheck = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value = event.target.value.slice(
        0,
        event.target.maxLength === 0 ? Infinity : event.target.maxLength
      );
    },
    []
  );

  const {
    label,
    type = "text",
    onButtonClick = null,
    buttonLabel = null,
    classes = {} as PartialRecord<keyof typeof StylingClasses, string>,
    ...inputProps
  } = props;

  return (
    <section
      className={
        styles.fieldContainer +
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
      <div
        className={
          styles.inputWrapper +
          (classes.inputWrapper ? ` ${classes.inputWrapper}` : "")
        }
      >
        <input
          autoComplete={"on"}
          id={label}
          className={
            styles.input +
            ("error" in props && props.error ? ` ${styles.hasError}` : "") +
            (classes.input ? ` ${classes.input}` : "")
          }
          type={type}
          onKeyDown={handleInputEnter}
          onChange={useCallback(() => {}, [])} // Suppress browser console error
          {...inputProps}
          {...(type === "number"
            ? {
                onInput: maxLengthCheck,
              }
            : {})}
          ref={ref}
        />
        {"error" in props && props.error && (
          <span className={styles.inputError}>{props.error.message}</span>
        )}
        {onButtonClick && buttonLabel && (
          <ActionButton
            className={
              styles.button + (classes.button ? ` ${classes.button}` : "")
            }
            onClick={onButtonClick}
          >
            {buttonLabel}
          </ActionButton>
        )}
      </div>
    </section>
  );
});

export default FieldInput;
