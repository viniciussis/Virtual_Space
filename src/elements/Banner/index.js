import './Banner.css'
import profile from '../../images/Profile 06.jpeg.jpg'
import circle from '../../images/circulo_colorido.png'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='show'>
        <h1 className='tittle'>Virtual Space</h1>
        <p className='para'>"Welcome to my virtual space. I am Vinícius Silva Santos, a full-stack developer. Here, I share various insights and knowledge. I hope you learn something new!"</p>
      </div>
      <div className='images'>
        <img src={circle} alt="background circle" className='colorfulCicle' aria-hidden={true} />
        <img src={profile} alt="myself" className='myPhoto'/>
      </div>
    </div>
  )
}

export default Banner