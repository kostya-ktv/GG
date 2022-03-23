import { FC } from 'react'
import { IconSelectorOptions, IconSelectorProps} from './iconSelector.props'
import Home from '../../assets/icons/home.svg'
import Search from '../../assets/icons/search.svg'
import Location from '../../assets/icons/location.svg'
import Link from '../../assets/icons/link.svg'
import Profile from '../../assets/icons/profile.svg'
import LastUpdate from '../../assets/icons/last_update.svg'

const IconSelector:FC<IconSelectorProps> = ({title}) => {
 
   switch (title) {

      case 'HOME': return <Home/>
      case 'SEARCH': return <Search/>
      case 'LOCATION': return <Location/>
      case 'LINK': return <Link/>
      case 'PROFILE': return <Profile/>
      case 'LAST_UPDATE': return <LastUpdate/>

      default: return <Home/>
   }

}

export default IconSelector

