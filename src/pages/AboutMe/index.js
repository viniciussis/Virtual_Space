import Template from 'components/Template'
import './AboutMe.css'
import myPhoto from '../../images/Profile 01.jpeg'
import cover from '../../images/dev_life.jpg'

const AboutMe = () => {
  return (
    <div>
      <Template coverPhoto={cover} title='About Me' >
        <h3 className='caption'>Hello, I'm Vinícius!</h3>
        <img className='myPhoto' src={myPhoto} alt="profile" />
        <p className='para'>
          Olá! Sou Vinícius Silva Santos, um desenvolvedor de software apaixonado por programação e ciência de dados, que apesar de possuir pouca experiência profissional, estou comprometido em impulsionar inovação e excelência em cada projeto em que me envolvo.
        </p>
        <p className='para'>
          Minha jornada de ensino me levou a estudar numa das melhores faculdades de ensino da Bahia, o IFBA, e támbem na maior escola online de tecnologia do brasil, a Alura. Estou constantemente buscando novos desafios e oportunidades para crescer e aprender.
        </p>
        <p className='para'>
          Minhas principais habilidades incluem um amplo conhecimento nas linguagens de programação Java, Python, Javascript, conhecimento web como HTML, CSS e SQL, controle de versão no GIT & GitHub e conhecimento em bancos de dados como MySQL e MongoDB. Acredito que o trabalho em equipe é a chave para o sucesso, e tenho orgulho de colaborar com colegas para alcançar resultados excepcionais.
        </p>
        <p className='para'>
          Fora do ambiente de trabalho, sou um entusiasta em academia e nutrição, e um ótimo leitor. Acredito na importância de equilibrar a vida profissional com o crescimento pessoal e a contribuição para a comunidade.
        </p>
        <p className='para'>
          Estou sempre aberto a conectar com pessoas que compartilham interesses semelhantes ou que desejam discutir oportunidades de colaboração. Vamos juntos construir um futuro de sucesso!
        </p>
        <p className='para'>
          Fique à vontade para entrar em contato comigo aqui no LinkedIn ou através do meu e-mail em vinicius01012@gmail.com
        </p>
      </Template>
    </div>
  )
}

export default AboutMe