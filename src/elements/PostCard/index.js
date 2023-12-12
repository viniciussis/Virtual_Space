import { Link } from 'react-router-dom'
import './PostCard.css'
import Button from 'elements/Button'

const PostCard = ({ post }) => {
  return (
    <div className='postCard'>
      <img className='cover' src={`/posts/${post.id}/capa.png`} alt={post.title} />
      <h1 className='postCardTitle'>
        {post.title}
      </h1>
      <Link to={`/articles/${post.id}`}>
        <Button bStyle='bgLight'>
          Ler
        </Button>     
      </Link>
    </div>
  )
}

export default PostCard