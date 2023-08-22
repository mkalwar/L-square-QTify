import { CircularProgress } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";

const CardSection = ({ data, type, title }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(item) =>(<Card data={item} type={type} key={item.id}/>)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CardSection;
