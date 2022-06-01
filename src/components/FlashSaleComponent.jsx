import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";

const FlashSaleComponent = () => {
  const ProductCard = ({ image, title, price, stock, range }) => {
    return (
      <ProductWrapper>
        <ProductCardLeft>
          <ProductImage src={image} />
        </ProductCardLeft>
        <ProductRightContainer>
          <ProductTitle>{title}</ProductTitle>
          <PriceContainer>
            <Price>${price}</Price>
            <StockText>{stock} left</StockText>
          </PriceContainer>
          <ProductRange value={range} max={100} />
        </ProductRightContainer>
      </ProductWrapper>
    );
  };

  return (
    <Container>
      <CardContainer>
        <Card>
          <LeftContainer>
            <Title>Flash Sale</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
            <Time>05 : 42 : 19 : 54</Time>
          </LeftContainer>
          <RightContainer>
            <TopContainer>
              <ProductCard
                range={80}
                stock="24"
                price="33.3"
                title="Casio G-Shock Ana-Digi Quartz World Time 200m Black"
                image="https://s3-alpha-sig.figma.com/img/662f/f621/daffb44603cacfe2c72d0be6cf599566?Expires=1655078400&Signature=A6K2oSJIlsVT9vZI1IgfPbKQ5ukURo~l-LbWo3woXeQLXBvQKmuGhwhk7LskKu3vErumFw-14lzbJ7PJ0XLW-QtSwstPpVInJvfURWwpViKf2sqCQ9kqqnzdANargyLensZrrIBV4TQaiMMHlwzK7C2CnNlQut23Tgg25bzIIhDmyBq6gMBmf1vYHRMLMfXQ4t6Sjs8~79CuNvPvrI9Ye1AkuG9X0~2stCIu~oC8hc~mHsqs5RPQcbTgC~XstJnpazFGsYTeeaJv04iOMjZf5B8-HwkyDqKdiZP6lgR1aVCYKm23l62OCKmK2opcnQEdSnoHmovEAXdU86wvXFBQ7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
              <ProductCard
                range={80}
                stock="24"
                price="33.3"
                title="Canon LBP113w imageCLASS WiFi Laser Printer"
                image="https://s3-alpha-sig.figma.com/img/63c2/d849/20f367e375a2355fc7d0b71d2785c6d5?Expires=1655078400&Signature=UEcL5OH9KOxl~ftOhwQI86r-E08CSffs-TsrUAt~eAJuRZpTAkUQhLoXNRISa-R9xZEPs8eDJyhMk5pwIDTIMN~cMcqYgKwg9~eCg2kUxFsTUCjZIDqJhzkDWTUabuFX6NzpQSukhh-LZgGclZSB~cF0U4UkX-o2F1El17pci5Q-qh0WZ9zYW5NTMp8xr2Z35yPtPC~TQI1YW35~tRs9IPDg5HDuPOKTphhvR5OZsyUgApW0MjJMld5Iu2r43fSQhYF59NJgtENkOKi2qKmXSUqUj-t7YGgSmwyVDMsbvs855zU4oo4crDkHvKSUyws3YPpgGAzjvac3ZfZ8ht9HFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
            </TopContainer>
            <BottomContainer>
              <DotContainer>
                <ActiveDot />
                <Dot />
                <Dot />
                <Dot />
              </DotContainer>
              <CustomLink to="#">View more</CustomLink>
            </BottomContainer>
          </RightContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 371px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 1621px;
  height: 100%;

  border-radius: 40px;
  /* background-image: url("https://s3-alpha-sig.figma.com/img/a1b3/a323/2d3284b267ea7f835aac03aab0197a05?Expires=1655078400&Signature=DJSVpGU-74-NsPYnxDHW2o03TP4-beO816QcR0cvMeUf2cRUT~NKle4PwG14WJXObQrsX-VxTLP6drHRkueOWCijrR1UTJD5lS5NE-i8gaYYGNFKw687v3QY3xGOqucykgAfU1Ou3TY2LegHpybxZh~ptuG4KD-p9bpHdwpLwwdk6Bq0Zzp8Jb6hFvYYhkghHc45wLFd-blJW1M1nJnNZ8cr6wfKBPbBl1UlFAiPlvzOiDPvb9jlG~2JffmWpqtTTiTsw3lGdQMvxbuVDtrwVSYZbH4pMq0DnK4VGLRu6oUZv6Peeqj1fgxlxiW8YC4DBIvRiYeCH9OSuAmWsvEJ3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"); */

  /* mix-blend-mode: overlay; */
  /* opacity: 0.12; */
`;

const Card = styled.div`
  width: 1621px;
  height: 100%;
  /* background-color: ${({ theme }) => theme.primaryColor}; */
  border-radius: 40px;
  background-color: ${({ theme }) => theme.primaryColor};

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LeftContainer = styled.div`
  /* background: transparent; */
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  color: white;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: white;

  width: 369px;
  height: 84px;
  margin-top: 9px;
`;

const Time = styled.h3`
  font-weight: 700;
  font-size: 48px;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: white;

  margin-top: 27px;
`;

const RightContainer = styled.div`
  /* background: transparent; */
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductWrapper = styled.div`
  width: 448px;
  height: 168px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  display: flex;
  border-radius: 15px;
  /* justify-content: center; */
  /* align-items: center; */
`;

const ProductCardLeft = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductImage = styled.img`
  width: 95px;
  height: 114px;
  border-radius: 10px;
  object-fit: contain;
`;

const ProductRightContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin: 19px 0;
  /* align-items: center; */
`;

const ProductTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 267px;
  height: 73px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.primaryColor};
`;

const StockText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColorLight};
`;

const ProductRange = styled.progress`
  width: 257px;
  height: 10px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  margin-top: 10px;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 46px;
`;
const DotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ActiveDot = styled.div`
  width: 21px;
  height: 10px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  margin: 0 4px;
`;

const Dot = styled.div`
  width: 9.71px;
  height: 9.71px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.22);
  margin: 0 2px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

export default FlashSaleComponent;
