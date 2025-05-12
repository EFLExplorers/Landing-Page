import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import {
  LocationIcon,
  EmailIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@/components/ui/icons";
import { ToastProvider, useToast } from "@/components/core/Toast";
import styles from "@/styles/test.module.css";

const TestComponents = () => {
  const { addToast } = useToast();

  return (
    <div className={styles.container}>
      <h1>Component Test Page</h1>

      <section className={styles.section}>
        <h2>Button Component</h2>
        <div className={styles.buttonGroup}>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <div className={styles.buttonGroup}>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>

        <div className={styles.buttonGroup}>
          <Button disabled>Disabled</Button>
          <Button>Loading...</Button>
        </div>

        <div className={styles.buttonGroup}>
          <Button>
            <LocationIcon className="mr-2" size={20} />
            With Left Icon
          </Button>
          <Button>
            With Right Icon
            <ChevronRightIcon className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tooltip Component</h2>
        <div className={styles.tooltipGroup}>
          <Tooltip content="This is a top tooltip" position="top">
            <Button>Hover me (Top)</Button>
          </Tooltip>

          <Tooltip content="This is a right tooltip" position="right">
            <Button>Hover me (Right)</Button>
          </Tooltip>

          <Tooltip content="This is a bottom tooltip" position="bottom">
            <Button>Hover me (Bottom)</Button>
          </Tooltip>

          <Tooltip content="This is a left tooltip" position="left">
            <Button>Hover me (Left)</Button>
          </Tooltip>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Icon Component</h2>
        <div className={styles.iconGroup}>
          <LocationIcon size={24} />
          <EmailIcon size={24} />
          <PhoneIcon size={24} />
          <ChevronRightIcon size={24} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Toast Component</h2>
        <div className={styles.buttonGroup}>
          <Button onClick={() => addToast("Success message!", "success")}>
            Show Success Toast
          </Button>
          <Button onClick={() => addToast("Error message!", "error")}>
            Show Error Toast
          </Button>
          <Button onClick={() => addToast("Warning message!", "warning")}>
            Show Warning Toast
          </Button>
          <Button onClick={() => addToast("Info message!", "info")}>
            Show Info Toast
          </Button>
        </div>
      </section>
    </div>
  );
};

const TestPage = () => {
  return (
    <ToastProvider>
      <TestComponents />
    </ToastProvider>
  );
};

export default TestPage;
