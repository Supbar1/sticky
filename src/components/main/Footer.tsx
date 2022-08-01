import "../../style.css";
export default function Section1() {
  return (
    <>
      <footer className="bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="even-columns">
            <div className="center">
              <img
                src="https://thumbs.dreamstime.com/b/cinnamon-sticks-isolated-black-background-food-photo-114308714.jpg"
                alt="sorry for stick"
              />
              <ul className="aaa" role="list">
                <li>
                  <a aria-label="facebook" href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="youtube" href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="twitter" href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="pinterest" href="#">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="instagram" href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="center">
              <nav className="footer-nav"></nav>
              <ul role="list" aria-label="Footer">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Piercing</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
                <li>
                  <a href="">Private Policy</a>
                </li>
              </ul>
            </div>
            <div className="center">
              <form action="">
                <input type="email" />
                <button className="button">Go</button>
                <p>Copyright 2022. All Rights Reserved</p>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
