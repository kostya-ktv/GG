import React, { FC } from 'react'
import styles from './content.module.scss'


const Content:FC = ({children}) => {
  return (
    <div className={styles.content}>
       {children}
   </div>
  )
}

export default Content