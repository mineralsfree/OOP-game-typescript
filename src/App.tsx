import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Field} from "./model/Field/Field";
import {Game} from "./model/Game/Game";

const App: React.FC = () => {
  const game = new Game();

        return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(game.order)}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
