import { HiOutlineBell } from 'react-icons/hi2';
import AppIcon from "../../_UI/AppIcon/AppIcon"

const Notification = () => {
    return (
        <AppIcon
            tooltip={`Notification`}
            icon={<HiOutlineBell size={20} />}
            onClick={() => console.log("Notification")}
        />
    )
}

export default Notification