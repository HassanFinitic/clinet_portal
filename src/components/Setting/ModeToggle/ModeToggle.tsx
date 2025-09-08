import { useThemeContext } from "../../../theme/ThemeContextProvider";
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import AppIcon from "../../_UI/AppIcon/AppIcon";


const ModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
      <AppIcon
        tooltip="Toggle Mode"
        icon={mode === "dark" ? <BiSolidSun size={20} /> : <BiSolidMoon size={20} />}
        onClick={toggleColorMode}
      />
  );
};

export default ModeToggle;