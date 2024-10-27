import PropTypes from 'prop-types';
import './index.css'

const Header = ({coins, addCoins}) => (
  <div className="">
    <nav className="mt-6 flex items-center justify-between">
      <div className="">
        <img src="../../src/assets/logo.png" alt="" />
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 text-[#131313B3]">
          <li> Home </li>
          <li> Fixture </li>
          <li> Teams </li>
          <li> Schedules </li>
        </ul>
        <button className="p-4 border border-gray-200 rounded-lg text-xl font-bold flex items-center gap-2"><span> {coins} </span> Coin <img src="../../src/assets/coin.png" alt="" /> </button>
      </div>
    </nav>
    <div className="mt-5 bg-img bg-black flex flex-col gap-5 items-center py-14 px-3 rounded-xl">
      <img src="../../src/assets/banner-main.png" alt="" />
      <h1 className='text-white text-4xl font-bold'> Assemble Your Ultimate Dream 11 Cricket Team </h1>
      <h6 className='text-gray-400 text-xl'> Beyond Boundaries Beyond Limits </h6>
      <div className="border-2 border-[#E7FE29] rounded-3xl p-2">
        <button onClick={addCoins} className="bg-[#E7FE29] text-xl py-3 px-5 rounded-2xl font-bold"> Claim Free Credit </button>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  coins: PropTypes.number,
  addCoins: PropTypes.func
}

export default Header;
