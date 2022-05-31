import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const HeroComponent = () => {
  return (
    <Container>
      <CustomSwiper
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        speed={800}
        slidesPerView={1}
        loop={true}
      >
        <CustomSlide>
          <MainCard>
            <Text>
              From students to senior citizens this web portal of "Products and
              Classifieds” provides it all
            </Text>
          </MainCard>
        </CustomSlide>
      </CustomSwiper>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 669px;
  justify-content: center !important;
  display: flex;
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

const CustomSwiper = styled(Swiper)`
  width: 100%;
  display: flex;
  justify-content: center !important;
`;

const CustomSlide = styled(SwiperSlide)``;

const MainCard = styled.div`
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

export default HeroComponent;
