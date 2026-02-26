import { useContext } from "react";
import { Link } from "react-router-dom";
import { hamClickContext } from "../../App";

function Sidebar() {
  const { hamClick, setHamClick } = useContext(hamClickContext);

  return (
    <>
      <div
        className={`absolute  top-0 right-0 h-full  flex flex-col gap-5 p-8 bg-[#10172a] items-end ${hamClick ? "w-80" : "w-0 hidden"}`}
      >
        <Link to="/" className="text-amber-300 font-bold text-lg">
          Home
        </Link>
        <Link to="/" className="text-amber-300 font-bold text-lg">
          Favourite
        </Link>
        <div className="absolute left-3" onClick={() => setHamClick(!hamClick)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="oklch(87.9% 0.169 91.605)"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
