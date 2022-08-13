import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import { invoke } from '@tauri-apps/api/tauri'


function App() {
  const [greeting, setGreeting] = useState<string>("");
  useEffect(() => {
    invoke('greet', { name: 'World'}).then((response: any) => setGreeting(response)) 
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload (Yassine Cheffai).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
