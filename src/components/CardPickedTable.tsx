import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import styles from '../styles/Home.module.scss'

interface CardPickedTableProps {
  cards: {
    picture: string
    heading: string
    text: string
    badges: string[]
  }[]
}

export const CardPickedTable: React.FC<CardPickedTableProps> = ({ cards }) => {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            className={styles.card}
            sx={{
              borderRadius: '2rem',
              height: '15rem',
              width: '35rem',
              maxWidth: '35rem', // Increased max width
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              margin: 'auto',
              overflow: 'hidden'
            }}
          >
            <CardMedia
              component='img'
              alt={card.heading}
              sx={{
                width: { xs: '100%', sm: '12rem' }, // Adjusted width for larger screens
                height: { xs: '10rem', sm: '12rem' }, // Adjusted height
                borderRadius: { xs: '3rem', sm: '3rem' },
                objectFit: 'cover',
                padding: { xs: '1rem', sm: '1rem' },
                flexShrink: 0
              }}
              image={card.picture}
              title={card.heading}
            />
            <CardContent
              sx={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: { xs: '1rem', sm: '2rem' },
                overflow: 'auto',
                flexWrap: 'wrap',
                boxSizing: 'border-box'
              }}
            >
              <Typography
                variant='h5'
                component='div'
                noWrap
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {card.heading}
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal'
                }}
              >
                {card.text}
              </Typography>
              <Box mt={2} display='flex' justifyContent='space-between' gap={1}>
                <Chip
                  icon={<PersonIcon />}
                  label='6'
                  className={styles.badge}
                />
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  gap={1}
                  flexWrap='wrap'
                >
                  <Chip label='English' className={styles.badge} />
                  <Chip label='Level 3' className={styles.badge} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
