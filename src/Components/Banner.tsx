import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import h2 from '../assets/about2.png';

// Keyframe Animations
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled Components
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 700px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  animation: ${slideInLeft} 1s ease-out;

  @media (min-width: 768px) {
    margin-left: 180px;
    margin-right: 20px;
  }
`;

const SubTitle = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  animation: ${typing} 0.5s steps(30, end), ${blink} 0.25s step-end infinite;
  font-family: 'Ribeye Marrow', serif;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${slideInRight} 1s ease-out;

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-basis: 70%;
  }
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Button = styled.a`
  margin-top: 30px;
  font-size: 1.2rem;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  color: white;
  font-weight: bold;
  padding: 13px 23px;
  cursor: pointer;
  border-radius: 25px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

interface BannerProps {
  onClick: () => void;
  id: string;
}

const roles = ["Web Designer !", "WordPress Developer !", "Front-end Developer !"];

const Banner: React.FC<BannerProps> = ({ onClick, id }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerContainer id={id} onClick={onClick}>
      <TextContainer>
        <SubTitle>Hi, there I am a</SubTitle>
        <Title>{roles[currentRole]}</Title>
        <Description>
          I am a web developer with a passion for creating responsive web applications.
          <br /> My goal is to deliver high-quality solutions that meet the needs.
        </Description>
        <Button href="#contact">Contact me</Button> {/* Anchor link to contact section */}
      </TextContainer>
      <ImageContainer>
        <BannerImage src={h2} alt="Home" />
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
