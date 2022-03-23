import { FC } from "react"
import { UserToProps } from "../../../Model/User.interface"
import IconSelector from "../../IconSelector/IconSelector"
import ProfileCounters from "../ProfileCounters/ProfileCounters"
import styles from './profileDetails.module.scss'

const ProfileDetails:FC<UserToProps> = ({user}) => {
  return (
   <div className={styles.details}> 
     <ProfileCounters user={user}/>
      <div className={styles.info}>
         <p><IconSelector title='LOCATION'/>{user.location}</p>
         <a href={user.blog ? user.blog : '#'} target="_blank" rel='noreferrer'>
            <p><IconSelector title='LINK'/>{user.blog}</p>
         </a>
         <p><IconSelector title='PROFILE'/>{user.bio}</p>
      </div>
   </div>
  )
}

export default ProfileDetails