import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.scss";

interface PlayLeftProps {
  // Add any props you might use in the future
}

const PlayLeft: React.FC<PlayLeftProps> = () => {
  // Define dynamic content object
  const content = {
    text: {
      title: "JOIN A ONE-SHOT",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Auctor urna nunc id cursus metus aliquam eleifend mi. Amet aliquam id diam maecenas ultricies. Nisl tincidunt eget nullam non nisi.`,
    },
    borderStyles: {
      width: "100%", // Adjusted width for responsiveness
      height: "100%",
      border: "2px",
      borderColor: "#9a3633",
    },
    image: {
      src: "/Polygon.png",
      alt: "perso",
      imageSize: { width: 486, height: 478 },
    },
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="flex-end"
      sx={{ marginTop: "3rem" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        className={styles.PlayBorder}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          sx={{
            width: "100%",
            height: "100%",
            padding: "2.8rem",
            margin : "0rem",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontFamily: "Tiamat",
              fontWeight: 900,
              fontSize: "2rem",
              color: "#D63E38",
              marginTop: "1rem",
              textDecoration: "none",
              opacity: "100%",
            }}
          >
            {content.text.title}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontFamily: "Tiamat",
              fontWeight: 600,
              color: "white",
              marginTop: "1rem",
              textDecoration: "none",
              wordWrap: "break-word", // Ensure the description wraps within its container
            }}
          >
            {content.text.description}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}
      sx={{ marginLeft: "-0.2rem" }}>
        {/* <Image src={content.image.src} alt={content.image.alt} {...content.image.imageSize} /> */}
        <img src={content.image.src} alt={content.image.alt} />
      </Grid>
    </Grid>
  );
};

export default PlayLeft;
