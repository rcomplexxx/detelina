import styles from './kategorija.module.css'
import { useState } from 'react';
import Image from 'next/image';


export default function Kategorija(props) {
    const [showAnswer, setShowAnswer] = useState(false);
  
    function summonAnswer() {
      setShowAnswer(!showAnswer);
    }
  
    return (
      <div className={styles.dropDiv}>
        <h2>{props.name}</h2>

        <div className={styles.contentDiv}>

        <div className={styles.imageDiv}>
        <Image src={`/images/${props.kategorijaName}`} className={styles.title_div} onClick={summonAnswer} fill/>
        </div>
     
        <div className={`${styles.emerge} ${showAnswer ? styles.show : ""}`}>
          {props.children}
        </div>
        </div>
      </div>
    );
  }