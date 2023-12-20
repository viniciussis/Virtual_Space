import Banner from 'components/Banner';
import './Default.css';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';

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