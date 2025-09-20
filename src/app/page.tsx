"use client";
import { useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)");
  const light = "#ffffff";
  const dark = "#171717";

  const componentAnimation = useRef<HTMLDivElement>(null);

  const [isLightTheme, setIsLightTheme] = useState(prefersLightTheme.matches);
  const [isClickable, setIsClickable] = useState(true);

  const changeTheme = () => {
    if (!componentAnimation.current) return;

    setIsLightTheme(!isLightTheme);
    componentAnimation.current.style.animation = "grow-background 1s linear";
  };

  return (
    <>
      <div
        className={styles.themeButton}
        onClick={changeTheme}
        style={{
          backgroundColor: !isLightTheme ? light : dark,
          pointerEvents: isClickable ? "auto" : "none",
          cursor: isClickable ? "pointer" : "default",
        }}
        aria-roledescription="Button for switching between light and dark theme"
      />

      <div
        ref={componentAnimation}
        className={styles.backgroundTransition}
        style={{
          backgroundColor: isLightTheme ? light : dark,
        }}
        onAnimationStart={() => setIsClickable(false)}
        onAnimationEnd={() => {
          componentAnimation.current?.style.removeProperty("animation");
          setIsClickable(true);
        }}
      />

      <div
        className={styles.backgroundColor}
        style={{ backgroundColor: isLightTheme ? light : dark }}
      />
    </>
  );
}
