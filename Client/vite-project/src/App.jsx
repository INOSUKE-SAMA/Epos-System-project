import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


const App = () => {
;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
      </div>
    </div>
  );
};

export default App;
