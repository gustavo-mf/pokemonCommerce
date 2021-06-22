import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../configs/api';

function Product() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    async function loadPokemon() {
      try {
        const pokemonName = window.location.pathname.replace('/product/','').replace('/p','');
        const { data } = await api.get('pokemon/'+pokemonName);
        console.log("data",data)
        //setTopSellers(data.results);
      } catch (err) {
        console.error('error on loading pokes');
      }
    }
    loadPokemon();
  }, []);
  
  return (
    <div className="product">
      <div>Product</div>
    </div>
  );
}

export default Product;
