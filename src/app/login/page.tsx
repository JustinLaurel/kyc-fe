"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Card from "../components/Card";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../components/ActionButton";
import { routes, post } from "@/services/api";
import { useRouter } from "next/navigation";
import { MessageModalOk } from "@/components/MessageModal";

import { useForm } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import { CircularProgress } from "@mui/material";
import Loader from "@/components/Loader";
import { UnauthorizedException } from "@/config/errors";

const initialForm = {
  username: "",
  password: "",
} as const;
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<typeof initialForm>({
    defaultValues: {
      ...initialForm,
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);
  const router = useRouter();

  async function handleLogin(form: typeof initialForm) {
    try {
      const response = await post(routes.login, {
        username: form.username,
        password: form.password,
      });

      if (response.authToken) {
        router.push("/dashboard");
      }
    } catch (error: any) {
      const message = error instanceof UnauthorizedException
          ? "The User ID or password you entered is incorrect."
          : "Failed to login";
      setError("root.serverError", {
        type: error.code,
        message: message,
      });
      Object.keys(form).forEach((key) => {
        setError(key as any, { type: "custom" });
      });
    }
  }

  async function handleClear() {
    reset({ ...initialForm });
  }

  function handleCloseModal() {
    setShowModal(false);
    setModalMessage(null);
  }

  return (
    <div className={styles.container}>
      <Card hasSeparator={false}>
        <main className={styles.contentContainer}>
          <form className={styles.formSection}>
            <FieldInput
              label={"User ID"}
              error={errors.username}
              {...register("username", {
                required: true,
                minLength: 5,
                maxLength: 14,
              })}
            />
            <FieldInput
              label={"Password"}
              type={"password"}
              error={errors.password}
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 14,
              })}
            />
          </form>
          <section className={styles.bottomSection}>
            <div className={styles.buttonWrapper}>
              <ActionButton
                colorScheme={BUTTON_COLOR_SCHEMES.WHITE}
                onClick={handleClear}
              >
                Clear
              </ActionButton>
              <ActionButton onClick={handleSubmit(handleLogin)}>
                Log In
              </ActionButton>
            </div>
            <div className={styles.error}>
              {errors.root?.serverError?.message}
            </div>
          </section>
        </main>
      </Card>
      <MessageModalOk
        isOpen={showModal}
        message={modalMessage}
        handleOk={handleCloseModal}
        handleClose={handleCloseModal}
      />
    </div>
  );
}
