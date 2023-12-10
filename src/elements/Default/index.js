import Banner from 'elements/Banner';
import '../Default/Default.css';
import { Outlet } from 'react-router-dom';
import Footer from 'elements/Footer';

const Default = () => {
  return (
    <div>
      <Banner/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Default