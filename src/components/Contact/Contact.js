import './Contact.css';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';


const Contact = () => {

    const { t } = useTranslation();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errFullname, setErrFullname] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errMessage, setErrMessage] = useState('');



    const validEmail = email => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }

    const fullNameHandler = event => {
        setFullname(event.target.value);
    }
    const emailHandler = event => {
        setEmail(event.target.value);
    }
    const messageHandler = event => {
        setMessage(event.target.value);
    }

    const sendMessageHandler = event => {
        event.preventDefault();

        if (fullname === '' || message === '' || !validEmail(email)) {
            if (fullname === '') {
                setErrFullname(t('err_1'));
            } else {
                setErrFullname('');
            }

            if (!validEmail(email)) {
                setErrEmail(t('err_4'));
            }
            else {
                setErrEmail('');
            }
            if (message === '') {
                setErrMessage(t('err_5'));
            } else {
                setErrMessage('');
            }

        }

        else {
            alert(t("confirmation_send"));
            setFullname('');
            setEmail('');
            setMessage('');
            setErrFullname('');
            setErrEmail('');
            setErrMessage('');
        }

    }

    return (
        <div className='contact' id='contact'>
            <Container>
                <h3 className="title">{t("contact")}</h3>
                <div className='flex_contact'>
                    <div>
                        <div className='cat_bg'>

                        </div>

                        <div className='flex-infos'>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                </svg>
                                <span> {t('address')}</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <span> +1(123)123-1234</span>
                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                                <span> vetclinic@mail.com</span>
                            </div>

                        </div>


                    </div>

                    <div className='form'>
                        <form onSubmit={sendMessageHandler}>
                            <label>{t("full_name")}</label><br />
                            <input className='input_contact' type="text" value={fullname}  onChange={fullNameHandler} /><br />
                            <p className='error'>{errFullname}</p>
                            <label>{t("your_email")}</label><br />
                            <input className='input_contact' type='email' value={email}  onChange={emailHandler} /><br />
                            <p className='error'>{errEmail}</p>
                            <label>{t('message')}</label><br />
                            <textarea className='textarea textarea_contact input_contact' value={message} /><br />
                            <p className='error'>{errMessage}</p>
                            <button type='submit' className='input_contact btn_send btn'>{t('send')}</button>
                        </form>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Contact;