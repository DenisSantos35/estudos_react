import P from 'prop-types';
import './styles.css'

export const Postcard = ({title, cover, body, id}) =>  (
        <div className='post'>
            <img src={cover} alt={title}></img>
            <div  className='post-content'>
                <h2>{title} {id}</h2>
                <p>{body}</p>
            </div>
        </div>
    );

Postcard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired
}
