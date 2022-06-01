import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <DropdownConatiner>
        <Text>All Categories</Text>
        <IconConatiner>
          <RiArrowDropDownLine size={25} />
        </IconConatiner>
      </DropdownConatiner>
      <MenuContainer>
        <CustomLink to="#">Books</CustomLink>
        <CustomLink to="#">Electronics</CustomLink>
        <CustomLink to="#">Real State</CustomLink>
        <CustomLink to="#">Cars-Bikes</CustomLink>
        <CustomLink to="#">Dorm-Furniture</CustomLink>
        <CustomLink to="#">Men</CustomLink>
        <CustomLink to="#">Women</CustomLink>
        <CustomLink to="#">Music</CustomLink>
        <CustomLink to="#">Hobbies-Games</CustomLink>
        <CustomLink to="#">Toys</CustomLink>
        <CustomLink to="#">Books</CustomLink>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.nav`
  width: 1920px;
  height: 61px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  display: flex;
`;

const Text = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.textColorDark};
`;

const DropdownConatiner = styled.div`
  display: flex;
  padding-left: 150px;
`;

const IconConatiner = styled.div`
  color: ${({ theme }) => theme.textColorDark};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  margin-left: 50px;
`;

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.textColorDark};
  text-decoration: none;
  margin: 0 22px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export default NavBar;
