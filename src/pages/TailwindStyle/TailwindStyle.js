 import react from 'react';
 import { useState } from 'react';
const generateTwStyles = () => {
    // Get Tailwind CSS configuration
    const tailwindConfig = require('tailwindcss/defaultConfig');
  
    // Extract class names from the configuration
    const tailwindClassNames = Object.keys(tailwindConfig.theme.extend);
    
    console.log("tailwindclassnames",tailwindConfig)


    // Generate twStyles based on Tailwind CSS class names
    const twStyles = tailwindClassNames.map((cssName) => {
      return {
        label: cssName,
        values: [], // You may update this with actual values if needed
        tag: [], // You may update this with actual tags based on CSS properties
      };
    });
  
    return twStyles;
  };
  
  const StyleSelector = ({ initialSelectedStyles }) => {
    const [selectedStyles, setSelectedStyles] = useState(
      initialSelectedStyles || {}
    );
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleStyleChange = (label, selectedValue) => {
      setSelectedStyles((prev) => ({ ...prev, [label]: selectedValue }));
    };
  
    // Generate twStyles based on Tailwind CSS class names
    const twStyles = generateTwStyles();
  
    const filteredStyles = twStyles.filter(
      ({ label, tag, values }) =>
        label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tag.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        values.some((v) => v.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
    return (
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search styles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStyles.map(({ label, values, tag }, index) => (
            <div key={index} className="p-4 border rounded-md">
              <div className="mb-2">
                <p className="font-bold">{label}</p>
                <p className="text-gray-500 text-sm">{tag.join(", ")}</p>
              </div>
              <Select
                options={values.map((value) => ({ label: value, value }))}
                isSearchable
                placeholder={`Select ${label}`}
                onChange={(selectedOption) =>
                  handleStyleChange(label, selectedOption.value)
                }
                value={
                  selectedStyles[label]
                    ? {
                        label: selectedStyles[label],
                        value: selectedStyles[label],
                      }
                    : null
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StyleSelector;
  