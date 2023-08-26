import React from "react";
import styles from "./Section.module.css";
import BasicTabs from "../BasicTabs/BasicTabs";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
const SongsSection = ({
  type,
  title,
  filteredDataValues,
  handleChange,
  value,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {filteredDataValues?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          <Carousel
            data={filteredDataValues}
            renderCardComponent={(item) => (
              <Card data={item} type={type} key={item.id} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default SongsSection;
