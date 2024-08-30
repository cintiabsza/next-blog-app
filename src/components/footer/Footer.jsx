import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../public/logo.png"

const Footer = () => {
  return (
	<div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
          src={logo}
          alt=''
          width={50}
          height={50}
          />
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima reprehenderit officia quaerat exercitationem numquam qui sint, modi animi voluptates obcaecati quisquam, iste delectus impedit quam nihil ducimus inventore autem incidunt.
        </p> 
        {/* <div className={styles.icons}>
          <Image src="/facebook.png" 
          alt="facebook" 
          width={18} 
          height={18} 
          />
          <Image src="/instagram.png" 
          alt="instagram" 
          width={18} 
          height={18} 
          />
          <Image src="/tiktok.png" 
          alt="tiktok" 
          width={18} 
          height={18} 
          />
          <Image src="/youtube.png" 
          alt="youtube" 
          width={18} 
          height={18} 
          />
        </div> */}
    </div>
    <div className={styles.links}>
     <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
            <Link href={"/"}>Homepage</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
      </div>     
      <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
            <Link href={"/"}>Style</Link>
            <Link href={"/"}>Fashion</Link>
            <Link href={"/"}>Coding</Link>
            <Link href={"/"}>Travel</Link>
      </div>
      <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Tiktok</Link>
            <Link href={"/"}>Youtube</Link>
       </div>
    </div>   
</div>
  )
}

export default Footer