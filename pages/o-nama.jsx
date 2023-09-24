import Image from 'next/image';
import styles from '../styles/onama.module.css';


export default function ONama ()  {

return <div className={styles.mainDiv}>
    <div className={`${styles.segementDiv} ${styles.firstSegment}`}>
    <h1>O nama</h1>

    <p className={styles.oNamaText}>Neka hrana postane tvoj saveznik u ostvarivanju zdravog i kvalitetnog života! U srcu Leskovca, 
naša posvećena ekipa je stvorila oazu zdrave hrane kako bi podržala naše sugrađane u ostvarivanju njihovih najboljih verzija. U Zdravom 
Zalogaju Leskovac, strastveno se trudimo da vam pružimo najfinije voće i povrće sa lokalnih njiva, kao i raznovrsne obroke koji hrane i 
dušu i telo. Sa dubokim korenom u našoj zajednici, želimo vas inspirisati da donesete svesne izbore za svoje zdravlje svakodnevno. 
Vaš put ka zdravlju i kvalitetnom životu počinje ovde, uz podršku Zdravog Zalogaja Leskovac.</p>

</div>
<div className={styles.segementDiv}> <div className={styles.roundImageDiv}>
    <Image
    src='/images/logo.png'
    fill/>
    </div></div>

<div className={`${styles.segementDiv} ${styles.thirdSegment}`}> 


<div className={styles.pointDiv}>
    <img src='/images/2.png'/>
    <div>
    <h3>PREKO 2000 PROIZVODA</h3>
<p>Bio kutak svojim kupcima nudi preko 2000 različitih proizvoda.</p>
</div></div>


<div className={styles.pointDiv}>
<img src='/images/2.png'/>
<div><h3>ORGANSKO PRE SVEGA</h3>
<p>Posebnu pažnju posvećujemo organskoj ishrani.</p>
</div></div>

<div className={styles.pointDiv}>
<img src='/images/2.png'/>
<div><h3>ZDRAVO I UKUSNO</h3>
<p>Zelimo da nasi kupci poboljsaju svoje zdravlje dok uzivaju u ukusnoj hrani</p></div></div>



</div>
</div>

}