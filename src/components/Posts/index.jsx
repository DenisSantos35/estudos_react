import { Postcard } from '../PostCard';
import './styles.css'
export const Posts = ({posts}) => (
    <div className='posts'>
    {posts.map((element) => (
      <Postcard 
      key={element.id}
      title={element.title}
      body={element.body}
      id={element.id}
      cover={element.cover}
      //post={element}
       />
      ))}
  </div>

);