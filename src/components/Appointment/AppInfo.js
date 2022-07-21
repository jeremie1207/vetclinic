import { useTranslation } from "react-i18next";
import './Appointment.css';

const AppInfo = ({specialists, formData, setFormData}) => {

    const { t } = useTranslation();

    return ( <div>
        <label>{t('how_can_we_help_you')}</label><br/>
        <textarea 
        className='textarea_app input_app' 
        type='text'
        value={formData.service}
        onChange={(event) => setFormData({...formData, service: event.target.value})}
        required/><br/>
        <p className="error"></p>

        <label>{t('special_request')}</label><br/>
        <input 
        className="input_app" 
        type='text'
        value={formData.special_request}
        onChange={(event) => setFormData({...formData, special_request: event.target.value})}
        placeholder={t('optional')}
        /><br/>
        <p className="error"></p>

        <label>{t('choose_your_specialist')}</label><br/>
        <select 
        className="input_app"
        value={formData.specialist}
        onChange={(event) => setFormData({...formData, specialist: event.target.value})} required>
            {specialists.map( spec => (
                  <option>{spec.fullname}</option>
                    
                ))}
        </select>
        <p className="error"></p>

        <label>{t('date_and_time')}</label><br/>
        <input 
        className="input_app" type='datetime-local' 
        value={formData.date}
        onChange={(event) => setFormData({...formData, date: event.target.value})}
        required
        /><br/>
        <p className="error"></p>

    </div> );
}
 
export default AppInfo;