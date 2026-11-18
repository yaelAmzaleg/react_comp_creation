import React from 'react'
import styles from './ProfileCard.module.css'
import Button from './Button';
export default function ProfileCard({name,description,avatar,type}) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <Button type={type} text={type} />
    </div>
  )
}
