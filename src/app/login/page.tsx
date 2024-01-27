"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Card from "../components/Card";
import { BUTTON_COLOR_SCHEMES } from "../components/ActionButton";
import { routes, post } from "../services/api";
import { useRouter } from "next/navigation";

const initialForm = {
  username: "",
  password: "",
};
export default function LoginPage() {
  const [form, setForm] = useState({ ...initialForm });
  const router = useRouter();

  async function handleLogin() {
    try {
      const response = await post(routes.login, {
        username: form.username,
        password: form.password,
      });
      
      if (response.authToken) {
        router.push("/dashboard");
        alert("Login successful");
      }
    } catch (error) {
      alert(error);
    }
  }

  async function handleClear() {
    setForm({ ...initialForm });
  }

  return (
    <div className={styles.container}>
      <Card
        buttons={[
          {
            label: "Clear",
            onClick: () => handleClear(),
            colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
          },
          {
            label: "Log In",
            onClick: () => handleLogin(),
          },
        ]}
        hasSeparator={false}
      >
        <div className={styles.form}>
          <section className={styles.fieldContainer}>
            <div className={styles.title}>User ID</div>
            <input
              className={styles.input}
              value={form.username}
              onChange={(event) =>
                setForm({ ...form, username: event.target.value })
              }
            />
          </section>
          <section className={styles.fieldContainer}>
            <div className={styles.title}>Password</div>
            <input
              className={styles.input}
              type="password"
              value={form.password}
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
            />
          </section>
        </div>
      </Card>
    </div>
  );
}
