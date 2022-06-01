import React from "react";
import styled from "styled-components";
import AdComponent from "../components/AdComponent";
import BackToTopComponent from "../components/BackToTopComponent";
import BestDealComponent from "../components/BestDealComponent";
import ClassifiesProductsComponent from "../components/ClassifiesProductsComponent";
import FlashSaleComponent from "../components/FlashSaleComponent";
import HeroComponent from "../components/HeroComponent";
import HotSaleComponent from "../components/HotSaleComponent";
import NewsLatterComponent from "../components/NewsLatterComponent";
import RecentlyViewedComponent from "../components/RecentlyViewedComponent";
import RecommandedComponent from "../components/RecommandedComponent";

const HomePage = () => {
  return (
    <Container>
      <HeroComponent />
      <BestDealComponent />
      <ClassifiesProductsComponent />
      <RecommandedComponent />
      <FlashSaleComponent />
      <HotSaleComponent />
      <AdComponent />
      <RecentlyViewedComponent />
      <BackToTopComponent />
      <NewsLatterComponent />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.secondaryBackgroundColor}; */
`;

export default HomePage;
