import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hamClickContext } from "../../App";
import { favRecipeContext } from "../../App";

function Header() {
  const { hamClick, setHamClick } = useContext(hamClickContext);
  const { favRecipe, setFavRecipe } = useContext(favRecipeContext);

  const navigate = useNavigate();

  function handleHamClick() {
    setHamClick(!hamClick);
  }

  return (
    <>
      <header className="flex bg-[#10172a] h-[90px] items-center px-[30px] justify-between  shadow-lg shadow-grey-800 sticky top-0 w-full z-10">
        <h2
          className="text-amber-300 flex items-center text-2xl font-bold sm:text-3xl uppercase cursor-pointer"
          onClick={() => navigate("/")}
        >
          Recipe Book
        </h2>
        <nav className="hidden sm:flex items-center">
          <ul className="flex items-center gap-25 relative">
            <li className="hover:scale-120 transition-all">
              <Link to="/" className="text-amber-300 text-[17px] font-bold">
                Home
              </Link>
            </li>
            <li className="hover:scale-120 transition-all">
              <Link
                to="/favourites"
                className="text-amber-300 text-[17px] font-bold "
              >
                Favourite
              </Link>
            </li>
            {/* {favRecipe && favRecipe.length > 0 ? (
              <div className="bg-amber-300 w-4 h-4 rounded-4xl absolute right-[-5px] top-[-8px] animate-bounce flex justify-center items-center text-sm font-bold">
                {favRecipe.length}
              </div>
            ) : (
              ""
            )} */}
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
