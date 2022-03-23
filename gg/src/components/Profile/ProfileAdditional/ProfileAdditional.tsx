import React, { FC } from 'react'
import { UserToProps } from '../../../Model/User.interface'
import IconSelector from '../../IconSelector/IconSelector'
import styles from './profileAdditional.module.scss'

const ProfileAdditional:FC<UserToProps> = ({user}) => {
  return (
   <div className={styles.additional_details}>
      <p>
        <IconSelector title='LAST_UPDATE'/>{user.updated_at}
      </p>
  </div>
  )
}

export default ProfileAdditional