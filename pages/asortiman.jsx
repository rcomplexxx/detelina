import styles from '../styles/asortiman.module.css'
import Image from 'next/image'
import Kategorija from '@/components/Kategorija/Kategorija'


export default function Asortiman(){


    return <div className={styles.mainDiv}><div className={styles.categories}>
    <h1 className={styles.nasiProizvodiTitle}>Nasi proizdvodi</h1>
    <div className={styles.nasiProizvodiDiv}>
    <Kategorija kategorijaName='nutsCat.png' name='Orašasti plodovi i kandirano voće'>
        
      </Kategorija>
    <Kategorija kategorijaName='oil.png' name='Ulja, sirća, kapi i eterična ulja'>
    

    </Kategorija>
    <Kategorija kategorijaName='greenTea2.png' name='Čajevi'>
    <ul>
        <li>• Zeleni caj</li>
        <li>• Kamilica</li>
        <li>• Nana</li>
        <li>• Cicak</li>
        <li>• Koren koprive</li>
        <li>• List koprive</li>
      </ul>
    </Kategorija>
    <Kategorija kategorijaName='snacksCat.png' name='Slatka slana peciva i grickalice'/>
    <Kategorija kategorijaName='pasta.png' name='Testenine'/>
    <Kategorija kategorijaName='vineCat.png' name='Napici u prahu, sokovi, osvežavajući napici'/>
    <Kategorija kategorijaName='oats.png' name='Žitarice i brašna'/>
    <Kategorija kategorijaName='shampoo.png' name='Kozmetika'/>
    <Kategorija kategorijaName='super.png' name='Super proizvodi'/>
    <Kategorija kategorijaName='vegan.png' name='Veganski i bezglutenski proizvodi'/>
    </div>
    </div>
    </div>
}