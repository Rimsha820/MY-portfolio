import React from 'react';
import styled from 'styled-components';
import Servicesimg from '../assets/Services.png';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 90px;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-family: "Dancing Script", cursive;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  background-clip: text;
  color: transparent;
  margin-top: 0;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ServiceParagraph = styled.p`
  font-size: 1.1rem;
  margin-top: 10px;
`;

const SeeMyWorkButton = styled.a` 
   margin-top: 10px;
  font-size: 1.2rem;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  color: white;
  font-weight: bold;
  padding: 13px 23px;
  cursor: pointer;
  border-radius: 25px;
  width:120px;
  text-decoration: none;
  
  @media (max-width: 480px) {
    width: 100%; 
    padding: 10px; 
  }

  &:hover {
    opacity: 0.9;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServicesImage = styled.img`
  max-width: 90%;
  height: auto; 
  border-radius: 10px;
  margin-right: 140px;

  @media (max-width: 768px) {
    margin-right: 0; 
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  margin: 50px 50px 0 0; 
  margin-top: 100px;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    margin: 20px 0 0 0; 
  }
`;

const ServiceItem = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px; 
  }
`;

const ServiceName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

const ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  color: white;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 5px;

  &::after {
    content: "Learn more";
    display: block;
    color: #ff56f6;
    margin-left: 430px; 
    margin-top: 5px;
    cursor: pointer;
    font-weight: bold;
    background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    @media (max-width: 768px) {
      margin-left: 0; 
    }
  }
`;

const Service: React.FC = () => {
  return (
    <ServiceContainer>
      <LeftSection>
        <ServiceTitle>Our Services</ServiceTitle>
        <SubHeading>WHAT I CAN DO.</SubHeading>
        <ServiceParagraph>
          We offer web designing, Front-end Development and <br /> UX/UI.
          With years of experience in the industry, I specialize <br /> in creating
          web applications using modern technologies.
        </ServiceParagraph>
        <SeeMyWorkButton href="#work">See My Work</SeeMyWorkButton> 
      </LeftSection>
      <ImageContainer>
        <ServicesImage src={Servicesimg} alt="Services" />
      </ImageContainer>
      <RightSection>
        <ServiceItem>
          <ServiceName>
            Web Designing
            <ArrowIconWrapper>
              <MdOutlineArrowOutward />
            </ArrowIconWrapper>
          </ServiceName>
          <ServiceDescription>
            Design modern, responsive websites and web apps with the latest technologies.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceName>
            UX/UI
            <ArrowIconWrapper>
              <MdOutlineArrowOutward />
            </ArrowIconWrapper>
          </ServiceName>
          <ServiceDescription>
            Craft visually stunning and user-friendly designs for your business and website.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceName>
            Front-end Development
            <ArrowIconWrapper>
              <MdOutlineArrowOutward />
            </ArrowIconWrapper>
          </ServiceName>
          <ServiceDescription>
            Build modern, fully functional websites and web apps with the latest technologies.
          </ServiceDescription>
        </ServiceItem>
      </RightSection>
    </ServiceContainer>
  );
};

export default Service;
