import './Appointment.css';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import Form from './Form';


const Appointment = props => {

    const { t } = useTranslation();

    return (<div id='appointment'>
        <Container>
            <h3 className="title">{t("make_an_appointement")}</h3>
            <Form specialists={props.specialists}/>
        </Container>
    </div>);
}

export default Appointment;