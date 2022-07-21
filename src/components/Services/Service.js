import './Service.css';
import React from 'react';
import ShowService from './ShowService';

const Service = (props) => {

    const services = props.data;
  

    return (<div>
        {services.map(service => (
            <ShowService service={service} key={service.id}/>
        ))}
    </div>);
}

export default Service;