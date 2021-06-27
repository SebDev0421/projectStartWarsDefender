import React from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ThemeProvider from "./context/theme/theme";
import HomePage from "./pages/Home.page";
import BattleProvider from "./context/battle/battleState"; 


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastContainer />
          <BattleProvider>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
              </Switch>
            </Router>
          </BattleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
