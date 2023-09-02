import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo}>Dream11 Predictor</div>
      </Link>
      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`${styles.line} ${menuOpen ? styles.lineOpen : ""}`}
        ></div>
        <div
          className={`${styles.line} ${menuOpen ? styles.lineOpen : ""}`}
        ></div>
        <div
          className={`${styles.line} ${menuOpen ? styles.lineOpen : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
