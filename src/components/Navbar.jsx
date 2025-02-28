import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import "./styles.css";
const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="navbar-list">
          {navLists.map((item, index) => (
            <div className="navbar-list-item" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="navbar-list-icon">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
