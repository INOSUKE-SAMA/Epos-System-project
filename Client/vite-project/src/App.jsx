import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import CurrentOrder from './components/CurrentOrder';

const App = () => {


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex p-4">
          <div className="flex-1 max-h-screen overflow-y-auto">
           
          </div>
          <div className="ml-6">
            <CurrentOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
