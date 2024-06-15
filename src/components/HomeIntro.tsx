import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.scss";


export const HomeIntro = () => {
  return (
    <Grid container spacing={2} className={styles.hero}>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img src="/perso2.png" alt="perso" width={500} height={500} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Tiamat",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "#D63E38",
              textAlign: "center",
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            Embark on epic adventures where every dice roll shapes your destiny.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
