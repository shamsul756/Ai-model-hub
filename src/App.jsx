import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Navbar/Banner/Banner'
import Footer from './Components/Navbar/Footer/Footer';
import ReadySection from './Components/Navbar/ReadySection/ReadySection';
import Stats from './Components/Navbar/text';
import GetStarted from './Components/GetStarted/GetStarted';
import CardData from './Components/CardData/CardData';
import Premium from './Components/Premium/Premium';
import Pricing from './Components/Pricing/Pricing';

// data fetching
const getDatas = async ()=> {
  const res = await fetch("/data.json")
  return res.json()

}

// data promises code
const dataPromises = getDatas()

// card fetching
const getCards = async ()=>{
  const res = await fetch("/card.json")
  return res.json()
}

// card promises code
const cardPromises = getCards()


const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Stats/>
      <Premium/>
      <CardData dataPromises={dataPromises}/>
      

<GetStarted/>
<Pricing cardPromises={cardPromises}/>
      
      <ReadySection/>
      <Footer/>
    </>
  );
};

export default App;