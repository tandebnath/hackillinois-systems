"use client";
import React from "react";
import styles from "./styles.module.scss";

import { IoLogoDiscord, IoTrophySharp } from "react-icons/io5";
import { RiNumbersLine } from "react-icons/ri";
import { PiMedalBold } from "react-icons/pi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import useSWR from "swr";
import Skeleton from "../Skeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type leaderboardData = {
  id: string;
  points: number;
  discord: string;
};

const headers = ["Rank", "User Discord", "Points"];

const Leaderboard = () => {
  const [limit, setLimit] = React.useState("");
  const limitRef = React.useRef<HTMLInputElement>(null);
  const { data, error, isLoading } = useSWR(
    limit
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/profile/leaderboard/?limit=${limit}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/profile/leaderboard/`,
    fetcher
  );

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (limitRef?.current?.value) {
      setLimit(limitRef.current.value.toString());
    } else {
      setLimit("");
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            type="number"
            name="limit"
            placeholder="Enter number of records"
            aria-label="Enter number of records to show"
            ref={limitRef}
          />
          <button
            type="submit"
            aria-label="Click to submit number of records to show"
          >
            <BsFillArrowRightSquareFill className={styles.button_icon} />
          </button>
        </div>
      </form>

      <table className={styles.table_container}>
        <thead>
          <tr>
            {headers.map((header: string, index: number) => (
              <th key={index}>
                {header}
                {index === 0 ? (
                  <IoTrophySharp className={styles.icon} color="#FFD700" />
                ) : index === 1 ? (
                  <IoLogoDiscord className={styles.icon} color="#7289da" />
                ) : (
                  <RiNumbersLine className={styles.icon} color="#EE4B2B" />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Skeleton numberOfRows={5} />
          ) : (
            data?.profiles?.map((user: leaderboardData, index: number) => (
              <tr>
                <td>
                  {index + 1}{" "}
                  {index === 0 ? (
                    <PiMedalBold className={styles.icon} color="#d4af37" />
                  ) : index === 1 ? (
                    <PiMedalBold className={styles.icon} color="#c0c0c0" />
                  ) : index === 2 ? (
                    <PiMedalBold className={styles.icon} color="#cd7f32" />
                  ) : (
                    ""
                  )}
                </td>
                <td>{user.discord}</td>
                <td>{user.points}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
