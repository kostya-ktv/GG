import { Tooltip } from 'antd'
import React from 'react'
import IconSelector from '../../components/IconSelector/IconSelector'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.menu}>

         <Tooltip title="Home">
            <p><IconSelector title='HOME'/></p>     
        </Tooltip>
       </div>
       <div className={styles.menu}>
         
         <Tooltip title="Search">
            <p><IconSelector title='SEARCH'/></p>     
        </Tooltip>
       </div>
       
    </footer>
  )
}

export default Footer