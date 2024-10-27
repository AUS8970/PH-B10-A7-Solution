import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Players from './Players';
import Select from './Select';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import playersData from '../public/players';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);

  const addCoins = () => {
    setCoins(coins + 10000000);
    toast.success("Coins added!");
  };

  const selectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can select a maximum of 6 players.");
      return;
    }
    if (coins < player.price) {
      toast.error("Not enough coins!");
      return;
    }
    if (selectedPlayers.some(p => p.id === player.id)) {
      toast.error("Player already selected!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price);
    toast.success(`${player.name} selected!`);
  };

  const switchBtn = () => {
    setShowAvailable(!showAvailable);
  }

  const removePlayer = (id) => {
    const playerToRemove = selectedPlayers.find(p => p.id === id);
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== id));
    setCoins(coins + playerToRemove.price);
    toast.info(`${playerToRemove.name} removed.`);
  };

  return (
    <>
      <div className="w-11/12 m-auto">
        <Router />
        <ToastContainer />
        <Header coins={coins} addCoins={addCoins} />
        <div className="flex justify-between p-4 gap-2 mt-12">
          <h1 className="font-bold text-2xl">{`${showAvailable === true ? 'Available Players' : `Selected Player (${selectedPlayers.length}/6)`}`}</h1>
          <div className="">
            <button onClick={switchBtn} className={`border py-2 px-4 rounded-l-xl ${showAvailable === true ? 'bg-[#E7FE29] font-semibold' : 'bg-white text-gray-500'}`}> Available </button>
            <button onClick={switchBtn} className={`border py-2 px-4 rounded-r-xl ${showAvailable === false ? 'bg-[#E7FE29] font-semibold' : 'bg-white text-gray-500'}`}> Selected ({selectedPlayers.length}) </button>
          </div>
        </div>
        {showAvailable ? (
          <Players players={playersData} selectPlayer={selectPlayer} />
        ) : (
          <Select players={selectedPlayers} removePlayer={removePlayer} switchBtn={switchBtn}/>
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
