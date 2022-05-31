import React from "react";
import styled from "styled-components";
import { RiPhoneFill } from "react-icons/ri";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineArrowDropDown,
} from "react-icons/md";

const SubHeader = () => {
  return (
    <Container>
      <LeftContainer>
        <PhoneContainer>
          <IconContainer>
            <RiPhoneFill size={20} color="white" />
          </IconContainer>
          <Text> +221 33 66 22</Text>
        </PhoneContainer>
        <EmailContainer>
          <IconContainer>
            <MdOutlineEmail size={20} color="white" />
          </IconContainer>
          <Text>support@elextra.io</Text>
        </EmailContainer>
      </LeftContainer>
      <RightContainer>
        <LocationContainer>
          <IconContainer>
            <MdOutlineLocationOn size={20} color="white" />
          </IconContainer>
          <Text>Locations</Text>
        </LocationContainer>
        <Text>|</Text>
        <CurrencyConatiner>
          <Text>$ Dollar(us)</Text>
          <IconContainer>
            <MdOutlineArrowDropDown size={20} color="white" />
          </IconContainer>
        </CurrencyConatiner>
        <LanguageContainer>
          <Text>EN</Text>
          <IconContainer>
            <MdOutlineArrowDropDown size={20} color="white" />
          </IconContainer>
        </LanguageContainer>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  /* position: absolute; */
  width: 1920px;
  height: 53px;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600px;
`;

const IconContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-right: 17px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 150px;
  width: 50%;
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 65px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 150px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

const CurrencyConatiner = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

export default SubHeader;
