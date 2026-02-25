import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex bg-[#10172a] h-[90px] align-center px-[30px] justify-center sm:justify-between shadow-lg shadow-grey-800">
        <h2 className="text-amber-300 flex items-center text-2xl font-bold sm:text-3xl uppercase">
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
              <Link to="productdetails" className="text-amber-300 text-[17px] font-bold">
                Favourite
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
