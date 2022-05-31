import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import WatchImage from "../assets/images/watch.png";

const BestDealComponent = () => {
  return (
    <Conatiner>
      <HeaderContainer>
        <Title>Best Deals</Title>
        <CustomLink to="#">View All</CustomLink>
      </HeaderContainer>
      <CardContainer>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage src={WatchImage} />
          <ProductDetails>
            <ProductName>Fitness and activity Tracker</ProductName>
            <ProuctPrice>$33.3</ProuctPrice>
            <Ratings
              count={5}
              size={20}
              activeColor="#3187ED"
              isHalf={true}
              value={4.5}
            />
            ,
          </ProductDetails>
        </ProductCard>
      </CardContainer>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  height: 679px;
  width: 1920px !important;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  /* justify-content: center; */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
`;

const CustomLink = styled(Link)`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px 150px;
`;

const ProductCard = styled.div`
  width: 275px;
  height: 139px;
  display: flex;
  align-items: center;
  margin-right: 35px;
  margin-top: 70px;
`;

const ProductImage = styled.img`
  width: 117px;
  height: 139px;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  margin-top: 20px;
`;

const ProductName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ProuctPrice = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.primaryColor};
  margin-top: 15px;
`;

const Ratings = styled(ReactStars)`
  margin-top: 5px;
`;

export default BestDealComponent;
