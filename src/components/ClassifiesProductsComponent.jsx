import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineLocationOn,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const ClassifiesProductsComponent = () => {
  const Card = ({ image, title, price, location }) => {
    return (
      <CardContainer>
        <CardImage src={image} />
        <CardDetails>
          <ProductTitle>{title}</ProductTitle>
          <MetaDetails>
            <Price>${price}</Price>
            <LocationContainer>
              <MdOutlineLocationOn size={20} />
              <LocationText>{location}</LocationText>
            </LocationContainer>
          </MetaDetails>
        </CardDetails>
      </CardContainer>
    );
  };

  return (
    <Container>
      <LeftContainer>
        <Title>Classified Products on the week</Title>
        <NavigationContainer>
          <NavigationCard>
            <MdChevronLeft size={25} />
          </NavigationCard>
          <NavigationCard>
            <MdChevronRight size={25} />
          </NavigationCard>
        </NavigationContainer>
        <ExploreButton>
          Explore <MdChevronRight size={25} />
        </ExploreButton>
      </LeftContainer>
      <Slider
        modules={[Autoplay]}
        loop
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={3000}
      >
        <SwiperSlide>
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/1f26/3dde/7b3c79a7ef682b1b875eb1700fa4da21?Expires=1655078400&Signature=NL03V7-kq969qe5x1WuYdE5UFSCj3csQsF1y-mpuxabjRl83SQj-pZ4qgEU10P2ZytJPdff9oHrsial74QBak0KWfieutOlmxFLp0miMPzGqtKAF5ST1si9b1helZfgnoN7oETHp7U7lnVTlTfynLN3UJKuf42PZ4Ik3Mst3nLEWOC1mN9iZu7dHSFsJ93N-CHsvza9sWzNdM1tYI-8vMK~RMphtWWeDgUEg9vxTqyuCVSaLFxUGE~aHM6fIDc6741pIx1GvOtKBRR2RnvvsLCw5-prpkfWQYdW98JNVXa5rwiNPn0exARnNO4DstTTFfbUEYbQAcuhg9KDzmlTHDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            title="Holy Stone HS470
            Foldable GPS RC Drone"
            price="300.98"
            location="Cape Hadstone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/1f26/3dde/7b3c79a7ef682b1b875eb1700fa4da21?Expires=1655078400&Signature=NL03V7-kq969qe5x1WuYdE5UFSCj3csQsF1y-mpuxabjRl83SQj-pZ4qgEU10P2ZytJPdff9oHrsial74QBak0KWfieutOlmxFLp0miMPzGqtKAF5ST1si9b1helZfgnoN7oETHp7U7lnVTlTfynLN3UJKuf42PZ4Ik3Mst3nLEWOC1mN9iZu7dHSFsJ93N-CHsvza9sWzNdM1tYI-8vMK~RMphtWWeDgUEg9vxTqyuCVSaLFxUGE~aHM6fIDc6741pIx1GvOtKBRR2RnvvsLCw5-prpkfWQYdW98JNVXa5rwiNPn0exARnNO4DstTTFfbUEYbQAcuhg9KDzmlTHDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            title="Holy Stone HS470
            Foldable GPS RC Drone"
            price="300.98"
            location="Cape Hadstone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/1f26/3dde/7b3c79a7ef682b1b875eb1700fa4da21?Expires=1655078400&Signature=NL03V7-kq969qe5x1WuYdE5UFSCj3csQsF1y-mpuxabjRl83SQj-pZ4qgEU10P2ZytJPdff9oHrsial74QBak0KWfieutOlmxFLp0miMPzGqtKAF5ST1si9b1helZfgnoN7oETHp7U7lnVTlTfynLN3UJKuf42PZ4Ik3Mst3nLEWOC1mN9iZu7dHSFsJ93N-CHsvza9sWzNdM1tYI-8vMK~RMphtWWeDgUEg9vxTqyuCVSaLFxUGE~aHM6fIDc6741pIx1GvOtKBRR2RnvvsLCw5-prpkfWQYdW98JNVXa5rwiNPn0exARnNO4DstTTFfbUEYbQAcuhg9KDzmlTHDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            title="Holy Stone HS470
            Foldable GPS RC Drone"
            price="300.98"
            location="Cape Hadstone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/1f26/3dde/7b3c79a7ef682b1b875eb1700fa4da21?Expires=1655078400&Signature=NL03V7-kq969qe5x1WuYdE5UFSCj3csQsF1y-mpuxabjRl83SQj-pZ4qgEU10P2ZytJPdff9oHrsial74QBak0KWfieutOlmxFLp0miMPzGqtKAF5ST1si9b1helZfgnoN7oETHp7U7lnVTlTfynLN3UJKuf42PZ4Ik3Mst3nLEWOC1mN9iZu7dHSFsJ93N-CHsvza9sWzNdM1tYI-8vMK~RMphtWWeDgUEg9vxTqyuCVSaLFxUGE~aHM6fIDc6741pIx1GvOtKBRR2RnvvsLCw5-prpkfWQYdW98JNVXa5rwiNPn0exARnNO4DstTTFfbUEYbQAcuhg9KDzmlTHDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            title="Holy Stone HS470
            Foldable GPS RC Drone"
            price="300.98"
            location="Cape Hadstone"
          />
        </SwiperSlide>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  height: 610px;
  width: 1920px;
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  margin-left: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  width: 238px;
  height: 135px;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 151px;
  margin-top: 48px;
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

const ExploreButton = styled.button`
  width: 191px;
  height: 70px;
  background: #00c6d7;
  box-shadow: 0px 11px 27px rgba(0, 198, 215, 0.35);
  border-radius: 12px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  border: none;
  margin-top: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = styled(Swiper)`
  display: flex;
  /* justify-content: center; */
  padding: 0 10px;
`;

const CardContainer = styled.div`
  width: 348px;
  height: 466px;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  /* margin: 0 25px; */
`;

const CardImage = styled.img`
  width: 348px;
  height: 314px;
  border-radius: 30px;
`;

const CardDetails = styled.div`
  height: 152px;
  padding: 24px 28px;
`;

const ProductTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 183px;
  height: 48px;
`;

const MetaDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  width: 98px;
  height: 36px;
  color: ${({ theme }) => theme.secondaryColor};
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColorLight};
`;

const LocationText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 126px;
  height: 24px;
  margin-left: 8px;
`;

export default ClassifiesProductsComponent;
