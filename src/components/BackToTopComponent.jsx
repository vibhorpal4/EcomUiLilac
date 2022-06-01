import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

const BackToTopComponent = () => {
  return (
    <Container>
      <Text>Back To Top</Text>
      <IconButton>
        <MdKeyboardArrowUp size={35} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColorLight};
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.textColorLight};
`;

const IconButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export default BackToTopComponent;
