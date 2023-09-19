import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import {useState, useRef, useEffect } from "react";

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(0);


  const navRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

const smallNavContent = <button className={styles.smallMenuButton}>
  <Image
   src='/images/menuIcon.png'
    className={styles.smallMenuImage}
   fill
   />
  </button>;

const bigNavContent =   <ul className={styles.menu}>
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
</ul>;



  return (
    <nav  ref={navRef} className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" >
          <Image src='/images/logo.png'
           className={styles.smallMenuImage}
          fill/>
          <h3 className={styles.title}>Detelina</h3>
        </Link>
      </div>
      {windowWidth<980?smallNavContent:bigNavContent}
    </nav>
  );
};

export default Navbar;