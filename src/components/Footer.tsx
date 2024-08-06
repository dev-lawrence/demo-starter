import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const Footer = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 1300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="grid">
            <div className="about mb-8">
              <h3 className="fs-400">Logo</h3>
              <p className="mb-4">
                Logo goes beyond the ordinary, delivering a personalized and
                tranquil experience for every guest.
              </p>
              <Link to={'/'} className="button" datatype="primary">
                read more
              </Link>
            </div>
            <div className="quick-menu menu--links mb-8">
              <h3>quick menu</h3>
              <li>
                <Link to={'/'}>Dining Experience</Link>
              </li>
              <li>
                <Link to={'/'}>Wellness</Link>
              </li>
              <li>
                <Link to={'/'}>Fitness</Link>
              </li>
              <li>
                <Link to={'/'}>Sports</Link>
              </li>
            </div>
            <div className="other-links menu--links mb-8">
              <h3>other links</h3>
              <li>
                <Link to={'/'}>Customer Assistance</Link>
              </li>
              <li>
                <Link to={'/'}>Our Story</Link>
              </li>
              <li>
                <Link to={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/'}>Terms of Service</Link>
              </li>
            </div>
            <div className="social-links">
              <h3>social icons</h3>
              <Link
                target="_blank"
                to="https://web.facebook.com/profile.php?id=61550239011784"
              >
                <FacebookIcon />
              </Link>
              <Link target="_blank" to="https://twitter.com/Lawrence_sticks">
                <TwitterIcon />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/dev_lawrence1/"
              >
                <InstagramIcon />
              </Link>
              <Link target="_blank" to="https://www.youtube.com/@DevLawrence1">
                <YouTubeIcon />
              </Link>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright © {new Date().getFullYear()} All Rights Reserved | This
              template is made by
              <Link
                target="_blank"
                to="http://devlawrence.netlify.app/"
                className="author"
              >
                Dev lawrence
              </Link>
            </p>
          </div>
        </div>

        <div onClick={handleScrollToTop} className="page-up">
          <span className={showScrollArrow ? 'showArrow' : ''}>
            <KeyboardDoubleArrowUpIcon className="up-icon" />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
