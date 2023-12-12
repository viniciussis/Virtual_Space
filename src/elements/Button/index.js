import './Button.css'

const Button = ({ children, bStyle = '', action}) => {
  return (
    <button className={`button ${bStyle}`} onClick={action}>
      {children}
    </button>
  )
}

export default Button