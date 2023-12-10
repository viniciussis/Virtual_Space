import { useParams } from 'react-router-dom';
import '../Post/Post.css';
import posts from '../../json/posts.json';
import PostCard from 'elements/PostCard';

const Post = () => {

  const params = useParams();

  const post = posts.find((post) => {
    return (
      post.id === Number(params.id)
    )
  })

  console.log(post)

  return (
    <PostCard post={post}>

    </PostCard>
  )
}

export default Post