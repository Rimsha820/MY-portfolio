import styled from 'styled-components';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import site from './assets/site-bg.jpg';

const AppContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  background-image: url(${site});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  min-height: 100vh;
  color: white; 
`;

const Section = styled.section<{ id: string }>`
  padding: 50px 20px;
  min-height: 100vh;
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  return (
    <AppContainer>
      <Nav /> 
      <Header />
      <Banner id="home" onClick={scrollToTop} />

      <Section id="about">
        <About />
      </Section>
      <Section id="work">
        <Work />
      </Section>
      <Section id="service">
        <Service />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
  
    </AppContainer>
  );
}

export default App;
