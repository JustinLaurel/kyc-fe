import AmbankFooter from "@/components/AmbankFooter";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <main className={styles.loginLayoutContainer}>
      <section className={styles.controlbar}>
        <div className={styles.logoHeader}>
          <img
            src={"/assets/images/logo_ambank.png"}
            alt={"Ambank Logo"}
            width={194}
            height={40}
          />
        </div>
        <div className={styles.actionsHeader}>
          <div className={styles.header}>Universal KYC Onboarding</div>
        </div>
      </section>
      <section className={styles.content}>
        <Outlet />
      </section>
      <AmbankFooter />
    </main>
  );
}
