import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import storeItems from "../../services/items.json";
import formatCurrency from "../../services/formatCurrency";
import OrangeButton from "./../../common/OrangeButtons";

const Container = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  width: min(1310px, 98%);
  .rec.rec-pagination {
    margin-bottom: 1rem;
    justify-content: center;
  }

  button.rec-dot {
    background-color: var(--clr-accent-400);
    box-shadow: 0 0 1px 3px var(--clr-accent-300);
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    background-color: var(--clr-accent-500);
    box-shadow: 0 0 1px 3px var(--clr-accent-200);
  }
  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: var(--clr-accent-400);
    box-shadow: 0 0 1px 3px var(--clr-accent-400);
  }
  .rec.rec-arrow-left,
  .rec.rec-arrow-right {
    margin: 0 0.5rem;
    background-color: var(--clr-accent-200);
    box-shadow: 0 0 1px 3px var(--clr-accent-200);
  }
`;
const CarouselElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;
const CarouselButton = styled(OrangeButton)`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  font-size: var(--fs-400);
  padding: 0.75em 1.5em;
  letter-spacing: 0;
  word-spacing: 0;
  @media (max-width: 35rem) {
    margin-bottom: 1rem;
  }
  :hover {
    background-color: var(--clr-accent-300);
    color: var(--clr-accent-500);
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ShopCarousel = () => (
  <Container>
    <Carousel breakPoints={breakPoints}>
      {storeItems.map((item) => (
        <CarouselElement key={item.id}>
          <Item>
            <img src={item.imgUrl} alt="wooden stick" />
          </Item>
          <div style={{ fontWeight: "bold" }}>{item.name}</div>
          <div>{formatCurrency(item.price)}</div>
          <Link to="/products">
            <CarouselButton>Buy stick!</CarouselButton>
          </Link>
        </CarouselElement>
      ))}
    </Carousel>
  </Container>
);

export default ShopCarousel;
