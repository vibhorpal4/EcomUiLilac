import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";

const HeroComponent = () => {
  return (
    <Container>
      {/* <CustomSwiper>
        <MainCard>
          <Text>
            From students to senior citizens this web portal of "Products and
            Classifieds” provides it all
          </Text>
        </MainCard>
      </CustomSwiper> */}
      <Slider
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={3000}
      >
        <SwiperSlide>
          <MainCard1>
            <Text>
              From students to senior citizens this web portal of "Products and
              Classifieds” provides it all
            </Text>
          </MainCard1>
        </SwiperSlide>
        <SwiperSlide>
          <MainCard2>
            {/* <Text>
              From students to senior citizens this web portal of "Products and
              Classifieds” provides it all
            </Text> */}
          </MainCard2>
        </SwiperSlide>
        <SwiperSlide>
          <MainCard3>
            {/* <Text>
              From students to senior citizens this web portal of "Products and
              Classifieds” provides it all
            </Text> */}
          </MainCard3>
        </SwiperSlide>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 669px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h3`
  font-weight: 300;
  font-size: 48px;
  line-height: 121.8%;
  color: white;
  width: 779px;
  height: 232px;
  text-transform: capitalize;
  margin-right: 138px;
`;

const Slider = styled(Swiper)`
  width: 100%;
  justify-content: center;
  padding: 60px 130px;
`;

const CustomSwiper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomSlide = styled(SwiperSlide)``;

const MainCard1 = styled.div`
  width: 1620px;
  height: 612px;
  border-radius: 40px;
  object-fit: fill;
  background: url("https://s3-alpha-sig.figma.com/img/b48e/ff32/960374a31e3ded2a6a7d00acfac983bf?Expires=1655078400&Signature=GcvQtrKwvHJsEs15iZs3xgBZGhPpY2UiPDa5lJ7YQY5E3AeBt90HaSn8yTt78vyfvSzUmgSqUHzThDRBm3cu3kEW~fChF2DX2hsBxPB7AgtFVkm0qkRvBvmmB9oSm72oopHv9BkTWS4DA~4PlPM4lqbXWm9EOvuzqnSmXf1EHOHpVzuEzF06~iLTHNfdrEpfbptF-GagFnh7mXPF3~osLeQx~oC8eYoUISKu-Rhh0gRLnjK9JxCpMgJbRnRHWvq3RPcm-j3IngEUNXrbWXET1HyTwAGYlTml3FQbr9N03C7jRd8rYfqCg0lo6cXUEnTScMNyTGBtYvIj49QKLAf-Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: contain;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MainCard2 = styled.div`
  width: 1620px;
  height: 612px;
  border-radius: 40px;
  object-fit: fill;
  background-color: #d3d5df;
  background-size: contain;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MainCard3 = styled.div`
  width: 1620px;
  height: 612px;
  border-radius: 40px;
  object-fit: fill;
  background-color: #efc147;
  background-size: contain;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default HeroComponent;
