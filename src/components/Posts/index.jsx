import P from 'prop-types';
import { Postcard } from '../PostCard';
import './styles.css';


export const Posts = ({ posts = [] }) => (
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

Posts.defaultProps = {
  posts: [],
}

// Posts.propTypes = {
//   posts: P.array,
// }

Posts.propTypes = {
  posts: P.arrayOf(P.shape({
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired
  }))
}
