import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../style.css";

const Icons = styled.ul`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  font-size: var(--fs-700);
  i {
    margin: 0.7rem;
  }
  a:hover {
    color: inherit;
  }
`;
const FooterInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    height: 2em;
  }
`;
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="even-columns">
          <div className="center">
            <img
              src="https://thumbs.dreamstime.com/b/cinnamon-sticks-isolated-black-background-food-photo-114308714.jpg"
              alt="sorry for stick"
              className=""
            />
          </div>
          <div className="center">
            <ul role="list" className="">
              <li>
                <a href="#">
                  <span>Main</span>
                </a>
              </li>

              <li>
                <Link to="/community">
                  <span>Community</span>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span>Start Now</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="center padding-block-400 ">
            <Icons role="list">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a aria-label="youtube" href="https://www.youtube.com/">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a aria-label="twitter" href="https://www.twitter.com/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a aria-label="pinterest" href="https://pl.pinterest.com/">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a aria-label="instagram" href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </Icons>
          </div>
          <div className="center">
            <form action="not-found">
              <FooterInput>
                <input type="email" className="input" />
                <button className="button go">Go</button>
              </FooterInput>
              <p>Copyright 2022. All Rights Reserved</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
