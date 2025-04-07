import { useNavigate } from "react-router-dom";
import { RateItem } from "../../../types";

interface RateTileProps {
  tile: RateItem;
}

export const RateTile: React.FC<RateTileProps> = ({ tile }) => {
  const navigate = useNavigate();

  const handleTileClick = () => {
    navigate(`/${tile.name}`, { state: tile });
  };

  return (
    <div
      onClick={handleTileClick}
      className="bg-[linear-gradient(111deg,_rgba(64,196,255,0.08)_25.24%,_rgba(41,121,255,0.14)_76.24%)] text-black rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="font-bold text-lg mb-2">
        <span>{tile.name}</span>
      </div>
      <div className="text-xs font-bold">
        Rate:
        <span className="text-gray-500 font-light">{tile.rate}</span>
      </div>
      <div className="text-xs font-bold">
        Bid: <span className="text-green-500 font-light">{tile.bid}</span>
      </div>
      <div className="text-xs font-bold">
        Ask: <span className="text-red-500 font-light">{tile.ask}</span>
      </div>
      <div className="text-xs font-bold">
        24h Change:{" "}
        <span className="text-gray-500 font-light">{tile.diff24h}</span>
      </div>
    </div>
  );
};
