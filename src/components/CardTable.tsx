import { Box, Typography, Card, CardMedia, CardContent, Chip, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import styles from "../styles/Home.module.scss";

interface CardTableProps {
  cards: {
    picture: string;
    heading: string;
    text: string;
    badges: string[];
  }[];
  borderRadius?: string;
  cardWidth?: string;
  cardHeight?: string;
}

export const CardTable: React.FC<CardTableProps> = ({ cards, borderRadius = '2rem', cardWidth = '19rem', cardHeight = 'auto' }) => {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card 
            className={styles.card} 
            style={{ 
              borderRadius, 
              width: cardWidth, 
              height: cardHeight, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            <CardMedia
              component="img"
              alt={card.heading}
              sx={{
                width: { xs: '100%', sm: '17rem' }, // Adjusted width for larger screens
                height: { xs: '10rem', sm: '17rem' }, // Adjusted height
                borderRadius: '2rem',
                objectFit: 'cover',
                padding: '1rem',
              }}
              image={card.picture}
              title={card.heading}
            />
            <CardContent 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                width: '100%',
                textAlign: 'center',
                padding: '1rem', // Add padding to CardContent
              }}
            >
              <Box 
                display="flex" 
                justifyContent="space-around" 
                alignItems="center" 
                width="100%"
                paddingBottom="1rem" // Add padding to the heading Box
              >
                <Typography variant="h5" component="div">
                  {card.heading}
                </Typography>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </Box>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.text}
              </Typography>
              <Box 
                mt={2} 
                display="flex" 
                justifyContent="space-around" 
                alignItems="center" 
                width="100%"
              >
                <Chip 
                  icon={<PersonIcon />} 
                  label="6" 
                  className={styles.badge} 
                />
                <Box 
                  display="flex" 
                  justifyContent="space-around" 
                  gap ="0.2rem"
                >
                  <Chip 
                    label="English" 
                    className={styles.badge} 
                  />
                  <Chip 
                    label="Level 3" 
                    className={styles.badge} 
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
