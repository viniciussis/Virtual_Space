import Post from '../Post'
import posts from '../../json/posts.json'
import './Home.css'

const Home = () => {
  return (
    <div>
      <ul className='posts'>
        {posts.map(
          post => (<li key={post.id}>
            <Post post={post} />
          </li>)
        )}
      </ul>
    </div>
  )
}

export default Home