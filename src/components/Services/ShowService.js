import './Service.css';
import React, {useState} from 'react';

import { useTranslation } from 'react-i18next';

const ShowService = (props) => {

    const { t } = useTranslation();

    const [show, setShow] = useState(false);
    const initialTextBtn = t("show");
    const [button, setButton] = useState(initialTextBtn);

    const moreInfoHandler = ()=> {
        if(show === false){
            setButton(t("hide"));
            setShow(true);
        }else{
            setButton(initialTextBtn);
            setShow(false);
        }
    }


    return ( <div>
        <div key={props.service.id} className='services-items'>
                <div className='flex space-between'>
                    <h5 className='title-service service-elem'>{props.service.name}</h5>
                    <button className='inline service-elem btn-green' onClick={moreInfoHandler}>{button}</button>
                </div>
                <div style={{display: show ? "block" : "none"}} className='service-elem'>
                    <p>{props.service.description}</p>
                    {props.service.price > 0 && <p className='price'>Prix : {props.service.price}$</p>}
                </div>
            </div>
    </div> );
}
export default ShowService;