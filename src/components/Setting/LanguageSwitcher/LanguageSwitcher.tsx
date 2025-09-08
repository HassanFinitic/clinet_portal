import { BiWorld } from 'react-icons/bi';
import i18n from "../../../i18n"
import AppIcon from "../../_UI/AppIcon/AppIcon"

const LanguageSwitcher = () => {
    return (
        <AppIcon 
            icon={<BiWorld size={20} />} 
            tooltip="Change Language" 
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")} 
        />
    )
}

export default LanguageSwitcher

