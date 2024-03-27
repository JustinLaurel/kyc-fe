import {
  CalendarIcon,
  DatePicker,
  LocalizationProvider,
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
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import React from "react";

export interface DateRangeField {
  to: Date | null | undefined;
  from: Date | null | undefined;
}
interface DateRangePickerProps extends UseFormRegisterReturn {
  label?: string;
  error?:
    | Merge<
        FieldError,
        FieldErrorsImpl<{
          from: never;
          to: never;
        }>
      >
    | undefined;
  control: Control<any, any>;
}
const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  function DateRangePickerInternal(props, ref) {
    const { label, error, control, ...registerProps } = props;
    return (
      <main className={styles.dateRangePicker}>
        {label && <label className={styles.label}>{label}</label>}
        <ThemeProvider theme={pickerTheme}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-gb"
          >
            <section className={styles.pickerSection}>
              <Controller
                control={control}
                name={`${registerProps.name}.from`}
                rules={{
                  validate: (value) => value && value.isValid(),
                }}
                render={({ field: { onChange, value, ref } }) => {
                  return (
                    <DatePicker
                      minDate={dayjs().subtract(20, "year")}
                      maxDate={
                        value?.to ? dayjs(value.to) : dayjs().add(20, "year")
                      }
                      reduceAnimations
                      className={
                        styles.picker + (error?.from ? ` ${styles.hasError}` : "")
                      }
                      slotProps={{
                        textField: {
                          InputProps: {
                            spellCheck: false,
                            autoCorrect: "off",
                          },
                        },
                      }}
                      onChange={(newValue) => {
                        onChange(newValue);
                      }}
                      value={value}
                      ref={ref}
                      slots={{
                        openPickerButton: CalendarButton,
                      }}
                    />
                  );
                }}
              />
              <div className={styles.pickerSeparator}>to</div>
              <Controller
                control={control}
                name={`${registerProps.name}.to`}
                rules={{
                  validate: (value) => value && value.isValid(),
                }}
                render={({ field: { onChange, value, ref } }) => {
                  return (
                    <DatePicker
                      minDate={
                        value?.from
                          ? dayjs(value.from)
                          : dayjs().subtract(20, "year")
                      }
                      maxDate={dayjs().add(20, "year")}
                      reduceAnimations
                      className={
                        styles.picker + (error?.to ? ` ${styles.hasError}` : "")
                      }
                      slotProps={{
                        textField: {
                          InputProps: {
                            spellCheck: false,
                            autoCorrect: "off",
                          },
                        },
                      }}
                      onChange={(newValue) => {
                        onChange(newValue);
                      }}
                      value={value}
                      ref={ref}
                      slots={{
                        openPickerButton: CalendarButton,
                      }}
                    />
                  );
                }}
              />
            </section>
          </LocalizationProvider>
        </ThemeProvider>
      </main>
    );
  }
);

function CalendarButton(props: IconButtonProps) {
  // Prevent Calendar icon from being tab-selectable
  return (
    <IconButton {...props} tabIndex={-1}>
      <CalendarIcon />
    </IconButton>
  );
}

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

export default DateRangePicker;
