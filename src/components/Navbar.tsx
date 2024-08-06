import { Link, NavLink } from 'react-router-dom';

interface NavBarProps {
  cick: boolean;
  handleNavClose: () => void;
}

const links = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'services', href: '/services' },
  { name: 'work', href: '/portfolio' },
  { name: 'blog', href: '/blog' },
];

const Navbar = ({ click, handleNavClose }: NavBarProps) => {
  const handleNavLinkClick = () => {
    handleNavClose();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`nav ${click ? 'showMenu' : ''}`}>
        <ul className="menu">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.href} onClick={handleNavLinkClick}>
                {link.name}
              </NavLink>
            </li>
          ))}

          <li className="hide">
            <NavLink to="contact" onClick={handleNavLinkClick}>
              Contact us
            </NavLink>
          </li>
        </ul>

        <li className="cta">
          <Link to="contact" className="button" datatype="primary">
            Contact us
          </Link>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
