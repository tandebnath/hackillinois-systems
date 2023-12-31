import Image from "next/image";
import styles from "./page.module.scss";
import React from "react";
import Leaderboard from "@/components/Leaderboard";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
