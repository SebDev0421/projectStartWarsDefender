import React from "react";
import Drawer from "../components/drawer/Drawer";
export interface HomePageProps {
  
}
 
const HomePage = () => {
  return ( 
    <div className="contaier">
      <Drawer />
      <h1>Esto es la home page</h1>
    </div>
   );
}
 
export default HomePage;