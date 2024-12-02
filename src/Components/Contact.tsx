import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; 
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 0 20px; 
  margin-top: 20px; 

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 230px;
    margin-top: 250px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 1.4rem;
  font-family: "Dancing Script", cursive;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: "Roboto Mono", monospace;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 20px;
`;

const ContactForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #c4c2c5;
  border-radius: 10px;
  backdrop-filter: blur(10px); 
  max-width: 100%; 
  margin: 20px; 
  width: 100%;

  @media (min-width: 768px) {
    max-width: 470px;
    margin-right: 200px;
    margin-top: 180px;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  display: block;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: #333;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #406aff;
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  font-size: 1rem;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  max-width: 150px; 
  font-weight: bold;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    opacity: 0.9;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <TextContainer>
        <ContactTitle>Get in Touch</ContactTitle>
        <SubHeading>Let's Work <br /> Together!</SubHeading>
        <Description>
          We're here to help you. Please fill out the form below and <br /> we will get back to you as soon as possible.
        </Description>
      </TextContainer>
      <ContactForm>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Your Name" />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Your Email" />

        <Label htmlFor="phone">Phone Number</Label>
        <Input type="tel" id="phone" placeholder="Your Phone Number" />

        <Label htmlFor="message">Message</Label>
        <Input type="text" id="message" placeholder="Your Message" />

        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
