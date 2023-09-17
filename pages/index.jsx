import React, { useState } from 'react';
import styles from '../styles/home.module.css';
import GalleryCarousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Products from '@/components/Products/Products';
import products from '@/data/products.json';
import ZastoDaNasPosetite from '@/components/ZastoDaNasPosetite/ZastoDaNasPosetite';
import Image from 'next/image';
import classNames from "classnames";


export default function HomePage ()  {
  const[showContent,setShowContent]=useState('story');


    const images = [
        {
          src: '/images/1.png'
        },
        {
            src: '/images/2.png'
        },
        {
            src: '/images/3.png'
        },
        {
            src: '/images/4.png'
        },
      ];

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };



  return (
    <>
    <div className={styles.carouselDiv}>
     <GalleryCarousel images={images} hasIndexBoard={false}  hasThumbnails={false} isAutoPlaying={true} thumbnailHeight='15%'/>
     </div>
<div className={styles.container}>


<Products products={products}></Products>
<ZastoDaNasPosetite/> 

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
<button className={styles.black_button}>Shop All</button>

     

     <div className={styles.storyDiv}>
      <div  className={styles.miniStoryDiv}>
        <div className={styles.miniStoryTitleDiv}>
          <button onClick={()=>{setShowContent('story')}} className={showContent==='story' ?styles.markedButton:""}>O nama</button> <button className={showContent==='contact' ?styles.markedButton:""}  onClick={()=>{setShowContent('contact')}}>Postavite nam pitanje</button> 
          <button  className={showContent==='location' ?styles.markedButton:""}  onClick={()=>{setShowContent('location')}}>Informacije</button>
          </div>

{showContent==='story' && 
<p className={styles.miniStoryText}>Neka hrana postane tvoj saveznik u ostvarivanju zdravog i kvalitetnog života! U srcu Leskovca, 
naša posvećena ekipa je stvorila oazu zdrave hrane kako bi podržala naše sugrađane u ostvarivanju njihovih najboljih verzija. U Zdravom 
Zalogaju Leskovac, strastveno se trudimo da vam pružimo najfinije voće i povrće sa lokalnih njiva, kao i raznovrsne obroke koji hrane i 
dušu i telo. Sa dubokim korenom u našoj zajednici, želimo vas inspirisati da donesete svesne izbore za svoje zdravlje svakodnevno. 
Vaš put ka zdravlju i kvalitetnom životu počinje ovde, uz podršku Zdravog Zalogaja Leskovac.</p>}


{showContent==='location' && <>
<p className={styles.miniStoryText}>Lokacija: Ulica Zdravih Boraca br. 34</p>
<p className={styles.miniStoryText}>Mobilni: 066555333</p>
<p className={styles.miniStoryText}>Email: detelinaleskovac@gmail</p>
<p className={styles.miniStoryText}>Radno vreme: 8-5 radnim danima, 8-3 Subotom, 8-5 Nedeljom</p>
</>}

{showContent==='contact' &&

<>
<div  className={styles.contactInfoDiv} >
<div className={styles.inputGroup}>
  <label>Name</label>
<input id='name' className={styles.contactInput}/>

</div>

<div className={styles.inputGroup}>
  <label>Email</label>
<input id='email' className={styles.contactInput}/>

</div>



</div>
<div className={styles.messageField}>
<label>Message</label>
<textarea
    style={{  'flexGrow': '1'}}
    rows={5}
  />
  
  </div>
  <button className={styles.sendButton}>Send</button>
  </>
}


</div>
      <div className={styles.miniStoryDiv}><Image
            src={`/images/vinePic.png` } // Path to your image from the `public` directory
            alt="Example Image"
            className="object_fit_cover"
            fill
          /></div>
     </div>

    
    </div>
    </>
  );
};