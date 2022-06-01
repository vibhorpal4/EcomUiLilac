import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HotSaleComponent = () => {
  const ProductCard = ({ image, title, price, rating, oldPrice }) => {
    return (
      <Card>
        <ImageContainer>
          <ProductImage src={image} />
        </ImageContainer>
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          <Price>${price}</Price>
          <OldPriceContainer>
            <OldPrice>${oldPrice}</OldPrice>
            <RatingContainer>
              <Rating>{rating}</Rating>
              <MdStar size={18} />
            </RatingContainer>
          </OldPriceContainer>
          <Button>Add to cart</Button>
        </ProductDetails>
      </Card>
    );
  };

  return (
    <Container>
      <Header>
        <Title>Hot Sale!</Title>
      </Header>
      {/* <MainContainer> */}
      {/* <NavigationCard>
          <MdChevronLeft size={25} />
        </NavigationCard> */}
      <Slider
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        loop
        speed={3000}
      >
        <SwiperSlide>
          <ProductCard
            title="PVC Bean Bag Black 80x80x50centimeter"
            price="876.98"
            oldPrice="890.99"
            rating="4.5"
            image="https://s3-alpha-sig.figma.com/img/a346/2439/c78ae2d51088af7e675ebf226bc24bbb?Expires=1655078400&Signature=H06fNMA0VXVRp9zkyBTdpk2wn8w43ESTTAXrYajXffFdOKnS9M8XN2Tb1G2k~SJMrPXjm9wSsbR9BQoGgtm6uwHSmv8ruYK6YStU~NBvjPjuODSn6ID~yGFtg~dYzW69OQ2c-hf90UR9mZhhMYze522LaSD1Gdfs~A87HXbsLnBv8LTBU~wlhx1S487j~m6vqjqBsA-0KRyiYa9-8sk6wK8B73F57dEeuZtqE~rx9AOEW5WDws2JkiXHcYxzmX4~rimszlwvq8-xYF0YnN5mjs0DhrOR4Z~uGvSVhzO7DCx22IS617784hPOPRTibUNzb~Fis5kgD4WzUv2up9iNqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="U2520D 25-Inch UltraSharp QHD USB-C Monitor Black"
            price="876.98"
            oldPrice="890.99"
            rating="4.5"
            image="https://s3-alpha-sig.figma.com/img/1652/8bb8/38e2b26593ad69082958a89e52e214ee?Expires=1655078400&Signature=hx5Z~v9HGUl5vFQrSU4-ZsM2v7QMV12SDq8s8-7bVwyvJUnJWEOPw7u7ttv~FGYbpQOagXIfdDW4CNjy-UQSrn8tbes46A3RhamhWiZNY7f-Wa9jYhn9zJDB50zt5qwN~lt-Ev8FVAaBWKQcyqoR8ZPRYzT2SX5P~L9wJoDk6s1QF-pezTHPl13uEUtB4CFyErGXQejD2TFCE~gZnsfZVcHXplkiGkANPZQ1otgemnYOUOwzLwKaD8qxx7SSVCRdfM7A6rVPd9p4LsEn6E-z7~KA6nvxMf6VEDu4ib6q8ycGUxqbc9cnG8GMMirDYXLH-0S1Yce~~TDiSqxpjLnmnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Flip 5 Waterproof Portable Bluetooth Speaker Black"
            price="876.98"
            oldPrice="890.99"
            rating="4.5"
            image="https://s3-alpha-sig.figma.com/img/778b/3109/641b5831bee05cc9bf6a811ee7d5fc55?Expires=1655078400&Signature=K3H6dfCS6vSRVCF8CEzfmES-0MUCrdQx8CcJjIiqrSw1cOmas0Zg3Xf1lxhtYirVBcvO9p0ViZqrwLiOzOR7JiYtxfTPm3XuFT7gyrF~ryUAFoZQtwp~ucn73XjVKGrwAQFGQCTe7Q2KUN9cgnCRRnjFzYArkgITiQqzsAaq2G2ukrh7JXE6E3FLEVJbvsGDrPHGAmLjwUcqBzgGtFpYlCtZS8-i41gd~5f-bapOkqdo-ShG6WqlfI6cH-ELzmq1jlH~gLB2hisB3WEMH~EvAWUAzaw4CZRlciGCL1eiCLRkvKVQXcMlf4BEmCQZrGVLGltmvaRQoQW0mFJI0sfAZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="MacBook Pro With Touch Bar And Touch ID, 13.3-Inch"
            price="876.98"
            oldPrice="890.99"
            rating="4.5"
            image="https://s3-alpha-sig.figma.com/img/5bc8/89a6/9f7768378d773c3501469ba2b6ea2d55?Expires=1655078400&Signature=brmVZYTkGaVVskMuToZMXJkaTQVEx5Y8YofhrafT1pClC1UcoVlqUeLke8GpfJWaDkP0nh8GuWZHLHA1yplflMzWb8npHLIH00Rc1bz8RGWojugaJO-TLOa06iH9XLhfpEI9QXBcHHe3dGdTEuTPJ8H6tCvrGcg8gLtP-vK1yrvr2mBjxnfIX~WWpwcPsyUelrWhxWmmU9qMHxCLsT-Vmy6I-9I74~MiNXSyIrN2OXOcwBf7IoUdnDixZoFned3fdIlifujuSVcBwBs0kPzzCIUfiNxIMasPM0B4MXwIfBAECxBNDlj2iHOeBaF~cxYrXavAsh54b7KZeQg-IPlAZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="PlayStation 5 Console (Disc Version) With Extra Contro..."
            price="876.98"
            oldPrice="890.99"
            rating="4.5"
            image="https://s3-alpha-sig.figma.com/img/5366/7b25/c45494084d3b2837640e32d46935b32e?Expires=1655078400&Signature=DzIdEq8SmaqLVlrpysau6tPIDEYxZtFb-lms0X8VN7Usb~MBCCMf9GMhPSb2SJbo4nJ640-je2Ic3SNTCxd5DUKqY8Y6kKrkkPLbRzwdTSTGxB6Aiv7d49HV3j2glff~cec3ZWwG3J1p7NDSXitJK4CB3uXrtf6VT~56ltAD7Xcb9O63xyIIG5zWD5xmp-NoUQmXGF2b45heB8Yjp30D-AHY6V0A6NIOSisMAqgiIsL6W3dN-RuXhnBSuNpTVsWy6UI51RM9~PmC8s5YVSxceS8kg9NxiqL36fNQImWllnWFbJzHhg3Z64JRuWJDVCU4UOUDSqgNR695NMwKo7QNOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </SwiperSlide>
      </Slider>
      {/* <NavigationCard>
          <MdChevronRight size={25} />
        </NavigationCard> */}
      {/* </MainContainer> */}
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 757px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  /* display: flex;
  flex-direction: column; */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;
  margin: 0 150px;
`;

const MainContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* width: 100%; */
  /* justify-content: center; */
  align-items: center;
  /* background-color: aliceblue; */
  margin-top: 48px;
  padding: 0 90px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  width: 240px;
  height: 42px;
`;

const NavigationCard = styled.div`
  width: 58px !important;
  height: 58px !important;
  box-shadow: 0px 6px 14px rgba(100, 106, 131, 0.16);
  border-radius: 100%;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: rotate(180deg); */
  margin: 0 22px;
`;

const Slider = styled(Swiper)`
  display: flex;
  margin: 0 150px;
  padding: 0 50px;
`;

const CustomSlide = styled.div`
  padding: 0 22px;
`;

const Card = styled.div`
  width: 273px;
  height: 504px;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  /* margin: 0 16px; */
`;

const ImageContainer = styled.div`
  height: 266px;
  width: 273px;
  padding: 0 29px;
`;

const ProductImage = styled.img`
  width: 215px;
  height: 208px;
  border-radius: 30px;
`;

const ProductDetails = styled.div`
  /* margin-top: 6px; */
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
  flex-direction: column;
  display: flex;
`;

const ProductTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryColor};
  margin-top: 20px;
`;

const OldPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OldPrice = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColorLight};
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
`;

const Button = styled.button`
  width: 225px;
  height: 57px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background-color: transparent;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-top: 30px;
`;

export default HotSaleComponent;
