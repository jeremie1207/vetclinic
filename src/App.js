import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Comments from './components/Comments/Comments';
import Contact from './components/Contact/Contact';
import Appointment from './components/Appointment/Appointment';
import FAQ from './components/FAQ/FAQ';
import OurTeam from './components/OurTeams/OurTeam';
import Footer from './components/Footer/Footer';

function App() {


  const { t } = useTranslation();

  const changeLanguageHandler = (e) => {
    i18next.changeLanguage(e.target.value);
  }

  const specialist = [
    {
      id:Math.random(),
      fullname : 'Briana',
      speciality : t('laboratory_veterinarians'), 
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio bibendum, gravida turpis id, aliquam mi. Duis quis dui tempor, mattis libero sed, finibus elit. Nulla egestas risus maximus magna rhoncus convallis. Fusce tincidunt fermentum tellus et condimentum. Suspendisse a nisi vitae dolor ultrices ultrices vitae a purus. Nam dolor lectus, scelerisque eu tincidunt ut, dictum id risus'
    }, 
    {
      id:Math.random(),
      fullname : 'Laura',
      speciality : t('exotic_animal'), 
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio bibendum, gravida turpis id, aliquam mi. Duis quis dui tempor, mattis libero sed, finibus elit. Nulla egestas risus maximus magna rhoncus convallis. Fusce tincidunt fermentum tellus et condimentum. Suspendisse a nisi vitae dolor ultrices ultrices vitae a purus. Nam dolor lectus, scelerisque eu tincidunt ut, dictum id risus'
    }, 
    {
      id:Math.random(),
      fullname : 'Diana',
      speciality : t('veterinary_specialists'), 
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio bibendum, gravida turpis id, aliquam mi. Duis quis dui tempor, mattis libero sed, finibus elit. Nulla egestas risus maximus magna rhoncus convallis. Fusce tincidunt fermentum tellus et condimentum. Suspendisse a nisi vitae dolor ultrices ultrices vitae a purus. Nam dolor lectus, scelerisque eu tincidunt ut, dictum id risus'
    }
  ]

  return (
    <div className="App">

      <div className='my-nav-bar'>
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#">VET CLINIC</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto"
                navbarScroll
              >
                <Nav.Link href='projet_2_seg3525#'>{t("home")}</Nav.Link>
                <Nav.Link href="projet_2_seg3525#services">{t("our_services")}</Nav.Link>
                <Nav.Link href="projet_2_seg3525#our_team">{t("our_team")}</Nav.Link>
                <Nav.Link href="projet_2_seg3525#comments">{t("opinion_of_our_customer")}</Nav.Link>
                <Nav.Link href="projet_2_seg3525#contact">{t("contact")}</Nav.Link>
                <Nav.Link href="projet_2_seg3525#faq">FAQ</Nav.Link>
                <select  className='select_lang'  onChange={changeLanguageHandler}>
                  <option className='select_lang_item' value='en'>English</option>
                  <option className='select_lang_item' value='fr'>Français</option>
                </select>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

      <Header />

      <Services />

      <Comments />

      <Contact />

      <Appointment specialists={specialist} />

      <FAQ />

      <OurTeam specialists={specialist}/>

      <Footer />

    </div>
  );
}

export default App;
