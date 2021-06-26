import React from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./context/theme/theme";
import NavBar from "./components/navbar/Navbar";
import Drawer from "./components/drawer/Drawer";
import HomePage from "./pages/Home.page";
import BattleProvider from "./context/battle/battleState";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastContainer />
          <BattleProvider>
            <NavBar />
            <Drawer />
            <HomePage />
          </BattleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
