import styles from '../styles/kontakt.module.css'


export default function Kontakt(){


    return <div className={styles.mainDiv}>

<div className={styles.miniStoryDiv}>
<div  className={styles.contactInfoDiv} >
<div className={styles.inputGroup}>
  <label>Ime</label>
<input id='name' className={styles.contactInput}/>

</div>

<div className={styles.inputGroup}>
  <label>Email</label>
<input id='email' className={styles.contactInput}/>

</div>



</div>
<div className={styles.messageField}>
<label>Pitanje</label>
<textarea
    style={{  'flexGrow': '1'}}
    rows={5}
  />
  
  </div>
  <button className={styles.sendButton}>Posalji</button>
  </div>
    </div>
}