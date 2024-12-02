import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'; 
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';

const WorkContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 50px; 
  width: 90%;
  max-width: 1100px; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); 
  border: 1px solid rgba(255, 255, 255, 0.3); 
  border-radius: 10px;
  padding: 20px; 
  text-align: left; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  min-height: 150px; 

  &:hover {
    transform: translateY(-5px); 
  }
`;

const CardImage = styled.img`
  width: 95%; 
  height: auto;
  border-radius: 10px; 
`;

const ServiceSection = styled.div`
  text-align: left; 
  margin-bottom: 20px; 
  grid-column: span 1; 
`;

const SubHeading = styled.h4`
  font-size: 2.8rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2.2rem; 
  }
`;

const ServiceParagraph = styled.p`
  margin-bottom: 20px;
`;

const SeeMyWorkButton = styled.button`
  padding: 13px 23px;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: orange;
  text-decoration: none;
  
`;

const Work: React.FC = () => {
  return (
    <WorkContainer>
      <CardContainer>
        <ServiceSection>
          <SubHeading>My Latest Work</SubHeading>
          <ServiceParagraph>
            We offer web designing, Front-end Development and <br /> UX/UI.
            With years of experience in the industry, I specialize <br /> in creating
            web applications using modern technologies.
          </ServiceParagraph>
          <SeeMyWorkButton>View All Projects</SeeMyWorkButton>
        </ServiceSection>
        
        <Card>
          <CardImage src={pro2} alt="Project 2" />
          <h3>Project 1: A Skin Care Product Website</h3>
          <p>I made a daily-use skin care products website that is fully responsive.</p>
          <GitHubLink href="https://github.com/yourusername/project2" target="_blank">
            <FaGithub /> <span style={{ marginLeft: '20px' }}>GitHub</span>
          </GitHubLink>
        </Card>
        
        <Card>
          <CardImage src={pro1} alt="Project 3" />
          <h3>Project 2: Fruit Selling Website</h3>
          <p>Here is my fruit selling website where you can buy all kinds of fruits.</p>
          <GitHubLink href="https://github.com/yourusername/project3" target="_blank">
            <FaGithub /> <span style={{ marginLeft: '20px' }}>GitHub</span>
          </GitHubLink>
        </Card>
        
        <Card>
          <CardImage src={pro3} alt="Project 4" />
          <h3>Project 3: An Online CV Maker Website</h3>
          <p>Here is my online CV maker website where you can create CVs according to your styles.</p>
          <GitHubLink href="https://github.com/yourusername/project4" target="_blank">
            <FaGithub /> <span style={{ marginLeft: '20px' }}>GitHub</span>
          </GitHubLink>
        </Card>
      </CardContainer>
    </WorkContainer>
  );
};

export default Work;
