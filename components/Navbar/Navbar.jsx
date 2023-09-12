import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src='/images/logo.png'
          
          fill/>
          <h3 className={styles.title}>Detelina</h3>
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/about">
         Pocetna
          </Link>
        </li>
        <li>
          <Link href="/services">
            Proizvodi
          </Link>
        </li>
        <li>
          <Link href="/contact">
           O nama
          </Link>
        </li>
        <li>
          <Link href="/contact">
           Galerija
          </Link>
        </li>
        <li>
          <Link href="/contact">
           Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;