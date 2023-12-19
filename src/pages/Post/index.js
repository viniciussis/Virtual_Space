import { useParams } from 'react-router-dom';
import './Post.css';
import posts from '../../json/posts.json';
import Template from 'elements/Template';
import Markdown from 'react-markdown';
import NotFound from 'pages/NotFound';
import Default from 'elements/Default';
import Indications from 'elements/Indications';

const Post = () => {

  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id)
  })

  if (!post) {
    return <NotFound />
  }


  return (
    <Default>
      <Template coverPhoto={`/posts/${post.id}/capa.png`} title={post.title}>
        <div className='markdownContainer'>
          <Markdown>
            {post.text}
          </Markdown>
        </div>
      </Template>
      <Indications postId={post.id} />
    </Default>
  )
}

export default Post