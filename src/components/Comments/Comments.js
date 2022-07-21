import './Comments.css';
import Comment from './Comment';
import Container from 'react-bootstrap/esm/Container';
import CommentForm from './CommentForm';
import React ,{useState} from 'react';
import { useTranslation } from 'react-i18next';


const COMMENTS = [
    {
        id:Math.random(),
        username: 'Bill',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor felis. Sed luctus eros sem, at euismod nunc fringilla pharetra. Maecenas dignissim odio vel risus luctus dapibus. Sed convallis facilisis lacinia.',
        note: 5
    }, 
    {
        id:Math.random(),
        username: 'Henry',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor felis. Sed luctus eros sem, at euismod nunc fringilla pharetra. Maecenas dignissim odio vel risus luctus dapibus. Sed convallis facilisis lacinia.',
        note: 4
    },
    {
        id:Math.random(),
        username: 'Bob',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor felis. Sed luctus eros sem, at euismod nunc fringilla pharetra. Maecenas dignissim odio vel risus luctus dapibus. Sed convallis facilisis lacinia.',
        note: 3
    }

]


const Comments = () => {

    const { t } = useTranslation();

    const [comments, setComments] = useState(COMMENTS);

    const addCommentHandler = comment => {
        setComments(prevComments => {
            return [comment, ...prevComments];
        });
    }
    

    return (<div id='comments'>
        <Container>
            <h3 className="title">{ t("opinion_of_our_customer")}</h3>
            <div className='comments__items'>
                {comments.map( comment => (
                    <div key={comment.id}>
                        <Comment comment={comment}/>
                    </div>
                    
                ))}
            </div>

            <CommentForm onAddComment={addCommentHandler}/>
        </Container>
    </div> );
}
 
export default Comments;