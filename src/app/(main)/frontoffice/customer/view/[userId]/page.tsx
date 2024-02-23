import styles from "./page.module.scss";
import HeaderSection from "./HeaderSection";
import ContentSection from "./ContentSection";
import { routes } from "@/config/routes";
import { getServer } from "@/services/serverApi";
import { convertNullToEmptyString } from "@/util";

interface UserViewPageProps {
  params: {
    userId: string;
  };
}
export default async function UserViewPage({ params }: UserViewPageProps) {
  const { userId } = params;

  return (
    <div className={styles.container}>
      <HeaderSection />
      <ContentSection />
    </div>
  );
}
