import React from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Home.page";
import BattleProvider from "./context/battle/battleState";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <BattleProvider>
        <HomePage />
      </BattleProvider>
    </QueryClientProvider>
  );
}

export default App;
