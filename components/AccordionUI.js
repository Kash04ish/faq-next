import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionUI = ({ title, Id, children, Index, setIndex }) => {
  const handleSetIndex = (newIndex) => {
    if (Index === newIndex) {
      // Clicking on the same item again, collapse the accordion
      setIndex(null);
    } else {
      // Clicking on a different item, toggle the accordion
      setIndex(newIndex);
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-2">
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer justify-between items-center p-3 mb-5 rounded-md bg-white border border-gray-300 @screen sm(w-3/4 mx-auto mt-2 pb-0) @screen lg(w-3/4 mx-auto mt-2)" >
        <div className="flex group cursor-pointer">
          <div className="text-black-600 font-semibold pl-1 pr-2">{title}</div>
        </div>
        <div className="flex items-center justify-center pr-1">
          {Index !== Id ? (
            <FaPlus className="w-6 h-6" style={{ color: '#63b3ed' }} />
          ) : (
            <FaMinus className="w-6 h-6" style={{ color: '#63b3ed' }} />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-black-100 pl-10 font-semibold text-black-500 rounded-md p-4 border-l-2 border-blue-300 mb-5">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionUI;
