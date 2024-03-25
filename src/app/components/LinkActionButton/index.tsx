import Link from "next/link";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";

interface Props {
  href: string;
  children?: React.ReactNode;
  colorScheme?: BUTTON_COLOR_SCHEMES;
  className?: string;
}
export default function LinkActionButton(props: Props) {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <ActionButton {...props} isSubmit={false} component="a" draggable={false}>
        {props.children}
      </ActionButton>
    </Link>
  );
}
