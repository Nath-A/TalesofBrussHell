import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.scss";

interface PlayRightProps {
  // Add any props you might use in the future
}

const PlayRight: React.FC<PlayRightProps> = () => {
  // Define dynamic content object
  const content = {
    imageSrc: "/Polygon.png",
    imageAlt: "perso",
    imageSize: { width: 486, height: 478 },
    text: {
      title: "CREATE YOUR CHARACTER",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Auctor urna nunc id cursus metus aliquam eleifend mi. Amet aliquam id diam maecenas ultricies. Nisl tincidunt eget nullam non nisi.`,
    },
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="right"
      sx={{ marginTop: "3rem" }}
    >
      <Grid item xs={12} md={2.68}>
        <img src={content.imageSrc} alt={content.imageAlt} loading="lazy" />
      </Grid>
      <Grid item xs={12} md={6} className={styles.PlayBorder}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          sx={{
            width: "100%",
            height: "100%",
            padding: "2.8rem",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontFamily: "Tiamat",
              fontWeight: 600,
              color: "#D63E38",
              marginBottom: "1rem",
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
    </Grid>
  );
};

export default PlayRight;
