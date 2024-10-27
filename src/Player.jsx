import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";


const Player = ({player, selectPlayer}) => {
  const {id, name, country, role, rating, price, image, actions} = player;
  return (
    <div id={id} className="p-4 rounded-xl border flex flex-col gap-2">
      <img className="w-full h-[250px] rounded-xl" src={image} alt="" />
      <div className="flex gap-2 items-center text-xl font-semibold">
        <CgProfile />
        <h1 className="">{name}</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <FaFlag />
          <p className="">{country}</p>
        </div>
        <button className="py-2 px-4 border rounded-xl bg-gray-100">{role}</button>
      </div>
      <h2 className="font-semibold">Rating</h2>
      <div className="flex justify-between">
        <h3 className="font-semibold">{rating}</h3>
        <h3 className="text-gray-500">{rating}</h3>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Price: ${price}</p>
        <button onClick={() => selectPlayer(player)} className="py-2 px-4 border rounded-xl">{actions.button_text}</button>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.array,
  selectPlayer: PropTypes.func
}

export default Player;
