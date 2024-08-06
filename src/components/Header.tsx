import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react';

const Header = () => {
  const [click, setClick] = useState(false);

  // Handle nav Click
  const handleNavClick = () => {
    setClick((prevClick) => !prevClick);
  };

  const handleNavClose = () => {
    setClick(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          {/* logo */}
          <Link className="site-header__logo" to="/">
            Logo
          </Link>

          {/* Nav Icon */}
          <div className="nav-icons" onClick={handleNavClick}>
            {click ? (
              <CloseRoundedIcon className="nav-icon" />
            ) : (
              <MenuRoundedIcon className="nav-icon" />
            )}
          </div>

          {/* Nav menu */}
          <Navbar click={click} handleNavClose={handleNavClose} />
        </div>
      </div>
    </header>
  );
};

export default Header;
