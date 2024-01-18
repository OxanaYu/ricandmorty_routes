import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";
import PokemonsList from "./components/PokemonsList";
import DetailsPokemon from "./components/DetailsPokemon";
import Layout from "./components/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/pokemons" element={<PokemonsList />} />
      <Route path="/pokemons" element={<DetailsPokemon />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/pokemons/:id" element={<DetailsPokemon />} />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default MainRoutes;
