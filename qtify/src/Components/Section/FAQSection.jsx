import styles from "./Section.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.faq}>
        <h1>FAQs</h1>
      </div>
      <div className={styles.section}>
        <div className={styles.centerAccordionContent}>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              sx={{
                backgroundColor: "black",
                color: "white",
                border: "0.5px solid white",
                borderRadius: "8px",
                width: "100%",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Is Qtify free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              sx={{
                backgroundColor: "black",
                color: "white",
                border: "0.5px solid white",
                borderRadius: "8px",
                width: "100%",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={styles.answerContainer}>
                Can I download and listen to songs offline?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography>
                Sorry, unfortunately we don't provide the service to download
                any songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
