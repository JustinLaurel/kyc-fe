import { useState } from "react";
import styles from "./index.module.scss";
import Card from "@/components/Card";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { post } from "@/services/api";
import { routes } from "@/config/routes";
import { useNavigate } from "react-router-dom";
import { MessageModal, FieldInput } from "@/components/index";
import { MessageManager } from "@/components/MessageModal/type";

import { useForm } from "react-hook-form";
import { UnauthorizedException } from "@/config/errors";

const INITIAL_FORM = {
  username: "",
  password: "",
} as const;
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<typeof INITIAL_FORM>({
    defaultValues: {
      ...INITIAL_FORM,
    },
  });

  const [messageModal, setMessageModal] = useState<MessageManager | null>(null);
  const navigate = useNavigate();

  async function handleLogin(form: typeof INITIAL_FORM) {
    try {
      const response = await post(routes.login, {
        username: form.username,
        password: form.password,
      });

      if (response.authToken) {
        navigate("/frontoffice");
      }
    } catch (error: any) {
      const message =
        error instanceof UnauthorizedException
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
    reset({ ...INITIAL_FORM });
  }

  function handleCloseModal() {
    setMessageModal(null);
  }

  return (
    <div className={styles.container}>
      <Card hasSeparator={false}>
        <form
          className={styles.contentContainer}
          onSubmit={handleSubmit(handleLogin)}
        >
          <section className={styles.formSection}>
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
          </section>
          <section className={styles.bottomSection}>
            <div className={styles.buttonWrapper}>
              <ActionButton
                colorScheme={BUTTON_COLOR_SCHEMES.WHITE}
                onClick={handleClear}
              >
                Clear
              </ActionButton>
              <ActionButton isSubmit={true}>Log In</ActionButton>
            </div>
            <div className={styles.error}>
              {errors.root?.serverError?.message}
            </div>
          </section>
        </form>
      </Card>
      <MessageModal {...messageModal} />
    </div>
  );
}
