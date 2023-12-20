import './NotFound.css'
import error from '../../images/erro_404.png'
import Footer from 'components/Footer'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();

  function returningPage() {
    navigate(-1);
  }

  return (
    <div>
      <div className='notFoundContainer'>
        <span className='error404'>404</span>
        <h1 className='errorTitle'>Ops! Página não encontrada.</h1>
        <p className='errorPara'>Tem certeza de que era isso que você estava procurando?<br />
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
        <div className='return'>
          <Button bStyle='bgDark' action={returningPage}>Voltar</Button>
        </div>
        <img className='errorImg' src={error} alt="error 404" />

      </div>
      <div className='whiteSpace' />
      <Footer />
    </div>
  )
}

export default NotFound