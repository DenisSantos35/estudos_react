import './styles.css'

export const Postcard = ({title, cover, body}) =>  (
        <div className='post'>
            <img src={cover} alt={title}></img>
            <div  className='post-content'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
