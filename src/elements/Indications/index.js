import PostCard from 'elements/PostCard';
import './Indications.css';
import posts from '../../json/posts.json';

const Indications = () => {

  const newPosts = posts.filter(post => post.id)

  return (
    <div className='containerIndication'>
      <h2>Outros posts que você possa gostar:</h2>
      <PostCard/>
    </div>
  )
}

export default Indications;