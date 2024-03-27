import {
  CalendarIcon,
  DatePicker as MuiDatePicker,
  LocalizationProvider,
  PickerChangeHandlerContext,
  DateValidationError,
} from "@mui/x-date-pickers";
import styles from "./index.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import {
  IconButton,
  IconButtonProps,
  Theme,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import dayjs from "dayjs";
import {
  Control,
  Controller,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import React from "react";

interface UncontrolledProps {
  label?: string;
  value: Date;
}
interface ControlledProps
  extends Omit<UncontrolledProps, "value">,
    UseFormRegisterReturn {
  error?: FieldError;
  control: Control<any, any>;
}
const DatePicker = React.forwardRef<
  HTMLDivElement,
  UncontrolledProps | ControlledProps
>(function DatePickerInternal(props, ref) {
  const isControlled = "control" in props;
  return (
    <main className={styles.datePicker}>
      {props.label && (
        <label className={styles.label} htmlFor={props.label}>
          {props.label}
        </label>
      )}
      <ThemeProvider theme={pickerTheme}>
        {isControlled ? (
          <Controller
            control={props.control}
            name={props.name}
            render={({ field: { onChange, ref } }) => {
              return <BaseDatePicker onChange={onChange} ref={ref} />;
            }}
          />
        ) : (
          <BaseDatePicker ref={ref} value={props.value} />
        )}
      </ThemeProvider>
    </main>
  );
});

function CalendarButton(props: IconButtonProps) {
  // Prevent Calendar icon from being tab-selectable
  return (
    <IconButton {...props} tabIndex={-1}>
      <CalendarIcon />
    </IconButton>
  );
}

interface UncontrolledBasePicker {
  value: Date;
}
interface ControlledBasePickerProps
  extends Omit<UncontrolledBasePicker, "value"> {
  error?: FieldError;
  onChange: (value: dayjs.Dayjs | Date | null) => void;
}
const BaseDatePicker = React.forwardRef<
  HTMLDivElement,
  UncontrolledBasePicker | ControlledBasePickerProps
>(function BaseDatePickerInternal(props, ref) {
  const isControlled = "onChange" in props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <MuiDatePicker
        defaultValue={isControlled ? null : dayjs(props.value)}
        minDate={dayjs().subtract(20, "year")}
        maxDate={dayjs().add(20, "year")}
        reduceAnimations
        className={
          styles.picker +
          (isControlled && props.error ? ` ${styles.hasError}` : "")
        }
        slotProps={{
          textField: {
            InputProps: {
              spellCheck: false,
              autoCorrect: "off",
            },
          },
        }}
        onChange={
          isControlled
            ? (newValue) => {
                props.onChange(
                  newValue && newValue.isValid() ? newValue.toDate() : null
                );
              }
            : () => {}
        }
        ref={ref}
        slots={{
          openPickerButton: CalendarButton,
        }}
      />
    </LocalizationProvider>
  );
});

const pickerTheme = (theme: Theme) => {
  return createTheme({
    ...theme,
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            height: "100%",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: "100%",
          },
          input: {
            paddingTop: "0 !important",
            paddingBottom: "0 !important",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: "none !important",
          },
        },
      },
    },
  });
};

export default DatePicker;
