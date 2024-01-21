import { Autocomplete, rem } from "@mantine/core";
import styles from "./index.module.scss";
import Image from "next/image";
import { ValueOf } from "@/util";
import { useState } from "react";

export const LEFT_ICONS = {
  MAGNIFYING_GLASS: "icon_search.png",
} as const;

interface Props {
  items: {
    label: string;
    value: string;
  }[];
  title?: string;
  placeholder?: string;
  leftIcon?: ValueOf<typeof LEFT_ICONS>;
}
export default function FieldDropdown(props: Props) {
  const { items, title, placeholder = "", leftIcon } = props;
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className={styles.fieldContainer}>
      {title && <div className={styles.title}>{title}</div>}
      <Autocomplete
        data={items.map((item) => item.label)}
        onChange={(label) => {
          const selectedItem = items.find((item) => item.label === label);
          if (!selectedItem) {
            return;
          }
          setValue(selectedItem.value);
        }}
        classNames={{
          section: styles.section,
          wrapper: styles.wrapper,
          input: styles.input + (leftIcon ? "" : ` ${styles.noLeftIcon}`),
          option: styles.option,
        }}
        placeholder={placeholder}
        leftSection={
          leftIcon ? (
            <Image
              src={`/assets/images/${leftIcon}`}
              alt={leftIcon}
              width={24}
              height={24}
            />
          ) : null
        }
        rightSection={
          <Image
            src={`/assets/images/icon_triangle_down.png`}
            alt={"icon_triangle_down.png"}
            width={24}
            height={24}
          />
        }
      />
    </div>
  );
}
