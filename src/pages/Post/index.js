import { useNavigate, useParams } from 'react-router-dom';
import './Post.css';
import posts from '../../json/posts.json';
import Template from 'elements/Template';
import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';

const Post = () => {
  
  const params = useParams();

  const navigate = useNavigate();

  const post = posts.find((post) => {
    return (
      post.id === Number(params.id)
    )
  })

  useEffect(() => {
    
    if(!post){
      navigate('/pageNotFound')
    }

    const newSuggestions = posts.filter(post => post.id !== Number(params.id));

    const randomSuggestions = [];
    
    while (randomSuggestions.length < 4 && newSuggestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * newSuggestions.length);
      const random = newSuggestions[randomIndex];
      
      if (!randomSuggestions.includes(random)) {
        randomSuggestions.push(random);
      }
      newSuggestions.splice(randomIndex, 1);
    }

    setSuggestions(newSuggestions)
  }, [navigate, post, params])

  const [suggestions, setSuggestions] = useState([]);

  console.log(suggestions)

  return (
    <Template coverPhoto={`/posts/${post.id}/capa.png`} title={post.title}>
      <div className='markdownContainer'>
        <Markdown>
          {post.text}
        </Markdown>
      </div>
      <div className='suggestions'>
        <h2>Outros posts que você pode gostar:</h2>
      </div>
    </Template>
  )
}

export default Post