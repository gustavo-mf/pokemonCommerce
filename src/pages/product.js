import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../configs/api';

import ImageGallery from '../components/ImageGallery';

const ProductWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  > div { 
    width: 50%;
    max-width: 600px;
  }

  .productInfo {
    width: 100%;
  }

`;

function Product() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    async function loadPokemon() {
      try {
        const pokemonName = window.location.pathname.replace('/product/','').replace('/p','');
        const { data } = await api.get('pokemon/'+pokemonName);

        console.log("data", data)
        setPokemon(data);

      } catch (err) {
        console.error('error on loading pokes');
      }
    }

    loadPokemon();
  }, []);
  
  return (
    <ProductWrapper className="product">
      <div className="imageGallery">
        <ImageGallery images={pokemon.sprites} />
      </div>

      <div className="productInfo">
        <div className="name">
          <h1>{pokemon.name}</h1>
          <h2>{(pokemon['types'] ? pokemon['types'].map((elem) => elem['type'].name) : '')}</h2>
        </div>
        <div>selector/gender</div>
        <div className="properties">
          <h2>Stats</h2>
          stats
          <div>
            <span></span>
            <span></span>
          </div>

        </div>
        <div>
          <span>weight: </span>
          <span>{pokemon.weight}</span>
        </div>
        <div>price</div>
        <div>buyButton/favorite</div>
      </div>

      <div>
        ProductDetails

        abilities
        game_indices
        moves
      </div>
    </ProductWrapper>
  );
}

export default Product;
