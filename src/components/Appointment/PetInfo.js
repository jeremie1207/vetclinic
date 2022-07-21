import { useTranslation } from "react-i18next";
import './Appointment.css'

const PetInfo = ({formData, setFormData}) => {

    const { t } = useTranslation();

    return ( <div>
        <label>{t('name')}</label><br/>
        <input 
        className="input_app" 
        type='text' 
        value={formData.name}
        onChange={(event) => setFormData({...formData, name: event.target.value})}
        required
        /><br/>
        <p className="error"></p>
        <label>{t('age_month')}</label><br/>
        <input 
        className="input_app" 
        type='number' 
        value={formData.age_month}
        onChange={(event) => setFormData({...formData, age_month: event.target.value})}
        required
        /><br/>
        <p className="error"></p>
        <label>{t('sex')}</label><br/>
        <select 
        className="input_app"
        value={formData.sex}
        onChange={(event) => setFormData({...formData, sex: event.target.value})}
        required
        >
            <option>{t('male')}</option>
            <option>{t('female')}</option>
        </select>
        <p className="error"></p>
        <label>{t('type')}</label><br/>
        <select 
        className="input_app"
        value={formData.type}
        onChange={(event) => setFormData({...formData, type: event.target.value})}
        required>
            <option>{t('canine')}</option>
            <option>{t('feline')}</option>
            <option>{t('exotic')}</option>
            <option>{t('other')}</option>
        </select>
        <p className="error"></p>
        <label>{t('race')}</label><br/>
        <input 
        className="input_app" 
        type='text' 
        value={formData.race}
        onChange={(event) => setFormData({...formData, race: event.target.value})}
        required
        /><br/>
        <p className="error"></p>
     
    </div> );
}
 
export default PetInfo;