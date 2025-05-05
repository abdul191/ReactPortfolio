import { IoIosContrast } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Modes = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div onClick={toggleTheme} className="modes">
            {theme === 'light' ? <MdOutlineWbSunny className="modesIcon" /> : <IoIosContrast className="modesIcon" />}
        </div>
    );
}

export default Modes