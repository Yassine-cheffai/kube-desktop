import './App.css';
import SideBar from "./components/SideBar";
import MainArea from "./components/MainArea";
import { useState } from "react";

function App() {
  // Services = RESOURCE_TYPES[0]
  const [selectedResource, setSelectedResource] = useState("Services");
  return (
    <div className="App">
      <SideBar selectedResource={selectedResource} setSelectedResource={setSelectedResource} />
      <MainArea selectedResource={selectedResource} />
    </div>
  );
}

export default App;
