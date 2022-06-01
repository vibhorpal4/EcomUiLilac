import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillApple,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import HeadphoneVectorImage from "../../assets/images/HeadphoneVector.png";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoImage src={Logo} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </Text>
        <SocialLinkContainer>
          <SocialLink>
            <AiFillYoutube size={25} />
          </SocialLink>
          <SocialLink>
            <AiFillLinkedin size={25} />
          </SocialLink>
          <SocialLink>
            <AiOutlineTwitter size={25} />
          </SocialLink>
          <SocialLink>
            <AiFillFacebook size={25} />
          </SocialLink>
          <SocialLink>
            <AiOutlineInstagram size={25} />
          </SocialLink>
        </SocialLinkContainer>
      </LeftContainer>
      <CenterContainer>
        <LinkContainer>
          <LinkHeading>QUICK LINKS</LinkHeading>
          <LinkWrapper>
            <CustomLink to="#">Products</CustomLink>
            <CustomLink to="#">Classifieds</CustomLink>
            <CustomLink to="#">Contact Us</CustomLink>
            <CustomLink to="#">Login</CustomLink>
            <CustomLink to="#">Sign Up</CustomLink>
          </LinkWrapper>
        </LinkContainer>
        <LinkContainer>
          <LinkHeading>CUSTOMER AREA</LinkHeading>
          <LinkWrapper>
            <CustomLink to="#">My Account</CustomLink>
            <CustomLink to="#">Orders</CustomLink>
            <CustomLink to="#">Tracking List</CustomLink>
            <CustomLink to="#">Terms</CustomLink>
            <CustomLink to="#">Privacy Policy</CustomLink>
            <CustomLink to="#">Return Policy</CustomLink>
            <CustomLink to="#">My Cart</CustomLink>
          </LinkWrapper>
        </LinkContainer>
        <LinkContainer>
          <LinkHeading>Vendor AREA</LinkHeading>
          <LinkWrapper>
            <CustomLink to="#">Partner with us</CustomLink>
            <CustomLink to="#">Training</CustomLink>
            <CustomLink to="#">Procedures</CustomLink>
            <CustomLink to="#">Terms</CustomLink>
            <CustomLink to="#">Privacy Policy</CustomLink>
          </LinkWrapper>
        </LinkContainer>
      </CenterContainer>
      <RightContainer>
        <LinkHeading>CONTACT</LinkHeading>
        <ContactText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </ContactText>
        <ContactContainer>
          <ContactImage src={HeadphoneVectorImage} />
          <ContactDetailsWrapper>
            <QuestionText>Have any question?</QuestionText>
            <ContactNumber>+ 123 456 789</ContactNumber>
          </ContactDetailsWrapper>
          <ChatButton>Chat</ChatButton>
        </ContactContainer>
        <ButtonWrapper>
          <AppButton>
            <AiFillApple size={35} />
            <ButtonTextWrapper>
              <ButtonText>Download on the</ButtonText>
              <ButtonAppTitle>App Store</ButtonAppTitle>
            </ButtonTextWrapper>
          </AppButton>
          <AppButton>
            <FaGooglePlay size={35} />
            <ButtonTextWrapper>
              <ButtonText>GET IT ON</ButtonText>
              <ButtonAppTitle>Google Play</ButtonAppTitle>
            </ButtonTextWrapper>
          </AppButton>
        </ButtonWrapper>
      </RightContainer>
    </Container>
  );
};

const Container = styled.footer`
  width: 1920px;
  height: 518px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  margin-top: 100px;

  /* background-color: aliceblue; */
`;

const LogoImage = styled.img`
  width: 258px;
  height: 145px;
  object-fit: contain;
  margin-left: -30px;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.textColorLight};
  width: 390px;
  height: 84px;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
`;

const SocialLink = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 12px;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dadada;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const CenterContainer = styled.div`
  display: flex;
  margin-top: 100px;

  /* justify-content: space-between; */
  /* align-items: center; */
  /* background-color: antiquewhite; */
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 35px;
  /* align-items: center; */
`;

const LinkHeading = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  width: 170px;
  height: 30px;
`;

const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 44px;
  color: ${({ theme }) => theme.textColorLight};
`;

const RightContainer = styled.div`
  margin-right: 150px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 440px;
  height: 48px;
  margin-top: 31px;
  color: ${({ theme }) => theme.textColorLight};
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 34px 50px 0 10px;
`;

const ContactImage = styled.img`
  width: 48px;
  height: 51px;
`;

const ChatButton = styled.button`
  width: 121px;
  height: 54px;
  border-radius: 12px;
  color: ${({ theme }) => theme.primaryColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  cursor: pointer;
`;

const ContactDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 138px;
  height: 24px;
`;

const ContactNumber = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.primaryColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppButton = styled.div`
  width: 231px;
  height: 76px;
  border-radius: 12px;
  cursor: pointer;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  margin: 0 15px;
  margin-top: 71px;
`;

const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  width: 92px;
  height: 24px;
  color: white;
`;

const ButtonAppTitle = styled.span`
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: white;
`;

export default Footer;
