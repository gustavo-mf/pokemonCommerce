import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: red;

  @media screen and (max-width: 1200px) {
    
  }
`;

const InnerFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <InnerFooter>aaaaaa</InnerFooter>
    </FooterWrapper>
  );
}

export default Footer;