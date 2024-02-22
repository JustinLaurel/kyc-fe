import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import styles from "./index.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { Theme, ThemeProvider, createTheme } from "@mui/material";
import dayjs from "dayjs";

const pickerTheme = (theme: Theme) =>
  createTheme({
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

interface DateRangePickerProps {
  label?: string;
}
export default function DateRangePicker(props: DateRangePickerProps) {
  const { label } = props;
  return (
    <main className={styles.dateRangePicker}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <ThemeProvider theme={pickerTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <section className={styles.pickerSection}>
            <DatePicker
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
            />
            <div className={styles.pickerSeparator}>to</div>
            <DatePicker
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
              // slots={{
              //   openPickerButton: (props) => (
              //     <IconButton {...props}>
              //       <Image
              //         src={"/assets/images/icon_calendar.png"}
              //         alt={"Select Date"}
              //         width={24}
              //         height={24}
              //         draggable={false}
              //       />
              //     </IconButton>
              //   ),
              // }}
            />
          </section>
        </LocalizationProvider>
      </ThemeProvider>
    </main>
  );
}
