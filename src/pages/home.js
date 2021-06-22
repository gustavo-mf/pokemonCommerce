import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../configs/api';

import homeConfig from '../configs/home-config.json';

const HomeWrapper = styled.main`
  padding-top: 60px;
  background-color: white;

  @media screen and (max-width: 1200px) {
    
  }

  .container-sellers {
    display: flex; 
    flex-direction: column;
  }
`;

function Home() {
  const [topSellers, setTopSellers] = useState([]);

  useEffect(() => {

    async function loadFirstPokemons() {
      try {
        const { data } = await api.get(homeConfig['top-selers']);
        console.log("data",data)
        setTopSellers(data.results);
      } catch (err) {
        console.error('error on loading pokes');
      }
    }
    loadFirstPokemons();
  }, []);

  return (
    <HomeWrapper className="home">
      <div className="container-sellers">
      { 
        topSellers.map((elem, index) => {
          return (
            <Link key={'link__'+elem.name} to={'product/'+elem.name+'/p'}>{elem.name}</Link>
          );
        })
      }
      </div>
    </HomeWrapper>
  );
}

export default Home;
