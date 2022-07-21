import './Form.css';
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import PetInfo from './PetInfo';
import AppInfo from './AppInfo';
import { useTranslation } from 'react-i18next';

const Form = props => {

    const { t } = useTranslation();

    const [page, setPage] = useState(0);



    const FormTitles = [t("personal_info"), t("pet_info"), t("app_info")];
    const [formData, setFormData] = useState({
        fullname: "",
        address: "",
        city: "",
        email: "",
        phone: "",
        name: "",
        age_month: "",
        sex: "",
        type: "",
        race: "",
        service: "",
        special_request: "",
        specialiast: "",
        date: new Date(),


    })

    const removeForm = () => {
        setFormData({
            fullname: "",
            address: "",
            city: "",
            email: "",
            phone: "",
            name: "",
            age_month: "",
            sex: "",
            type: "",
            race: "",
            service: "",
            special_request: "",
            specialiast: "",
            date: new Date(),
        })
    }



   


    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {

            return <PetInfo formData={formData} setFormData={setFormData} />
        } else {

            return <AppInfo formData={formData} setFormData={setFormData} specialists={props.specialists} />
        }
    }

    const appFormHandler = event => {
        event.preventDefault();


        if (page === FormTitles.length - 1) {
           removeForm();
           setPage(0);
           alert('submit')
        }
        else {
            setPage((currentPage) => currentPage + 1)
        }

    }









    return (<div className='app_form'>
        <div className='progressbar'>
            <div className='bar'
                style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
            >
            </div>
        </div>
        <form onSubmit={appFormHandler} className='app_form_container'>
            <div className='app_header'>
                <h4>{FormTitles[page]}</h4>
            </div>
            <div className='app_body'>
                {PageDisplay()}
            </div>
            <div className='app_footer'>
                <button
                    disabled={page === 0}
                    onClick={
                        () => {
                            setPage((currentPage) => currentPage - 1)
                        }}
                    className='btn btn_app'
                >{t('prev')}</button>
                <button
                    className='btn btn_app'
                    type='submit'
                >{page === FormTitles.length - 1 ? t('submit') : t('next')}</button>
            </div>
        </form>
    </div>);
}

export default Form;