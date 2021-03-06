import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import ProductSection from "../ProductSection";
import { COLORS, WEIGHTS } from "../../constants";

import styled from "styled-components/macro";

function App() {
  const [sortId, setSortId] = React.useState('newest');
  
  return (
    <Wrapper>
      <Header />
      <Main>
        <Nav />
        <ProductSection sortId={sortId} setSortId={setSortId} />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.gray900};
`;

const Main = styled.div`
  display: flex;
`;
export default App;
