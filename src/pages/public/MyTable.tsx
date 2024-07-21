import React from 'react'
import { HeadProvider, Link, Meta, Title } from 'react-head'
import { NavBar } from '../../components/NavBar'
import { Typography, Box, Button } from '@mui/material'
import styles from '../../styles/MyTable.module.scss'
import { CardTable } from '../../components/CardTable'
import { CardPickedTable } from '../../components/CardPickedTable'

const MyTable: React.FC = () => {
  const cardTableCard = {
    picture: '/dungeon.jpg',
    heading: 'Card Heading 1',
    text: 'Some description text for card 1.',
    badges: ['Badge 1', 'Badge 2', 'Badge 3']
  }

  const cardPickedTableCard = {
    picture: '/dungeon.jpg',
    heading: 'Card Heading 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    badges: ['Badge 1', 'Badge 2', 'Badge 3']
  }

  return (
    <div className={styles.container}>
      <HeadProvider>
        <div className='Home'>
          <Title>DnD BrussHell</Title>
          <Meta name='DnD BrussHell' content='Generated by create next app' />
          <Link rel='icon' href='/favicon.ico' />
        </div>
      </HeadProvider>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.typography}>
              <Typography variant='h1'>Title of the event</Typography>
              <Typography
                variant='body1'
                sx={{
                  overflow: 'hidden',
                  width: '30rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus consequat aliquam venenatis. Quisque nisi arcu,
                pharetra in tempus et, placerat sit amet ante. Aliquam vehicula
                neque id massa ultrices consequat. Aenean at neque eu magna
                fermentum accumsan quis vitae nunc. In cursus ultricies auctor.
                Duis nisl neque, maximus a malesuada nec, maximus sed enim.
                Praesent at enim enim. Praesent ornare interdum lacus ac
                consequat. Nunc lacinia lectus condimentum nisi cursus, vitae
                varius quam condimentum. Vestibulum viverra ullamcorper leo
              </Typography>
            </div>
            <Box>
              {' '}
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '50%', // Ensures both buttons have the same width
                    '&:hover': {
                      backgroundColor: 'darkgray'
                    }
                  }}
                >
                  Cancel Event
                </Button>
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#D63E38',
                    color: 'white',
                    width: '50%', // Ensures both buttons have the same width
                    '&:hover': {
                      backgroundColor: '#b73b33'
                    }
                  }}
                >
                  Edit
                </Button>
              </Box>
                          <Box
              sx={{
                backgroundColor: 'grey',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginBottom: '1rem'
                }}
              >
                <Typography variant='body1' color='white'>
                  Location
                </Typography>
                <Typography variant='body1' color='white'>
                  Date
                </Typography>
              </Box>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509354!2d144.95373631550415!3d-37.81627974202165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776d70f697c8e!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1600255856264!5m2!1sen!2sau'
                width='100%'
                height='300' // Adjusted height for a more rectangular shape
                frameBorder='0'
                style={{ border: 0 }}
                aria-hidden='false'
              ></iframe>
            </Box>
            </Box>

          </div>
        </div>
        <Box
          sx={{
            marginTop: '3rem',
            marginRight: '3rem'
          }}
        >
          <Typography
            variant='h2'
            component='div'
            sx={{
              color: 'white',
              padding: '0.5rem',
              marginTop: '1rem'
            }}
          >
            You have enrolled for tableName on tableDate
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            <CardPickedTable cards={[cardPickedTableCard]} />
          </Box>
        </Box>
        <Box>
          <Typography
            variant='h2'
            component='div'
            sx={{
              color: 'white',
              padding: '0.5rem',
              marginTop: '1rem'
            }}
          >
            Other tables
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            <CardTable cards={[cardTableCard]} />
            <CardTable cards={[cardTableCard]} />
            <CardTable cards={[cardTableCard]} />
          </Box>
        </Box>
      </main>
    </div>
  )
}

export default MyTable
