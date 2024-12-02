import React from 'react';
import styled from 'styled-components';
import AboutImage from '../assets/about3.png';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row; 
    text-align: left; 
    padding: 40px; 
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0; 
    margin-right: 20px;
  }
`;

const AboutImageStyled = styled.img`
  max-width: 100%;
  height: auto;
  height: 400px;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 600px; 
  }

  @media (max-width: 480px) {
    height: 300px; 
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px;
    margin-left: 50px;
    margin-top: 50px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;

  @media (min-width: 768px) {
    font-size: 2.2rem; 
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; 
  }
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;
  font-family: "Dancing Script", cursive;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 1.8rem; 
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; 
  }
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    font-size: 1.1rem; 
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; 
  }
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

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 12px 25px; 
  }

  @media (max-width: 480px) {
    font-size: 1rem; 
    padding: 8px 15px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <AboutImageStyled src={AboutImage} alt="About Us" />
      </ImageContainer>
      <TextContainer>
        <AboutTitle>ABOUT ME</AboutTitle>
        <SubHeading>I am a freelance web developer with <br />over 1 year of experience.</SubHeading>
        <AboutParagraph>
          With years of experience in the industry, I specialize in creating responsive <br />
          and scalable web applications using modern technologies. My mission <br />is to deliver high-quality solutions that help businesses grow.
        </AboutParagraph>
        <Button href="#work">My Portfolio</Button> 
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
