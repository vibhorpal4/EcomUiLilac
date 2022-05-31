import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdStar } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

const RecommandedComponent = () => {
  const Card = ({ image, title, price, oldPrice, rating }) => {
    return (
      <CardContainer>
        <CardImage src={image} />
        <CardDetails>
          <ProductTitle>{title}</ProductTitle>
          <MetaDetails>
            <Price>${price}</Price>
            <BottomContainer>
              <OldPrice>${oldPrice}</OldPrice>
              <RatingContainer>
                <Rating>{rating}</Rating>
                <MdStar size={20} />
              </RatingContainer>
            </BottomContainer>
          </MetaDetails>
        </CardDetails>
      </CardContainer>
    );
  };

  return (
    <Container>
      <Header>
        <Title>Recommended</Title>
        <CustomLink to="#">View All</CustomLink>
      </Header>
      <SliderContainer>
        <Slider
          modules={[Navigation]}
          loop={true}
          slidesPerView={5}
          navigation={true}
          direction={"horizontal"}
        >
          <CustomSlide>
            <Card
              image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              title="iPhone 12 With Facetime 128GB Blue 5G Specs"
              price="1,245.33"
              oldPrice="1300"
              rating="4.5"
            />
          </CustomSlide>
          <CustomSlide>
            <Card
              image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              title="iPhone 12 With Facetime 128GB Blue 5G Specs"
              price="1,245.33"
              oldPrice="1300"
              rating="4.5"
            />
          </CustomSlide>
          <CustomSlide>
            <Card
              image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              title="iPhone 12 With Facetime 128GB Blue 5G Specs"
              price="1,245.33"
              oldPrice="1300"
              rating="4.5"
            />
          </CustomSlide>
          <CustomSlide>
            <Card
              image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              title="iPhone 12 With Facetime 128GB Blue 5G Specs"
              price="1,245.33"
              oldPrice="1300"
              rating="4.5"
            />
          </CustomSlide>
        </Slider>
      </SliderContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 713px;
  width: 1920px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding-top: 102px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 150px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.primaryColor};
`;

const SliderContainer = styled.div`
  margin: 48px 143px;
`;

const Slider = styled(Swiper)`
  width: 100%;
  display: flex;
`;

const CustomSlide = styled(SwiperSlide)`
  margin: 0 55px;
`;

const CardContainer = styled.div`
  width: 264px;
  height: 426px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
`;

const CardImage = styled.img`
  width: 264.36px;
  height: 257.58px;
  border-radius: 30px;
`;

const CardDetails = styled.div`
  height: 152px;
  padding: 24px 28px;
  width: 100%;
`;

const ProductTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 230px;
  height: 42px;
`;

const MetaDetails = styled.div`
  margin-top: 18px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  width: 115.64px;
  height: 34.86px;
  color: ${({ theme }) => theme.primaryColor};
`;

const OldPrice = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: 50.01px;
  height: 23.24px;
  color: ${({ theme }) => theme.textColorLight};
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
  margin-right: 50px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryColor};
`;

const Rating = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColorLight};
  margin-right: 8px;
`;

export default RecommandedComponent;
