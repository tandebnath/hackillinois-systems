import styles from "./page.module.scss";
import React from "react";
import Leaderboard from "@/components/Leaderboard";
import dynamic from "next/dynamic";

// const Leaderboard = dynamic(() => import("../../components/Leaderboard"));

export default async function Home() {
  return (
    <main className={styles.main}>
      <Leaderboard />
    </main>
  );
}
