import './Template.css'

const Template = ({ coverPhoto, title, children }) => {
  return (
    <div className='templateContainer'>
      <div className='coverPhoto' style={{backgroundImage: `url(${coverPhoto})`}} />
      <h2 className='templateTitle'>{title}</h2>
      <div className='contentContainer'>{children}</div>
    </div>
  )
}

export default Template