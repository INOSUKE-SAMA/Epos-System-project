import { FaSearch, FaSync, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="relative w-1/2 flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Products"
            className="border px-4 py-2 rounded-lg w-full pl-4 pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
        </div>
        <button className="p-2 ml-3 border-2 border-gray-500 rounded-lg">
          <FaSync className="text-blue-500 text-xl" />
        </button>
        <button className="p-2 ml-3 border-2 border-gray-500 rounded-lg"> 
          <FaBell className="text-blue-500 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
