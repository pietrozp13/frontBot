import React, { Component } from 'react';
import './App.css';
import MyForm from './main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WhatsApp Finace</h1>
          <div style={{ width: "100%", display: "flex", "justify-content": "center" }}>
            <MyForm />
          </div>
      </div>
    );
  }
}

export default App;
