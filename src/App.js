import React from "react";
import PokemonsList from "./components/PokemonsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
