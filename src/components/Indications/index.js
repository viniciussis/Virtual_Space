import PostCard from 'components/PostCard';
import './Indications.css';
import posts from '../../json/posts.json';

const Indications = ({ postId }) => {

  const newPosts = posts.filter(post => post.id !== postId).sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className='containerIndications'>
      <h2>Outros posts que você possa gostar:</h2>
      <ul className='indications'>
        {newPosts.map(
          post => (<li key={post.id}>
            <PostCard post={post} />
          </li>)
        )}
      </ul>
    </div>
  )
}

export default Indications;