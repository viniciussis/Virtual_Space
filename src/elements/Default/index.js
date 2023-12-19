import Banner from 'elements/Banner';
import '../Default/Default.css';
import { Outlet } from 'react-router-dom';
import Footer from 'elements/Footer';

const Default = ({ children }) => {
  return (
    <div>
      <Banner/>
      <Outlet/>
      {children}
      <Footer/>
    </div>
  )
}

export default Default