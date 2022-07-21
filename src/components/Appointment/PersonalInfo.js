import { useTranslation } from "react-i18next";
import './Appointment.css';


const PersonalInfo = ({formData, setFormData}) => {

    const { t } = useTranslation();

    return (<div>
        <label>{t('full_name')}</label><br/>
        <input 
        className="input_app" 
        type='text' 
        value={formData.fullname}
        onChange={(event) => setFormData({...formData, fullname: event.target.value})}
        required
        /><br/>
        <p className="error"></p>
        <label>{t('address_form')}</label>
        <br/>
        <input 
        className="input_app" 
        type='text' 
        value={formData.address}
        onChange={(event) => setFormData({...formData, address: event.target.value})}
        required
        /><br/>
        <p className="error"></p>
        <label>{t('city')}</label>
        <br/>
        <input 
        className="input_app" 
        type='text' 
        value={formData.city}
        onChange={(event) => setFormData({...formData, city: event.target.value})}
        required
        /><br/>
        <p className="error"></p>

        <label>{t('email')}</label>
        <br/>
        <input 
        className="input_app" 
        type='email' 
        value={formData.email}
        onChange={(event) => setFormData({...formData, email: event.target.value})}
        required
        /><br/>
        <p className="error"></p>

        <label>{t('phone_number')}</label>
        <br/>
        <input 
        className="input_app" 
        type='tel' 
        value={formData.phone}
        onChange={(event) => setFormData({...formData, phone: event.target.value})}
        required
        /><br/>
        <p className="error"></p>
        
    </div>);
}
 
export default PersonalInfo;