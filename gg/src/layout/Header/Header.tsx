import { useSelector } from 'react-redux'
import ProfileAdditional from '../../components/Profile/ProfileAdditional/ProfileAdditional'
import ProfileAvatar from '../../components/Profile/ProfileAvatar/ProfileAvatar'
import ProfileDetails from '../../components/Profile/ProfileDetails/ProfileDetails'
import { GlobalStateType } from '../../types'
import styles from './header.module.scss'

export const Header = () => {

  const user = useSelector((state: GlobalStateType) => state.user)

  return (
    <div className={styles.box}>

      <ProfileAvatar user={user}/>
      <ProfileDetails user={user}/>
      <ProfileAdditional user={user}/>
    </div>
  )
}
