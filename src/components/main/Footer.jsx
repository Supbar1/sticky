import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../style.css";

const EvenColumns = styled.div`
  font-size: var(--fs-body);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  @media (max-width: 60em) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  margin: 2rem;
  a {
    text-decoration: none;
    color: var(--clr-accent-400);
  }
  a :hover {
    color: var(--clr-neutral-100);
  }
  @media (max-width: 35em) {
    margin: 1rem;
  }
`;

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
const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  padding: 1.25em 2.5em;
  font-weight: var(--fw-bold);
  font-size: var(--fs-button);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
`;
const Footer = () => (
  <footer>
    <EvenColumns>
      <Center>
        <img
          src="https://thumbs.dreamstime.com/b/cinnamon-sticks-isolated-black-background-food-photo-114308714.jpg"
          alt="sorry for stick"
        />
      </Center>
      <Center>
        <ul role="list">
          <li>
            <Link to="/">
              <span>Main</span>
            </Link>
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
      </Center>
      <Center>
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
      </Center>
      <Center>
        <form action="not-found">
          <FooterInput>
            <input type="email" />
            <Button>Go</Button>
          </FooterInput>
          <p>Copyright 2022. All Rights Reserved</p>
        </form>
      </Center>
    </EvenColumns>
  </footer>
);

export default Footer;