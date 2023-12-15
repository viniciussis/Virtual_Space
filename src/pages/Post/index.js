import { useNavigate, useParams } from 'react-router-dom';
import './Post.css';
import posts from '../../json/posts.json';
import Template from 'elements/Template';
import Markdown from 'react-markdown';
import { useEffect } from 'react';
import Indications from 'elements/Indications';

const Post = () => {
  
  const params = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => {
    return post.id === Number(params.id)
  })

  useEffect(() => {  
    if(!post){
      navigate('/pageNotFound')
    }
  })


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