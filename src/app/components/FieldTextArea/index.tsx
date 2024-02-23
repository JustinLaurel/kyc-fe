import React, { useEffect } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import styles from "./index.module.scss";
import { PartialRecord } from "@/util";

const StylingClasses = {
  container: "container",
  label: "label",
  input: "input",
} as const;
interface FieldTextAreaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  onEnterPress?: () => void;
  className?: string;
  classes?: PartialRecord<keyof typeof StylingClasses, string>;
  error?: FieldError;
  name: string; // From react-hook-form's "{...register()}" call
  control: Control<any, any>;
  characterCount?: boolean;
  gridRowSpan?: number;
  gridColSpan?: number;
}
const FieldTextArea = React.forwardRef<HTMLTextAreaElement, FieldTextAreaProps>(
  function FieldTextAreaInternal(
    props: FieldTextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) {
    const {
      label,
      placeholder = "",
      rows = 2,
      onEnterPress,
      className = "",
      classes = {},
      error,
      control,
      characterCount = false,
      gridRowSpan = 1,
      gridColSpan = 1,
      ...textareaProps
    } = props;

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
            <main
              className={
                styles.container +
                (className ? ` ${className}` : "") +
                (classes.container ? ` ${classes.container}` : "")
              }
              style={{
                gridRow: `span ${gridRowSpan}`,
                gridColumn: `span ${gridColSpan}`,
              }}
            >
              <label
                className={
                  styles.label + (classes.label ? ` ${classes.label}` : "")
                }
              >
                {label}
              </label>
              <textarea
                placeholder={placeholder}
                rows={rows}
                className={
                  styles.textarea + (classes.input ? ` ${classes.input}` : "")
                }
                style={{
                  height: gridRowSpan > 1 ? "100%" : "auto",
                }}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
              />
              {characterCount && (
                <div className={styles.lengthLabel}>
                  {value.length}/300 characters
                </div>
              )}
            </main>
          );
        }}
      />
    );
  }
);

export default FieldTextArea;
