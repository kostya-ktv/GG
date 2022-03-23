import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { fetchUserByLogin_action } from '../store/action/user.actions'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './layout.module.scss'

export const Layout = () => {
   const dispatch = useDispatch()
   fetchUserByLogin_action('kostya-ktv', dispatch)
  return (
     <>
     <div className={styles.container}>
     <div className={styles.main}>
        <Header/>
        <Content>
           <Outlet/>
        </Content>
        <Footer/>
     </div>
     </div>
     </>
  )
}
