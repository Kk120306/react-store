import { useState } from 'react';
import { COLOROPTIONS, VITAMINSOPTIONS, FAMILYOPTIONS } from '../../Constants';

const Sidebar = ({
    selectedColor,
    setSelectedColor,
    selectedFamily,
    setSelectedFamily,
    selectedVitamins,
    setSelectedVitamins,
}) => {
    const [colorHidden, setColorHidden] = useState(false);
    const [vitamineHidden, setVitamineHidden] = useState(false);
    const [familyHidden, setFamilyHidden] = useState(false);

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
        <div className="hidden md:block bg-white rounded-xl shadow-md p-6 space-y-6 w-full max-w-xs">
            {/* Color Section */}
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setColorHidden(!colorHidden)}
                >
                    <h2 className="text-lg font-semibold text-gray-800">Color</h2>
                    <span className="text-sm text-gray-500">
                        {colorHidden ? '▼' : '▲'}
                    </span>
                </div>
                {!colorHidden && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {COLOROPTIONS.map((color) => (
                            <div
                                key={color}
                                onClick={() => handleColorClick(color)}
                                className={`flex flex-col items-center justify-center cursor-pointer ${
                                    selectedColor === color ? 'ring-2 ring-black' : ''
                                }`}
                            >
                                <div
                                    className="w-7 h-7 rounded-full"
                                    style={{ backgroundColor: color }}
                                ></div>
                                <span className="text-sm mt-2 text-gray-600">{color}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Family Section */}
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setFamilyHidden(!familyHidden)}
                >
                    <h2 className="text-lg font-semibold text-gray-800">Family</h2>
                    <span className="text-sm text-gray-500">
                        {familyHidden ? '▼' : '▲'}
                    </span>
                </div>
                {!familyHidden && (
                    <div className="space-y-2 mt-4">
                        {FAMILYOPTIONS.map((family) => (
                            <label
                                key={family.value}
                                className="flex items-center space-x-2 text-gray-700"
                            >
                                <input
                                    type="checkbox"
                                    className="accent-black"
                                    value={family.value}
                                    checked={selectedFamily.includes(family.value)}
                                    onChange={() => handleFamilyClick(family.value)}
                                />
                                <span>{family.label}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Vitamin Section */}
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setVitamineHidden(!vitamineHidden)}
                >
                    <h2 className="text-lg font-semibold text-gray-800">Vitamin</h2>
                    <span className="text-sm text-gray-500">
                        {vitamineHidden ? '▼' : '▲'}
                    </span>
                </div>
                {!vitamineHidden && (
                    <div className="space-y-2 mt-4">
                        {VITAMINSOPTIONS.map((vitamin) => (
                            <label
                                key={vitamin.value}
                                className="flex items-center space-x-2 text-gray-700"
                            >
                                <input
                                    type="checkbox"
                                    className="accent-black"
                                    value={vitamin.value}
                                    checked={selectedVitamins.includes(vitamin.value)}
                                    onChange={() => handleCheckboxChange(vitamin.value)}
                                />
                                <span>{vitamin.label}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
