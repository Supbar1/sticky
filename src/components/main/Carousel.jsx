import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Profiles() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [sticksURLs, setSticksURLs] = useState([
    "https://dictionary.cambridge.org/pl/images/thumb/stick_noun_002_35886.jpg?version=5.0.247",
    "https://dictionary.cambridge.org/pl/images/thumb/cane_noun_002_05401_2.jpg?version=5.0.247",
    "https://t3.ftcdn.net/jpg/02/73/91/22/360_F_273912213_LBGEypd6swD0kP4F1c05ykgOzJPUtWf4.jpg",
    "https://leerburg.com/Photos/product-pages/BW0003002/main-image.jpg",
    "https://5.imimg.com/data5/TB/BB/MY-30992752/wood-walking-stick-250x250.jpg",
    "https://media.istockphoto.com/photos/wooden-stick-picture-id466085491?k=20&m=466085491&s=170667a&w=0&h=UEFMhO-ne5GA8Qj_aqa48ZEHbPntF0XR0MRWW3_qr28=",
  ]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };

  return (
    <div className="App">
      {/* <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div>
      <hr className="seperator" /> */}
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {sticksURLs.map((item) => (
            <>
              <Item key={item}>
                <img src={item} alt="stick" />
              </Item>
            </>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
