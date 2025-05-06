import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { FaGlobe } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const languages = [
    { code: 'en', label: 'English', region: 'United States' },
    { code: 'ur', label: 'اردو', region: 'Pakistan' },
    { code: 'ar', label: 'العربية', region: 'العربية' },
    // Add more languages as needed
];

const LanguageToggle = () => {
    const { t } = useTranslation();
    const { i18n: { language } } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLanguageChange = (code) => {
        i18n.changeLanguage(code);
        document.body.dir = code === 'ar' || code === 'ur' ? 'rtl' : 'ltr';
        setIsModalOpen(false);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="lang-select-container">
            <button onClick={toggleModal} className="world-icon-button">
                <FaGlobe className="world-icon" />
            </button>

            {isModalOpen && (
                <div className="language-modal">
                    <div className="modal-header">
                        <h3>{t('choose_language')}</h3>
                        <button onClick={toggleModal} className="close-button">
                            <MdClose />
                        </button>
                    </div>
                    <div className="language-grid">
                        {languages.map((lang) => (
                            <div
                                key={lang.code}
                                className={`language-option ${language === lang.code ? 'selected' : ''}`}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                <div className="language-label">{lang.label}</div>
                                <div className="language-region">{lang.region}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageToggle;