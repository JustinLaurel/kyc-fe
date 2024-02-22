import {
  CalendarIcon,
  DatePicker as MuiDatePicker,
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
import { Control, Controller, FieldError } from "react-hook-form";
import React from "react";

interface DatePickerProps {
  label?: string;
  error?: FieldError;
  name: string; // From react-hook-form's "{...register()}" call
  control: Control<any, any>;
}
const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePickerInternal(props: DatePickerProps, ref) {
    const { label, error, control, ...registerProps } = props;
    return (
      <main className={styles.datePicker}>
        {label && (
          <label className={styles.label} htmlFor={label}>
            {label}
          </label>
        )}
        <ThemeProvider theme={pickerTheme}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-gb"
          >
            <Controller
              control={control}
              {...registerProps}
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <MuiDatePicker
                    minDate={dayjs().subtract(20, "year")}
                    maxDate={dayjs().add(20, "year")}
                    reduceAnimations
                    className={styles.picker}
                    slotProps={{
                      textField: {
                        InputProps: {
                          spellCheck: false,
                          autoCorrect: "off",
                        },
                      },
                    }}
                    onChange={(newValue) => {
                      if (newValue && newValue.isValid()) {
                        onChange(newValue.toDate());
                      }
                    }}
                    ref={ref}
                    slots={{
                      openPickerButton: CalendarButton,
                    }}
                  />
                );
              }}
            />
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

export default DatePicker;
