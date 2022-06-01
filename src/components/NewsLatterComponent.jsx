import React from "react";
import styled from "styled-components";
import VectorImage from "../assets/images/Vector.png";

const NewsLatterComponent = () => {
  return (
    <Container>
      <LeftContainer>
        <Image src={VectorImage} />
      </LeftContainer>
      <CenterContainer>
        <Title>Sign up for our newsletter</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </CenterContainer>
      <RightContainer>
        <Input placeholder="Enter your email here" />
        <Button>SUBSCRIBE</Button>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 285px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  background-color: ${({ theme }) => theme.primaryColor};
`;

const LeftContainer = styled.div`
  width: 253px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 116px;
  height: 102px;
`;

const CenterContainer = styled.div`
  width: 768px;
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-end; */
  flex-direction: column;
  margin-left: 72px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: white;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  width: 663px;
  height: 64px;
  color: white;
`;

const RightContainer = styled.div`
  width: 899px;
  margin-left: 147px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 633px;
  height: 80px;
  border-radius: 12px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: none;
`;

const Button = styled.button`
  width: 187px;
  height: 60px;
  border-radius: 12px;
  background-color: #4d4d4d;
  margin-left: -200px;
  border: none;
  color: white;
  cursor: pointer;
`;

export default NewsLatterComponent;
