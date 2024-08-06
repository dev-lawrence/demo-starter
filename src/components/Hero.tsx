import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="content">
            <h1>Discover the Perfect Furniture Pieces for Your Home</h1>
            <p>
              Experience Quality Craftsmanship and Timeless Designs for Every
              Room in Your Home.
            </p>

            <Link
              className="btn cta"
              onClick={() => window.scrollTo(0, 0)}
              to="/shop"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
