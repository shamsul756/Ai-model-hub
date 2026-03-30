import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Navbar/Banner/Banner'
import Footer from './Components/Navbar/Footer/Footer';
import ReadySection from './Components/Navbar/ReadySection/ReadySection';
import Stats from './Components/Navbar/text';
import GetStarted from './Components/GetStarted/GetStarted';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Stats/>

<GetStarted/>

      
      <ReadySection/>
      <Footer/>
    </>
  );
};

export default App;