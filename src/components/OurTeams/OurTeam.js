import Container from "react-bootstrap/esm/Container";
import './OurTeam.css'
import { useTranslation } from "react-i18next";
import women from './Women_Vet.jpg';

const OurTeam = props => {

    const { t } = useTranslation();

    const specialists = props.specialists;

    return (<div id='our_team' className="our_team">
        <Container>
            <h3 className="title">{t("our_team")}</h3>
            <div className="flex_our_team">
                <div className="my_card">
                    <img src={women} className="img_card" />
                    <div className="center">
                        <h5 className="card_title">{specialists[0].fullname}</h5>
                    </div>
                    <div className="center">
                        <h5 className="card_title black">{specialists[0].speciality}</h5>
                    </div>

                    <p className="card_desc">
                        {specialists[0].desc}
                    </p>
                </div>
                <div className="my_card">
                <img src={women} className="img_card" />
                    <div className="center">
                        <h5 className="card_title">{specialists[1].fullname}</h5>
                    </div>
                    <div className="center">
                        <h5 className="card_title black">{specialists[1].speciality}</h5>
                    </div>

                    <p className="card_desc">
                        {specialists[1].desc}
                    </p>
                </div>
                <div className="my_card">
                <img src={women} className="img_card" />
                    <div className="center">
                        <h5 className="card_title">{specialists[2].fullname}</h5>
                    </div>
                    <div className="center">
                        <h5 className="card_title black">{specialists[2].speciality}</h5>
                    </div>

                    <p className="card_desc">
                        {specialists[2].desc}
                    </p>
                </div>
            </div>
        </Container>
    </div>);
}

export default OurTeam;