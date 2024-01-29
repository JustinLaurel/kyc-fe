"use client";

import Card from "@/components/Card";
import styles from "./page.module.scss";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";

export default function TaskSection() {
  const router = useRouter();
  return (
    <Card
      className={styles.taskSection}
      key={2}
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
        className={styles.taskButton}
        onClick={onClick}
      >
        {buttonLabel}
      </ActionButton>
    </div>
  );
}