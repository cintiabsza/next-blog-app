import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import p1 from '../../../public/p1.jpeg'

const Featured = () => {
  return (
	<div className={styles.container}>
    <h1 className={styles.title}>
        <b>Hey, lama dev here! Discover my stories and creative ideas.</b>
    </h1>
    <div className={styles.post}>
        <div className={styles.imgContainer}>
              <Image className={styles.image}
              src={p1}
              alt=''
              fill
              />
        </div>
        <div className={styles.textContainer}>
              <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cupiditate incidunt facilis corrupti nobis unde in, quod suscipit nam, aspernatur necessitatibus. Expedita voluptatem magnam, corrupti consequatur modi hic ad consectetur!
              </p>
              <button className={styles.button}>Read More</button>
        </div>
      </div>
  </div>
)}

export default Featured