import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import p1 from '../../../public/p1.jpeg'

const Card = () => {
  return (
	<div className={styles.container}>
			<div className={styles.imageContainer}>
			<Image className={styles.image}
			src={p1}
			alt=''
			fill
			/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2024 - 
					</span>
					<span className={styles.category}> CULTURE
					</span>
				</div>
				<Link href={''}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
				</Link>
				<p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatem quia alias non. Molestiae vel tempora voluptatum numquam odit? 
				</p>
				<Link href={''} className={styles.link}>Read More</Link>
			</div>
		</div>
  )
}

export default Card