import Image from 'next/image'
import styles from './zastoDaNasPosetite.module.css'





export default function ZastoDaNasPosetite () {


    return <div className={styles.whyWrapper}>
        
        <Image
        src='/images/healthyAf.png'
        fill
        className={styles.whyBackground}
       
        />
        <div className={styles.whyForeground}><h1 className={styles.whyTitle}>ZAŠTO DA NAS POSETITE</h1>
        <p className={styles.whyTitleText}>Ljubazno osoblje, otvoreno za svaku saradnju. Veliki izbor proizvoda, mogućnost naručivanja nekog proizvoda ako ga nemamo u radnji.</p>
        <div className={styles.razloziDiv}>
            <div className={styles.razlogDiv}>
        <h2>KVALITET I BEZBEDNOST</h2>
        <p>Kvalitet i bezbednost proizvoda je osigurana, roba uvek sveza.</p>
        </div>

        <div className={styles.razlogDiv}>
        <h2>ORGANSKI PROIZVODI</h2>
        <p>Ako želite kvalitet koji je na još većem nivou i to smo obezbedili. Nudimo vam veliki izbor organskih proizvoda.</p>
        </div>

        <div className={styles.razlogDiv}>
        <h2>BOGAT ASORTIMAN</h2>
        <p>Pored velikog izbora proizvoda, svojim kupcimo dajemo mogućnost porudžbine proizvoda koji nisu trenutno na stanju.</p>
        </div>

        </div>
        </div>

    </div>
}