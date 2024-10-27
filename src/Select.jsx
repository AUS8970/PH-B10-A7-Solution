import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const Select = ({players, removePlayer, switchBtn}) => (
  <div className="">
    <div className="flex flex-col gap-6">
      {players.map(player => (
        <div key={player.id} className="flex justify-between items-center border rounded-xl p-4">
          <div className="flex items-center gap-4">
            <img src={player.image} alt={player.name} className="w-[100px] h-[70px] rounded-lg" />
            <div className="">
              <h2 className="text-xl font-semibold">{player.name}</h2>
              <p className=" text-gray-700">{player.rating}</p>
            </div>
          </div>
          <button onClick={() => removePlayer(player.id)} className="text-red-500 text-2xl"><RiDeleteBin6Line /></button>
        </div>
      ))}
    </div>
    <div className="border-2 border-[#E7FE29] rounded-3xl p-2 w-fit my-8">
      <button onClick={switchBtn} className="bg-[#E7FE29] text-xl py-3 px-5 rounded-2xl font-semibold"> Add More Player </button>
    </div>
  </div>
);

Select.propTypes ={
  players: PropTypes.array,
  removePlayer: PropTypes.array,
  switchBtn: PropTypes.func
}

export default Select;