import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs?.length} Songs`} placement="top" arrow>
            <div className={styles.wrapper}>
               <div className={styles.card}>
                <img src={image} alt='album' height={170} width={160} />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip1}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
             </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };

   return getCard(type);
};
export default Card;
