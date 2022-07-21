import './Header.css';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav } from 'react-bootstrap';

const Header = () => {

    const { t } = useTranslation();

    return <div className="header">

        <Container>
            <div className="header-contains">
                <h2 className='call'>{t("call")}</h2>
                <p className='call_item'>{t("goal")}</p>
                <Nav.Link href="projet_2_seg3525#appointment" className='btn-green'>{t("make_an_appointement")}</Nav.Link>
            </div>
        </Container>

    </div>
}

export default Header;