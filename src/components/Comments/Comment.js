import './Comment.css';
import Card from 'react-bootstrap/Card';


const Comment = (props) => {
    return (
        <div className='comment'>
            <div style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>{props.comment.username}</Card.Title>
                    <Card.Text>
                        {props.comment.text}
                    </Card.Text>
                    <Card.Text>
                        {props.comment.note}/5⭐
                    </Card.Text>
                </Card.Body>
            </div>
        </div>
    );
}


export default Comment;