import Banner from '../Banner'
import Post from '../Post'
import posts from '../../json/posts.json'
import './Home.css'
import Footer from 'elements/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <ul className='posts'>
        {posts.map(
          post => (<li key={post.id}>
            <Post post={post} />
          </li>)
        )}
      </ul>
      <Footer />
    </div>
  )
}

export default Home