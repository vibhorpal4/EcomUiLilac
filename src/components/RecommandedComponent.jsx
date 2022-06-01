import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdStar } from "react-icons/md";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
      {/* <SliderContainer> */}
      {/* <NavigationCard>
        <MdChevronLeft size={25} />
      </NavigationCard> */}
      <Slider modules={[Navigation]} navigation={true} slidesPerView={5} loop>
        <SwiperSlide>
          <Card
            image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="iPhone 12 With Facetime 128GB Blue 5G Specs"
            price="1,245.33"
            oldPrice="1300"
            rating="4.5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="iPhone 12 With Facetime 128GB Blue 5G Specs"
            price="1,245.33"
            oldPrice="1300"
            rating="4.5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="iPhone 12 With Facetime 128GB Blue 5G Specs"
            price="1,245.33"
            oldPrice="1300"
            rating="4.5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="iPhone 12 With Facetime 128GB Blue 5G Specs"
            price="1,245.33"
            oldPrice="1300"
            rating="4.5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="iPhone 12 With Facetime 128GB Blue 5G Specs"
            price="1,245.33"
            oldPrice="1300"
            rating="4.5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://s3-alpha-sig.figma.com/img/5a06/3dce/ce5d37abd874fecebfe5634e9c707b90?Expires=1655078400&Signature=KXgR9YAt9DWd4EzDNwsA8IUsq-qLGRVQJBG9HmXQkdKGBwY-vigpt2CRRi2fsROmKIAPSbhsBi~tblrZExuK0ixTqPKNGhiSOTl9IWqVa9Etky-7F6pygCV-2qkIzAWGIsValZpTKKAx-9hMzL1Zn~GZYPLKAKjmM7HzB07CmGvwvROtAM8n9ydpmtxDR7TGTg0hQ-rdjXe2sxXQbY2zIQI1679cipu6AcgkkjStblorywGUj~rvr92782Ou3Ylu0qPuqweCYM9smVniXte0AuToN41q1UilaAAprseXXxZz3PZHyDqRUqWP5VgG56HpgXDNk9aga83px8ON-Zghpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="iPhone 12 With Facetime 128GB Blue 5G Specs"
            price="1,245.33"
            oldPrice="1300"
            rating="4.5"
          />
        </SwiperSlide>
      </Slider>
      {/* <NavigationCard>
          <MdChevronRight size={25} />
        </NavigationCard> */}
      {/* </SliderContainer> */}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationCard = styled.div`
  width: 58px;
  height: 58px;
  box-shadow: 0px 6px 14px rgba(100, 106, 131, 0.16);
  border-radius: 100%;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: rotate(180deg); */
`;

const Slider = styled(Swiper)`
  display: flex;
  padding: 0 21px;
  margin: 48px 143px;
`;

const CardContainer = styled.div`
  width: 264px;
  height: 426px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  margin: 0 15px;
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
