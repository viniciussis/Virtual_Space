import './Menu.css'
import Links from '../Links'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Menu = () => {
  return (
    <header className='menu'>
      <nav className='navigator'>
        <Links to='/'>Home</Links>
        <Links to='/about-me'>About Me</Links>
      </nav>
      <div className='links'>
        <a className='link' href="https://www.instagram.com/_viniciussis/"><RiInstagramFill size={20} />&nbsp;Instagram</a>
        <a className='link' href="https://www.linkedin.com/in/viniciussis/"><FaLinkedinIn size={20} />&nbsp;Linkedin</a>
        <a className='link' href="https://twitter.com/_viniciussis"><FaTwitter size={20} />&nbsp;Twitter</a>
        <a className='link' href="https://github.com/viniciussis"><FaGithub size={20} />&nbsp;Github</a>
      </div>
    </header>
  )
}

export default Menu