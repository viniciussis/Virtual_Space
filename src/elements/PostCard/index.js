import { Link } from 'react-router-dom'
import './PostCard.css'

const PostCard = ({ post }) => {
  return (
    <div className='postCard'>
      <img className='cover' src={`/posts/${post.id}/capa.png`} alt={post.title} />
      <h1 className='postCardTitle'>
        {post.title}
      </h1>
      <Link to={`/articles/${post.id}`}>
        <button className='readButton'>
          Ler
        </button>     
      </Link>
    </div>
  )
}

export default PostCard