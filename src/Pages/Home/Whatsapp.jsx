import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
    return (
        <div className="whatsappContainer">
            <a
                href="https://wa.me/923335942681?text=Hello,%20I%20came%20across%20your%20portfolio%20and%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20further?"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="whatsappIcon" />
            </a>
        </div>
    );
}

export default Whatsapp;