import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import Solutions from '../components/sections/Solutions';
import Customers from '../components/sections/Customers';
import WhyAuriseg from '../components/sections/WhyAuriseg';
import Certifications from '../components/sections/Certifications';
import Industries from '../components/sections/Industries';
import Testimonials from '../components/sections/Testimonials';
import TalkToExpert from '../components/sections/TalkToExpert';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services/>
      <Solutions/>
      <Customers/>
      <WhyAuriseg/>
      <Certifications />
      <Industries/>
      <Testimonials/>
      <TalkToExpert/>
            
    </>
  );
};

export default Home;