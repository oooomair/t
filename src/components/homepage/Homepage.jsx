import { home1, home2, home3, home4 } from '../../const/index'
import Carousel from '../carousel/Carousel'
import {Navbar} from '../navbar/Navbar'
import './homepage.scss'
 
const Homepage = () => {

  const homeImages = [home1, home2, home3, home4]

  return (
    <div className='homepage'>
      <Carousel/>
      <Navbar/>
    </div>
  )
}

export default Homepage