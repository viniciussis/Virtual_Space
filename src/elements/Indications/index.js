import PostCard from 'elements/PostCard';
import './Indications.css';
import posts from '../../json/posts.json';

const Indications = () => {

{/*  
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
}, [])

const [suggestions, setSuggestions] = useState([]);

*/}

  const newPosts = posts.filter(post => post.id)

  return (
    <div className='containerIndication'>
      <h2>Outros posts que você possa gostar:</h2>
      <PostCard/>
    </div>
  )
}

export default Indications;