import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
	<div className={styles.categoryList}>
		<Link href={'/blog?cat=style'} className={styles.item}>
				<span className={`${styles.categoryItem} ${styles.style}`}>
				Style
				</span>
		</Link>
		<Link href={'/blog?cat=fashion'} className={styles.item}>
				<span className={`${styles.categoryItem} ${styles.fashion}`}>
				Fashion
				</span>
		</Link>
		<Link href={'/blog?cat=food'} className={styles.item}>
				<span className={`${styles.categoryItem} ${styles.food}`}>
				Food
				</span>
		</Link>
		<Link href={'/blog?cat=travel'} className={styles.item}>
				<span className={`${styles.categoryItem} ${styles.travel}`}>
				Travel
				</span>
		</Link>
		<Link href={'/blog?cat=culture'} className={styles.item}>
				<span className={`${styles.categoryItem} ${styles.culture}`}>
				Culture
				</span>
		</Link>
		<Link href={'/blog?cat=coding'} className={styles.item}>
				<span className={`${styles.categoryItem} ${styles.coding}`}>
				Coding
				</span>
		</Link>
</div>
  )
}

export default MenuCategories