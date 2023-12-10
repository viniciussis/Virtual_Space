import './Post.css'

const Post = ({ post }) => {
  return (
    <div className='post'>
      <img className='cover' src={`/posts/${post.id}/capa.png`} alt={post.title} />
      <h1 className='postTitle'>
        {post.title}
      </h1>
      <button className='readButton'>
        Ler
      </button>
    </div>
  )
}

export default Post