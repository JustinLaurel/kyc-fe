import React, { useEffect } from "react";
import { Control, Controller, FieldError, Noop } from "react-hook-form";
import styles from "./index.module.scss";
import { PartialRecord } from "@/util";

const StylingClasses = {
  container: "container",
  label: "label",
  input: "input",
} as const;

interface UncontrolledProps {
  label?: string;
  value: string;
  rows?: number;
  gridRowSpan?: number;
  gridColSpan?: number;
  characterCount?: boolean;
  classes?: PartialRecord<keyof typeof StylingClasses, string>;
  className?: string;
  onEnterPress?: () => void;
}
interface ControlledProps extends Omit<UncontrolledProps, "value"> {
  placeholder?: string;
  error?: FieldError;
  name: string;
  control: Control<any, any>;
}
const FieldTextArea = React.forwardRef<
  HTMLTextAreaElement,
  UncontrolledProps | ControlledProps
>(function FieldTextAreaInternal(
  props: UncontrolledProps | ControlledProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  const { rows = 2, gridRowSpan = 1, gridColSpan = 1 } = props;
  useEffect(() => {
    const onEnterPress = props.onEnterPress;
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
  }, [props.onEnterPress]);

  const isControlled = "control" in props;
  return (
    <main
      className={
        styles.container +
        (props.className ? ` ${props.className}` : "") +
        (props.classes?.container ? ` ${props.classes.container}` : "")
      }
      style={{
        gridRow: `span ${gridRowSpan}`,
        gridColumn: `span ${gridColSpan}`,
      }}
    >
      <label
        className={
          styles.label + (props.classes?.label ? ` ${props.classes.label}` : "")
        }
      >
        {props.label}
      </label>

      {isControlled ? (
        <Controller
          control={props.control}
          name={props.name}
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <BaseTextArea
                placeholder={props.placeholder}
                rows={rows}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                classes={props.classes}
                gridRowSpan={gridRowSpan}
                characterCount={props.characterCount}
              />
            );
          }}
        />
      ) : (
        <BaseTextArea
          rows={rows}
          ref={ref}
          value={props.value}
          classes={props.classes}
          gridRowSpan={gridRowSpan}
          characterCount={props.characterCount}
        />
      )}
    </main>
  );
});

interface UncontrolledBase {
  value: string;
  rows: number;
  gridRowSpan: number;
  classes?: PartialRecord<keyof typeof StylingClasses, string>;
  characterCount?: boolean;
}
interface ControlledBase extends UncontrolledBase {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: Noop;
  placeholder?: string;
}
const BaseTextArea = React.forwardRef<
  HTMLTextAreaElement,
  UncontrolledBase | ControlledBase
>(function BaseTextAreaInternal(props, ref) {
  const isControlled = "onChange" in props;
  return (
    <>
      <textarea
        rows={props.rows}
        className={
          styles.textarea +
          (props.classes?.input ? ` ${props.classes.input}` : "")
        }
        style={{
          height: props.gridRowSpan > 1 ? "100%" : "auto",
        }}
        ref={ref}
        onChange={isControlled ? props.onChange : () => {}}
        value={props.value}
      />
      {props.characterCount && (
        <div className={styles.lengthLabel}>
          {props.value.length}/300 characters
        </div>
      )}
    </>
  );
});

export default FieldTextArea;
