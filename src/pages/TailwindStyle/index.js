import react, { useState } from "react";
import Select from "react-select";

import twStyles from "../../JsonData/JsonData";

const StyleSelector = ({ initialSelectedStyles }) => {
  const [selectedStyles, setSelectedStyles] = useState(
    initialSelectedStyles || {}
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleStyleChange = (label, selectedValue) => {
    setSelectedStyles((prev) => ({ ...prev, [label]: selectedValue }));
    console.log("selectedStyles", selectedStyles);
  };

  const filteredStyles = twStyles.filter(
    ({ label, tag, values }) =>
      label?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tag?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      values?.some((v) => v.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search styles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {filteredStyles.map(({ label, values, tag }, index) => (
          <div key={index} className="flex p-4 border rounded-md gap-x-4">
            <div className="w-1/2 mb-2">
              <p className="font-bold">{label}</p>
              <p className="text-sm text-gray-500">{tag?.join(", ")}</p>
            </div>
            <Select
              className="w-1/2 "
              options={values?.map((value) => ({ label: value, value }))}
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
