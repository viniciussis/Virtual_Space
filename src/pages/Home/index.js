import PostCard from '../../elements/PostCard'
import posts from '../../json/posts.json'
import './Home.css'

const Home = () => {
  return (
    <div>
      <ul className='posts'>
        {posts.map(
          post => (<li key={post.id}>
            <PostCard post={post} />
          </li>)
        )}
      </ul>
    </div>
  )
}

export default Home