"use client";

import Card from "@/components/Card";
import styles from "./page.module.scss";
import Image from "next/image";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className={styles.dashboardContainer}>
      <Card className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.role}>ADMIN MAKER</div>
          <div className={styles.detailsWrapper}>
            <div className={styles.greeting}>Good Morning, john99doe</div>
            <div className={styles.logindt}>
              Last Login: 07/12/2023 10:02:11
            </div>
          </div>
        </div>
      </Card>

      <Card
        className={styles.taskSection}
        header={"My Task"}
        hasSeparator={false}
      >
        <div className={styles.taskWrapper}>
          <TaskView
            src={"/assets/images/icon_search_user.png"}
            buttonLabel={"Search User"}
            onClick={() => router.push("/user")}
          />
          <TaskView
            src={"/assets/images/icon_add_user.png"}
            buttonLabel={"Add User"}
            onClick={() => router.push("/user/add")}
          />
        </div>
      </Card>
    </div>
  );
}

interface TaskViewProps {
  src: string;
  buttonLabel: string;
  onClick: () => void;
}
function TaskView(props: TaskViewProps) {
  const { src, buttonLabel, onClick } = props;
  return (
    <div className={styles.taskViewContainer}>
      <Image
        src={src}
        alt={src}
        className={styles.pointer}
        width={84}
        height={84}
      />
      <ActionButton
        colorScheme={BUTTON_COLOR_SCHEMES.RED}
        className={styles.taskButton}
        onClick={onClick}
      >
        {buttonLabel}
      </ActionButton>
    </div>
  );
}
