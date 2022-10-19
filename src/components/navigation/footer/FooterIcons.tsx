import styled from "styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    color: var(--clr-accent-400);
    :hover {
      color: var(--clr-neutral-100);
      cursor: pointer;
    }
  }
  @media (max-width: 35em) {
    margin: 1rem;
  }
  #contact {
    border-bottom: 1px solid var(--clr-accent-500);
  }
`;
const Icons = styled.ul`
  display: flex;
  font-size: var(--fs-700);
  list-style: none;
  i {
    margin: 0.7rem;
  }
  a {
    margin: 1.4rem 0;
  }
`;
const FooterIcons = () => (
  <Center>
    <Icons>
      <a href="https://www.facebook.com/">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.youtube.com/">
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a href="https://www.twitter.com/">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://pl.pinterest.com/">
        <i className="fa-brands fa-pinterest"></i>
      </a>
      <a href="https://www.instagram.com/">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </Icons>
  </Center>
);
export default FooterIcons;
