import React, { useState } from "react";
import { useEffect } from "react";
import { API } from "../helpers/const";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    const { data } = await axios(API);
    // console.log(data.results);
    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div>
      <h1>All characters</h1>
      {pokemons.map((elem) => (
        <Link to={`/pokemons/${elem.id}`} key={elem.id}>
          <li>{elem.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default PokemonsList;
