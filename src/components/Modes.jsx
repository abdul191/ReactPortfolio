import { useState } from "react";
import { IoIosContrast } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";

const Modes = () => {
    const [mode, setMode] = useState(true);
    const toggleIcon = () => {
        setMode(!mode);
    };
    return (
        <div onClick={toggleIcon} className="modes">
            {mode ? <MdOutlineWbSunny className="modesIcon" /> : <IoIosContrast className="modesIcon" />}
        </div>
    );
}

export default Modes;