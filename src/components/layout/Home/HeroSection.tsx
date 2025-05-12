import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import backgroundImage from "@/assets/backgrounds/background.jpg";

export const HeroSection = () => {
  const router = useRouter();

  const handlePlatformSelect = (platform: "student" | "teacher") => {
    router.push(`/register/${platform}`);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          quality={100}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Start your learning journey today!</h1>
        <p className={styles.subtitle}>
          We&apos;re so happy you&apos;re here! However, you will need to
          register to get started.
        </p>
        <div className={styles.buttonGroup}>
          <button
            onClick={() => handlePlatformSelect("student")}
            className={styles.button}
          >
            Register Student
          </button>
          <button
            onClick={() => handlePlatformSelect("teacher")}
            className={styles.button}
          >
            Register Teacher
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
