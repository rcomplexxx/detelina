import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import {useState, useRef, useEffect } from "react";

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  const [smallMenuOpen, setSmallMenuOpen]= useState(0);


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
 

const smallNavContent = <button className={styles.smallMenuButton} onClick={()=>{setSmallMenuOpen(smallMenuOpen===1?0:1)}}>
  <Image
   src='/images/menuIcon2.png'
    className={styles.smallMenuImage}
    loading= 'eager'
   fill
   />
  </button>;


const smallNavLinks=<div className={`${styles.smallLinksMainDiv} ${windowWidth<980 && smallMenuOpen===1 && styles.allow} ${smallMenuOpen===2 && styles.fastClose}`}>
<div className={styles.smallLinksDiv}>

<Link href="/" className={styles.smallLink} onClick={()=>{setSmallMenuOpen(2)}}>
 Pocetna
  </Link>

  <Link href="/asortiman" className={styles.smallLink} onClick={()=>{setSmallMenuOpen(2)}}>
    Proizvodi
  </Link>

  <Link href="/o-nama" className={styles.smallLink} onClick={()=>{setSmallMenuOpen(2)}}>
   O nama
  </Link>

  <Link href="/galerija" className={styles.smallLink} onClick={()=>{setSmallMenuOpen(2)}}>
   Galerija
  </Link>

  <Link href="/kontakt" className={styles.smallLink} onClick={()=>{setSmallMenuOpen(2)}}>
   Kontakt
  </Link>

</div>
</div>

const bigNavContent =   <div className={styles.menu}>


<Link href="/" className={styles.smallLink}>
 Pocetna
  </Link>

  <Link href="/asortiman" className={styles.smallLink}>
    Proizvodi
  </Link>

  <Link href="/o-nama" className={styles.smallLink}>
   O nama
  </Link>

  <Link href="/galerija" className={styles.smallLink}>
   Galerija
  </Link>

  <Link href="/kontakt" className={styles.smallLink}>
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
    {smallNavLinks}</>
  );
};

export default Navbar;