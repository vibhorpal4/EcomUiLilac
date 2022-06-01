import React from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import WatchImage from "../assets/images/watch.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

const RecentlyViewedComponent = () => {
  return (
    <Container>
      <Header>
        <Title>Recently Viewed</Title>
        <NavigationContainer>
          <IconButton>
            <MdChevronLeft size={25} />
          </IconButton>
          <IconButton>
            <MdChevronRight size={25} />
          </IconButton>
        </NavigationContainer>
      </Header>
      <Slider
        modules={[Autoplay]}
        slidesPerView={5}
        loop
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 23px;
  width: 1920px;
  height: 440px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`;

const Header = styled.div`
  padding: 0 150px;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 82%;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  /* padding-left: -100px; */
`;

const IconButton = styled.div`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.textColorLight};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
`;

const Slider = styled(Swiper)`
  display: flex;
  margin: 0 150px;
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

export default RecentlyViewedComponent;
