import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const [showFood, setShowFood] = useState(false);

  const toggleFood = () => {
    setShowFood(!showFood);
  };

  return (
    <div className="bg-blue-500 text-white w-64 min-h-screen p-4 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        <span className="block">EPOS</span>
        <span className="block">SYSTEM</span>
      </h1>

      {/* All Categories Section */}
      <div className="w-full mb-4">
        <ul className="space-y-6 text-lg">
          <li
            className={`cursor-pointer flex items-center justify-between p-3 w-full ${
              showFood ? "bg-white text-blue-700" : ""
            }`}
            onClick={toggleFood}
          >
            <span className="transform transition-transform ml-2">
              {showFood ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </span>
            <span className="flex-1 text-center">All Categories</span>
          </li>
        </ul>
      </div>

      {/* Food Menu Items */}
      {showFood && (
        <div className="space-y-3 w-full">
          <ul className="text-lg">
            <li className="text-center p-3">Burger</li>
            <li className="text-center p-3">Sandwiches</li>
            <li className="text-center p-3">Pizza</li>
            <li className="text-center p-3">Momo</li>
            <li className="text-center p-3">Snacks</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
