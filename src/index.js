import React from 'react'
import styles from './styles.module.css'

export const Button = ({type,text}) =>{
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
// her bir butonun tipi(primary, default, dashed, text, link) gelen type propu ile değişmektedir
}
