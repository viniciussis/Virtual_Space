import { useParams } from 'react-router-dom';
import '../Post/Post.css';
import posts from '../../json/posts.json';
import Template from 'elements/Template';
import Markdown from 'react-markdown';

const Post = () => {

  const params = useParams();

  const post = posts.find((post) => {
    return (
      post.id === Number(params.id)
    )
  })

  console.log(post)

  return (
    <Template coverPhoto={`/posts/${post.id}/capa.png`} title={post.title}>
      <div className='markdownContainer'>
        <Markdown>
          {post.text}
        </Markdown>
      </div>
      
    </Template>
  )
}

export default Post