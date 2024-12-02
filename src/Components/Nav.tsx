import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { MdOutlineStickyNote2 } from 'react-icons/md';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.2); 
  padding: 10px;
  height: 55px;
  color: white;
  position: fixed; 
  top: 830px;  
  width: 400px;
  z-index: 1000; 
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border-radius: 60px;

  @media (max-width: 768px) {
    width: 90%; 
  }

  @media (max-width: 480px) {
    top: auto; 
    bottom: 20px; 
    width: 85%;
  }
`;

const NavItem = styled.a<{ isActive: boolean }>`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  cursor: pointer; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  height: 50px; 
  width: 50px; 
  background: ${({ isActive }) => 
    isActive 
      ? 'linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%)'
      : 'transparent'};
  border-radius: 50%; 
  transition: all 0.3s ease; 

  font-size: 2rem; 

  @media (max-width: 480px) {
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Nav: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <NavContainer>
      <NavItem 
        isActive={activeId === 'home'} 
        onClick={() => handleClick('home')}
      >
        <GoHome />
      </NavItem>
      <NavItem 
        isActive={activeId === 'about'} 
        onClick={() => handleClick('about')}
      >
        <BsPerson />
      </NavItem>
      <NavItem 
        isActive={activeId === 'work'} 
        onClick={() => handleClick('work')}
      >
        <MdOutlineStickyNote2 />
      </NavItem>
      <NavItem 
        isActive={activeId === 'service'} 
        onClick={() => handleClick('service')}
      >
        <RiShoppingBag4Line />
      </NavItem>
      <NavItem 
        isActive={activeId === 'contact'} 
        onClick={() => handleClick('contact')}
      >
        <BiMessageDetail />
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
