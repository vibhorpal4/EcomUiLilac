import React from "react";
import styled from "styled-components";
import BestDealComponent from "../components/BestDealComponent";
import ClassifiesProductsComponent from "../components/ClassifiesProductsComponent";
import HeroComponent from "../components/HeroComponent";
import RecommandedComponent from "../components/RecommandedComponent";

const HomePage = () => {
  return (
    <Container>
      <HeroComponent />
      <BestDealComponent />
      <ClassifiesProductsComponent />
      <RecommandedComponent />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.secondaryBackgroundColor}; */
`;

export default HomePage;
