import { useState } from 'react';
import { COLOROPTIONS, VITAMINSOPTIONS, FAMILYOPTIONS } from '../../Constants'; 

const Sidebar = () => {
    const [colorHidden, setColorHidden] = useState(false);
    const [vitamineHidden, setVitamineHidden] = useState(false);
    const [familyHidden, setFamilyHidden] = useState(false);

    const [selectedVitamins, setSelectedVitamins] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedFamily, setSelectedFamily] = useState([]);

    const handleCheckboxChange = (value) => {
        setSelectedVitamins((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const handleColorClick = (color) => {
        setSelectedColor(color === selectedColor ? null : color);
    };

    const handleFamilyClick = (family) => {
        setSelectedFamily((prev) =>
            prev.includes(family)
                ? prev.filter((v) => v !== family)
                : [...prev, family]
        );
    };

    return (
        <div className="sidebar">

            {/* Color Section */}
            <div className="Color-category">
                <div className="header" onClick={() => setColorHidden(!colorHidden)}>
                    <h2>Color</h2>
                    <span style={{ marginLeft: '8px' }}>{colorHidden ? '▼' : '▲'}</span>
                </div>
                <div className={`color-grid ${colorHidden ? 'hidden' : 'expand'}`}>
                    {COLOROPTIONS.map((color) => (
                        <div
                            key={color}
                            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                            onClick={() => handleColorClick(color)}
                            style={{ cursor: 'pointer' }}
                        >
                            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                                <circle r="45" cx="50" cy="50" fill={color} stroke={selectedColor === color ? 'black' : 'none'} strokeWidth="5" />
                            </svg>
                            <span>{color}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Family Section */}
            <div className="Family-category">
                <div className="header" onClick={() => setFamilyHidden(!familyHidden)}>
                    <h2>Family</h2>
                    <span style={{ marginLeft: '8px' }}>{familyHidden ? '▼' : '▲'}</span>
                </div>
                <div className={`family-grid ${familyHidden ? 'hidden' : 'expand'}`}>
                    {FAMILYOPTIONS.map((family) => (
                        <div key={family.value} className="family-option">
                            <label>
                                <input
                                    type="checkbox"
                                    value={family.value}
                                    checked={selectedFamily.includes(family.value)}
                                    onChange={() => handleFamilyClick(family.value)}
                                />
                                <span style={{ marginLeft: '6px' }}>{family.label}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>


            <div className="Vitamine-category">
                <div className="header" onClick={() => setVitamineHidden(!vitamineHidden)}>
                    <h2>Vitamine</h2>
                    <span style={{ marginLeft: '8px' }}>{vitamineHidden ? '▼' : '▲'}</span>
                </div>
                <div className={`vitamine-grid ${vitamineHidden ? 'hidden' : 'expand'}`}>
                    {VITAMINSOPTIONS.map((vitamine) => (
                        <div key={vitamine.value} className="vitamine-option">
                            <label>
                                <input
                                    type="checkbox"
                                    value={vitamine.value}
                                    checked={selectedVitamins.includes(vitamine.value)}
                                    onChange={() => handleCheckboxChange(vitamine.value)}
                                />
                                <span style={{ marginLeft: '6px' }}>{vitamine.label}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
