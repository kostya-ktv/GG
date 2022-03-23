import { FC } from "react"
import { UserToProps } from "../../../Model/User.interface"
import styles from './profileAvatar.module.scss'

const ProfileAvatar:FC<UserToProps> = ({user}) => {
  return (
   <div className={styles.avatar}>
      <img src={user.avatar_url} alt='avatar'/>
      <p className={styles.login}>{user.name}</p>
      <p>{user.login}</p>
   </div>
  )
}

export default ProfileAvatar