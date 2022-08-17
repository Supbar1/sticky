import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Item from "./Item";

const CustomisedCarousel = styled.div`
  margin: 2rem;
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
  div {
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Profiles() {
  const sticksUrlss = [
    "https://dictionary.cambridge.org/pl/images/thumb/stick_noun_002_35886.jpg?version=5.0.247",
    "https://dictionary.cambridge.org/pl/images/thumb/cane_noun_002_05401_2.jpg?version=5.0.247",
    "https://t3.ftcdn.net/jpg/02/73/91/22/360_F_273912213_LBGEypd6swD0kP4F1c05ykgOzJPUtWf4.jpg",
    "https://leerburg.com/Photos/product-pages/BW0003002/main-image.jpg",
    "https://5.imimg.com/data5/TB/BB/MY-30992752/wood-walking-stick-250x250.jpg",
    "https://media.istockphoto.com/photos/wooden-stick-picture-id466085491?k=20&m=466085491&s=170667a&w=0&h=UEFMhO-ne5GA8Qj_aqa48ZEHbPntF0XR0MRWW3_qr28=",
  ];

  return (
    <CustomisedCarousel>
      <Carousel breakPoints={breakPoints}>
        {sticksUrlss.map((item, index) => (
          <CarouselElement key={index}>
            <Item>
              <img src={item} alt="stick" />
            </Item>
            <div className="small-margin">xxx $</div>
            <Link to="/products">
              <button className="buy button">Buy stick!</button>
            </Link>
          </CarouselElement>
        ))}
      </Carousel>
    </CustomisedCarousel>
  );
}
