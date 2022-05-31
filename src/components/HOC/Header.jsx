import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/images/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBasketLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoImage} />
      </LogoContainer>
      <DropdownConatiner>
        <Text>Classifieds</Text>
        <IconConatiner>
          <RiArrowDropDownLine size={25} />
        </IconConatiner>
      </DropdownConatiner>
      <SearchContainer placeholder="Search here..." />
      <IconConatiner style={{ marginLeft: "-45px" }}>
        <MdOutlineSearch size={25} color="#3187ED" />
      </IconConatiner>
      <ActionContainer>
        <IconConatiner>
          <IoMdHeartEmpty size={25} />
        </IconConatiner>
        <IconConatiner>
          <RiShoppingBasketLine size={25} />
        </IconConatiner>
        <IconConatiner>
          <CgProfile size={25} />
        </IconConatiner>
      </ActionContainer>
      <Button>Classifieds</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 145px;
  width: 1920px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`;

const LogoContainer = styled.div`
  padding-left: 130px;
  display: flex;

  align-items: center;
`;

const Logo = styled.img`
  width: 258px;
  height: 145px;
`;

const DropdownConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 15px;
  height: 70px;
  width: 246px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.textColorDark};
  font-size: 20px;
  font-weight: 500px;
`;

const IconConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45px;
  color: ${({ theme }) => theme.textColorDark};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const SearchContainer = styled.input`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 0 18px;
  height: 70px;
  width: 554px;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin-left: 11px;
  font-size: 20px;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 165px;
  height: 70px;
  margin-left: 72px;
`;

const Button = styled.button`
  width: 164px;
  height: 70px;
  color: white;
  font-weight: 700px;
  font-size: 18px;
  line-height: 27px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: none;
  border-radius: 12px;
  box-shadow: 0px 11px 27px rgba(0, 198, 215, 0.35);
  margin-left: 98px;

  &:hover {
    cursor: pointer;
  }
`;

export default Header;
