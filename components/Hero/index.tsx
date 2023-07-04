import styles from "./styles.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <p className="body2">Welcome to</p>
      <h1>HackIllinois!</h1>
      <p className="body1">Feb 24th - Feb 26th</p>
    </div>
  );
};

export default Hero;
