import React from "react";
import styles from "./styles.module.scss";

type SkeletonProps = {
  numberOfRows: number;
};

const Skeleton: React.FC<SkeletonProps> = ({ numberOfRows }) => {
  return (
    <React.Fragment>
      {[...Array(numberOfRows)].map((item: any, index: number) => (
        <tr className={styles.skeleton_container} key={index}>
          <td>
            <div className={styles.skeleton} />
          </td>
          <td>
            <div className={styles.skeleton} />
          </td>
          <td>
            <div className={styles.skeleton} />
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default Skeleton;
