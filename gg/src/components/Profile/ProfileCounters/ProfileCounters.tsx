import { FC } from 'react'
import { UserToProps } from '../../../Model/User.interface'
import styles from './profileCounters.module.scss'

const ProfileCounters:FC<UserToProps> = ({user}) => {
  return (
   <div className={styles.counters}>

      <div className={styles.element}>
         <p className={styles.count}>{user.followers}</p>
         <p>Followers</p>
      </div>

      <div className={styles.element}>
         <p className={styles.count}>{user.following}</p>
         <p>Following</p>
      </div>

      <div className={styles.element}>
         <p className={styles.count}>{user.public_repos}</p>
         <p>Repositories</p>
      </div>
            
   </div>
  )
}

export default ProfileCounters