import type { SidebarItem } from "./SidebarItem";
import { AiFillHome } from 'react-icons/ai';

// import dashboardIcon from "../../../assets/images/icons/Dashboard.png";
// import dasboardIconActiveBlue from "../../../assets/images/icons/Dashboard b.png";
// import dasboardIconActiveOrange from "../../../assets/images/icons/Dashboard o.png";

// import walletIcon from "../../../assets/images/icons/Wallets.png";
// import walletIconActiveBlue from "../../../assets/images/icons/Wallets b.png";
// import walletIconActiveOrange from "../../../assets/images/icons/Wallets o.png";

// import transactionsIcon from "../../../assets/images/icons/Transactions.png";
// import transactionsIconActiveBlue from "../../../assets/images/icons/Transactions b.png";
// import transactionsIconActiveOrange from "../../../assets/images/icons/Transactions o.png";

// import depositsIcon from "../../../assets/images/icons/Deposits.png";
// import depositsIconActiveBlue from "../../../assets/images/icons/Deposits b.png";
// import depositsIconActiveOrange from "../../../assets/images/icons/Deposits o.png";

// import withdrawalsIcon from "../../../assets/images/icons/Withdrawals.png";
// import withdrawalsIconActiveBlue from "../../../assets/images/icons/Withdrawals b.png";
// import withdrawalsIconActiveOrange from "../../../assets/images/icons/Withdrawals o.png";

// import reportsIcon from "../../../assets/images/icons/Reports.png";
// import reportsIconActiveBlue from "../../../assets/images/icons/Reports b.png";
// import reportsIconActiveOrange from "../../../assets/images/icons/Reports o.png";

// import usersIcon from "../../../assets/images/icons/Users.png";
// import usersIconActiveBlue from "../../../assets/images/icons/Users b.png";
// import usersIconActiveOrange from "../../../assets/images/icons/Users o.png";

// import usermangIcon from "../../../assets/images/icons/ManageUsers.png";
// import usermangIconActiveBlue from "../../../assets/images/icons/ManageUsers b.png";
// import usermangIconActiveOrange from "../../../assets/images/icons/ManageUsers o.png";

// import rolesIcon from "../../../assets/images/icons/Roles.png"
// import rolesIconActiveBlue from "../../../assets/images/icons/Roles b.png";
// import rolesIconActiveOrange from "../../../assets/images/icons/Roles o.png";

// import settingsIcon from "../../../assets/images/icons/Settings.png";
// import settingsIconActiveBlue from "../../../assets/images/icons/Settings b.png";
// import settingsIconActiveOrange from "../../../assets/images/icons/Settings o.png";

export const sidebarItems: SidebarItem[] = [
  { page: "dashboard",
    link: "/dashboard",
    tooltip: "dashboard",
    icon: <AiFillHome size={24} />,
    // icon: <img src={dashboardIcon} alt="dashboard" width={24} height={24} />,
    // activeIconLight: <img src={ dasboardIconActiveBlue } alt="dashboard" width={24} height={24} />,
    // activeIconDark: <img src={ dasboardIconActiveOrange } alt="dashboard" width={24} height={24} />,
  }
];
