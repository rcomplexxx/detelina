import styles from '../styles/asortiman.module.css'
import Image from 'next/image'


export default function Asortiman(){


    return <div className={styles.mainDiv}><div className={styles.categories}>
    <h1 className={styles.nasiProizvodiTitle}>Nasi proizdvodi</h1>
    <div className={styles.nasiProizvodiDiv}>
    <div className={styles.categoryDiv}><div className={styles.categoryPhoto}> <Image
                src={`/images/greenTeaCat.png` } // Path to your image from the `public` directory
                alt="Example Image"
                className="object_fit_cover"
                fill
              /></div><p className={styles.categoryName}>Cajevi</p></div>
    <div className={styles.categoryDiv}><div className={styles.categoryPhoto}><Image
                src={`/images/nutsCat.png` } // Path to your image from the `public` directory
                alt="Example Image"
                className="object_fit_cover"
                fill
              /></div><p className={styles.categoryName}>Kostunavo voce</p></div>
    <div className={styles.categoryDiv}><div className={styles.categoryPhoto}><Image
                src={`/images/vineCat.png` } // Path to your image from the `public` directory
                alt="Example Image"
                className="object_fit_cover"
                fill
              /></div><p className={styles.categoryName}>Napitci</p></div>
    <div className={styles.categoryDiv}><div className={styles.categoryPhoto}><Image
                src={`/images/snacksCat.png` } // Path to your image from the `public` directory
                alt="Example Image"
                className="object_fit_cover"
                fill
              /></div><p className={styles.categoryName}>Zdravi slatkisi</p></div>
    </div>
    </div>
    </div>
}