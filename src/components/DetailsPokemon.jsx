import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../helpers/const";

const DetailsPokemon = () => {
  const { id } = useParams();
  const [onePok, setOnepok] = useState("");
  const getPok = async () => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    setOnepok(data);
  };
  useEffect(() => {
    getPok();
  }, [id]);
  return (
    <div>
      <h1>{onePok.name}</h1>
      <h4>{onePok.gender}</h4>
      <img src={onePok.image} alt="" />
    </div>
  );
};

export default DetailsPokemon;
