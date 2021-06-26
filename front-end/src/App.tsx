import React from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from './logo.svg';
import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
    </QueryClientProvider>
  );
}

export default App;
