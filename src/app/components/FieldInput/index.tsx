import { PartialRecord } from "@/util";
import styles from "./index.module.scss";
import ActionButton from "@/components/ActionButton";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import React, { HTMLInputTypeAttribute } from "react";

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
  UncontrolledFieldInputProps | ControlledFieldInputProps
>(function FieldInputInternal(props, ref) {
  function handleInputEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && onButtonClick && buttonLabel) {
      onButtonClick();
    }
  }

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
          {...inputProps}
          ref={ref}
        />
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
