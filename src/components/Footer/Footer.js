import './Footer.css';
import Container from 'react-bootstrap/esm/Container';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';


const Footer = () => {


    const { t } = useTranslation();

    return (
        <div className='my_footer'>
            <Container>

                <div className='footer_flex'>
                    <div className='footer_item'>
                        <h6>{t('opening_time')}</h6>
                        <p>{t('monday')}</p>
                        <p>{t('tuesday')}</p>
                        <p>{t('wednesday')}</p>
                        <p>{t('friday')}</p>
                        <p>{t('saturday')}</p>
                        <p>{t('sunday')}</p>
                    </div>
                    <div className='footer_item'>
                        <h6>{t('contact')}</h6>
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
                    <div className='footer_item'>
                        <h6>{t('useful_links')}</h6>
                        <Nav.Link href='projet_2_seg3525#' className='color_white'>{t("home")}</Nav.Link>
                        <Nav.Link href="projet_2_seg3525#services" className='color_white'>{t("our_services")}</Nav.Link>
                        <Nav.Link href="projet_2_seg3525#our_team" className='color_white' >{t("our_team")}</Nav.Link>
                        <Nav.Link href="projet_2_seg3525#comments" className='color_white' >{t("opinion_of_our_customer")}</Nav.Link>
                        <Nav.Link href="projet_2_seg3525#contact" className='color_white '>{t("contact")}</Nav.Link>
                        <Nav.Link href="projet_2_seg3525#faq" className='color_white' >FAQ</Nav.Link>
                    </div>
                </div>
            </Container>

        </div>);
}

export default Footer;