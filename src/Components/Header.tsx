import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  
  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-between; 
  }
`;

const HeaderText = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  margin-top: 35px;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text;
  margin-left:200px;
  text-fill-color: transparent; 
  font-family: "Ribeye Marrow", serif;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    margin-left: 0; 
  }
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 1.2rem;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%); 
  color: white;
  margin-right: 200px;
  border: none;
  padding: 13px 23px;
  cursor: pointer;
  font-weight:bold;
  border-radius: 25px; 

  &:hover {
    opacity: 0.9; 
  }

  @media (max-width: 768px) {
    margin-right: 0; 
    margin-top: 15px; 
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>RIMSHA MALIK</HeaderText>
      <Button>Work with me</Button>
    </HeaderContainer>
  );
};

export default Header;
