import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import storeItems from "../../services/items.json";
import formatCurrency from "../../services/formatCurrency";

const Container = styled.div`
  width: min(1310px, 98%);
  margin-bottom: 1rem;
  button.rec-dot {
    background-color: var(--clr-accent-400);
    box-shadow: 0 0 1px 3px var(--clr-accent-300);
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px var(--clr-accent-400);
  }
  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: var(--clr-accent-400);
    box-shadow: 0 0 1px 3px var(--clr-accent-400);
  }
  .rec.rec-arrow-left,
  .rec.rec-arrow-right {
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
const CarouselButton = styled.button`
  border: 0;
  margin: 1rem 0;
  border-radius: 100vmax;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  padding: 0.75em 1.5em;
  font-size: var(--fs-400);
  :hover {
    background-color: var(--clr-accent-300);
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
            <img src={item.imgUrl} alt="stick" />
          </Item>
          <div>{item.name}</div>
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
