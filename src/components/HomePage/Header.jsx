import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hamClickContext } from "../../App";

function Header() {

  const {hamClick, setHamClick} = useContext(hamClickContext);

  const navigate = useNavigate();

  function handleHamClick() {
    setHamClick(!hamClick);
  }


  return (
    <>
      <header className="flex bg-[#10172a] h-[90px] items-center px-[30px] justify-between  shadow-lg shadow-grey-800 ">
        <h2 className="text-amber-300 flex items-center text-2xl font-bold sm:text-3xl uppercase cursor-pointer" onClick={() => navigate("/")}>
          Recipe Finder
        </h2>
        <nav className="hidden sm:flex items-center">
          <ul className="flex items-center gap-25">
            <li>
              <Link to="/" className="text-amber-300 text-[17px] font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favourites"
                className="text-amber-300 text-[17px] font-bold "
              >
                Favourite
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cursor-pointer sm:hidden" onClick={handleHamClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 23 24"
            strokeWidth={1.5}
            stroke="oklch(87.9% 0.169 91.605)"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </header>
    </>
  );
}

export default Header;
