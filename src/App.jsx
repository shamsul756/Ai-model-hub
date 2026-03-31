import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Navbar/Banner/Banner'
import Footer from './Components/Navbar/Footer/Footer';
import ReadySection from './Components/Navbar/ReadySection/ReadySection';
import Stats from './Components/Navbar/text';
import GetStarted from './Components/GetStarted/GetStarted';
import CardData from './Components/CardData/CardData';
import Premium from './Components/Premium/Premium';
import Pricing from './Components/Pricing/Pricing';
import EmptyCard from './Components/EmptyCard';

// data fetching
const getDatas = async () => {
  const res = await fetch("/data.json")
  return res.json()

}

// data promises code
const dataPromises = getDatas()

// card fetching
const getCards = async () => {
  const res = await fetch("/card.json")
  return res.json()
}

// card promises code
const cardPromises = getCards()


const App = () => {
  const [activeTab, setActiveTab] = useState("Products")

  const [carts, setCarts] = useState([])
  console.log([carts]);

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Premium />

      {/* daisi tab */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent pb-10">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-35 text-xl font-semibold text-zinc-600" aria-label="Products"
          onClick={() => setActiveTab("Products")}
          defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab  rounded-full w-35 text-xl font-semibold text-zinc-600" aria-label="Cart"
          onClick={() => setActiveTab("Cart")}
          defaultChecked />

      </div>
      {activeTab === "Products" && <CardData dataPromises={dataPromises} carts={carts} setCarts={setCarts} />}
      {activeTab === "Cart" && <EmptyCard carts={carts} />}
      {/* daisi tab end */}

      <CardData dataPromises={dataPromises} />

      <GetStarted />
      <Pricing cardPromises={cardPromises} />

      <ReadySection />
      <Footer />

    </>
  );
};

export default App;