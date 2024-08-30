import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'
import style from "../../../public/style.png"
import fashion from "../../../public/fashion.png"
import food from "../../../public/food.png"
import travel from "../../../public/travel.png"
import culture from "../../../public/culture.png"
import coding from "../../../public/coding.png"

const CategoryList = () => {
  return (
	<div className={styles.container}>
    <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image
              src={style}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            style
          </Link>
          <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
            <Image
              src={fashion}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            fashion
          </Link>
          <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
            <Image
              src={food}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            food
          </Link>
          <Link href="/blog?cat=" className={`${styles.category} ${styles.travel}`}>
            <Image
              src={travel}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            travel      
          </Link>
          <Link href="/blog?cat=" className={`${styles.category} ${styles.culture}`}>
            <Image
              src={culture}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            culture
          </Link>
          <Link href="/blog?cat=" className={`${styles.category} ${styles.coding}`}>
            <Image
              src={coding}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            coding
          </Link>
      </div>
  </div>
  )
}

export default CategoryList