import { useState } from "react";
import Link from "next/link";
import { authApi } from "@/api/auth";
import { supabase } from "@/utils/supabaseClient";
import { FormInput } from "../shared/FormInput";
import { UserPlatform, AuthFormData } from "../types/auth.types";
import { validateLogin } from "../utils/authValidation";
import styles from "../styles/LoginForm.module.css";
import sharedStyles from "../styles/shared.module.css";

interface LoginFormProps {
  platform: UserPlatform;
}

export const LoginForm = ({ platform }: LoginFormProps) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authApi.login(formData);

      if (!response.success) {
        throw new Error(response.error);
      }

      const { role, approved } = response.data;

      if (role !== platform) {
        throw new Error(
          `This account is registered as a ${role}, not a ${platform}`
        );
      }

      if (platform === "teacher" && !approved) {
        throw new Error("Your teacher account is pending approval");
      }

      // Redirect to appropriate platform
      const platformUrl =
        platform === "teacher"
          ? process.env.NEXT_PUBLIC_TEACHER_URL
          : process.env.NEXT_PUBLIC_STUDENT_URL;

      window.location.href = `${platformUrl}/dashboard`;
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={sharedStyles.error}>{error}</div>}

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={loading}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
        required
        disabled={loading}
      />

      <button type="submit" className={sharedStyles.button} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <div className={styles.links}>
        <Link href={`/auth/register/${platform}`} className={sharedStyles.link}>
          Don&apos;t have an account? Register here
        </Link>
      </div>
    </form>
  );
};
