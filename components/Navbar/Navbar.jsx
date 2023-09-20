import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import {useState, useRef, useEffect } from "react";

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  const [smallMenuOpen, setSmallMenuOpen]= useState(false);


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
 

const smallNavContent = <button className={styles.smallMenuButton} onClick={()=>{setSmallMenuOpen(!smallMenuOpen)}}>
  <Image
   src='/images/menuIcon2.png'
    className={styles.smallMenuImage}
    loading= 'eager'
   fill
   />
  </button>;


const smallNavLinks=<div className={styles.smallLinksMainDiv}>
<div className={styles.smallLinksDiv}>

<Link href="/about">
 Pocetna
  </Link>

  <Link href="/services">
    Proizvodi
  </Link>

  <Link href="/contact">
   O nama
  </Link>

  <Link href="/contact">
   Galerija
  </Link>

  <Link href="/contact">
   Kontakt
  </Link>

</div>
</div>

const bigNavContent =   <div className={styles.menu}>

  <Link href="/about">
 Pocetna
  </Link>

  <Link href="/services">
    Proizvodi
  </Link>

  <Link href="/contact">
   O nama
  </Link>

  <Link href="/contact">
   Galerija
  </Link>

  <Link href="/contact">
   Kontakt
  </Link>

</div>;



  return (<>
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
    {windowWidth<980 && smallMenuOpen && smallNavLinks}</>
  );
};

export default Navbar;