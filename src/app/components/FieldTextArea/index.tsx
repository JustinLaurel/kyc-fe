import React, { useEffect } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import styles from "./index.module.scss";

interface FieldTextAreaProps {
  label: string;
  onEnterPress?: () => void;
  error?: FieldError;
  name: string; // From react-hook-form's "{...register()}" call
  control: Control<any, any>;
}
const FieldTextArea = React.forwardRef<HTMLTextAreaElement, FieldTextAreaProps>(
  function FieldTextAreaInternal(
    props: FieldTextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) {
    const { label, onEnterPress, error, control, ...textareaProps } = props;

    useEffect(() => {
      if (onEnterPress) {
        const handleInputEnter = (event: any) => {
          if (event.key === "Enter" && onEnterPress) {
            event.preventDefault();
            event.stopPropagation();
            onEnterPress();
          }
        };
        document.addEventListener("keydown", handleInputEnter);
        return () => {
          document.removeEventListener("keydown", handleInputEnter);
        };
      }
    }, [onEnterPress]);

    return (
      <Controller
        control={control}
        {...textareaProps}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
            <main className={styles.container}>
              <label className={styles.label}>{label}</label>
              <textarea
                className={styles.textarea}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
              />
              <div className={styles.lengthLabel}>
                {value.length}/300 characters
              </div>
            </main>
          );
        }}
      />
    );
  }
);

export default FieldTextArea;
