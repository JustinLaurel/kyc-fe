import styles from "./page.module.scss";
import Card from "@/components/Card";

export default function MyProfile() {
  return (
    <Card header={"My Profile"} hasSeparator={false}>
      <div className={styles.myProfile}>
        <MyProfileItem title={"Name"} label={"john99doe"} />
        <MyProfileItem
          title={"Email Address"}
          label={"john99doe@youremail.com"}
          sublabel={
            "Email notification will be sent to this registered email address"
          }
        />
        <MyProfileItem title={"Department"} label={"Loren Ipsum"} />
        <MyProfileItem title={"Current Login Role"} label={"Admin Maker"} />
      </div>
    </Card>
  );
}

interface MyProfileItemProps {
  title: string;
  label: string;
  sublabel?: string;
}
function MyProfileItem(props: MyProfileItemProps) {
  const { title, label, sublabel } = props;

  return (
    <div className={styles.myProfileItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.labelWrapper}>
        <div className={styles.label}>{label}</div>
        {sublabel && <div className={styles.sublabel}>{sublabel}</div>}
      </div>
    </div>
  );
}
