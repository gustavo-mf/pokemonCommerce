import styled from 'styled-components';
import { SiPokemon } from "react-icons/si";

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: red;

  @media screen and (max-width: 1200px) {
    
  }
`;

const InnerHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    
  }
`;

function Header() {
  return (
    <div>
      <title>Pokemon Commerce</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:url" content="" />
      <meta property="og:title" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:type" content="website" />

      <HeaderWrapper>
        <SiPokemon />
      </HeaderWrapper>
    </div>
  );
}

export default Header;