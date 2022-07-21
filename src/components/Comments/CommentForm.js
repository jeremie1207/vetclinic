import './Comments.js';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const CommentForm = props => {


    const { t } = useTranslation();

    const [enteredFullName, setEnteredFullName] = useState('');
    const [enteredSelectNote, setEnteredSelectNote] = useState('');
    const [enteredComment, setEnteredComment] = useState('');
    const [errorFullName, setErrorFullName] = useState('');
    const [errorSelectedNote, setErrorSelectedNote] = useState('');
    const [errorComment, setErrorComment] = useState('');



    const fullNameHandler = event =>{
        setEnteredFullName(event.target.value);
    }

    const selectNoteHandler = event =>{
        setEnteredSelectNote(event.target.value);
    }
    const commentHandler = event =>{
        setEnteredComment(event.target.value);
    }

    

    const commentSubmitHandler = event => {

        event.preventDefault();

        if(enteredFullName === '' || enteredSelectNote === '' || enteredComment === ''){
           if(enteredFullName === ''){
                setErrorFullName(t('err_1'));
           }else{
                setErrorFullName('');
           }
           if(enteredSelectNote === ''){
                setErrorSelectedNote(t('err_2'));
           }else{
                setErrorSelectedNote('');
           }
           if(enteredComment === ''){
                setErrorComment(t('err_3'))
           }else{
                setErrorComment('');
           }
        }
        
        
        else{
            const comment = {
                id:Math.random(),
                username: enteredFullName,
                text: enteredComment,
                note: enteredSelectNote
            }
    
            props.onAddComment(comment);
            setEnteredFullName('');
            setEnteredComment('');
            setEnteredSelectNote('');
            setErrorFullName('');
            setErrorSelectedNote('');
            setErrorComment('');
        }

        
    }


    return (<div className='commentForm' onSubmit={commentSubmitHandler}>
        <h3 className="title">{t('give_your_opinion')}</h3>
        <form className='form'>
            <label>{t('full_name')}</label><br />
            <input type='text'  className='form-input' value={enteredFullName} onChange={fullNameHandler}></input><br />
            <p className='error'>{errorFullName}</p>
            <label>{t('select_rank')}</label><br />
            <p className='error'></p>
            <select id="notes" className='form-input' onChange={selectNoteHandler} value={enteredSelectNote}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br />
            <p className='error'>{errorSelectedNote}</p>
            <label>{t('comments')}</label><br />
            <textarea className='textarea form-input' onChange={commentHandler} value={enteredComment}></textarea><br />
            <p className='error'>{errorComment}</p>
            <button type='submit' className='form-input btn'>{t('comment')}</button><br />

        </form>
    </div>);
}

export default CommentForm;