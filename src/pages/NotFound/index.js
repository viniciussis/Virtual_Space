import './NotFound.css'
import error from '../../images/erro_404.png'

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <span className='error404'>404</span>
      <h1 className='errorTitle'>Ops! Página não encontrada.</h1>
      <p className='errorPara'>Tem certeza de que era isso que você estava procurando?<br/>
        Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
      <div className='return'>
        <button>
          Voltar
        </button>
      </div>
      <img className='errorImg' src={error} alt="error 404" />
    </div>
  )
}

export default NotFound