import React, { memo } from 'react';
import ExplorePopularSongs from '@/containers/HomePage/ExploreHome/ExplorePopularSong';
import Box from '@mui/material/Box';
import ExploreMoreSongs from '@/containers/HomePage/ExploreHome/ExploreLastAdded';
import { Grid, Typography } from '@mui/material';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import AlbumIcon from '@mui/icons-material/Album';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import TimerIcon from '@mui/icons-material/Timer';
import RestoreIcon from '@mui/icons-material/Restore';
import UpdateIcon from '@mui/icons-material/Update';
import GroupIcon from '@mui/icons-material/Group';
import ShortTextIcon from '@mui/icons-material/ShortText';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const config = [
  {
    label: 'Artists',
    value: '52 000',
    icon: InterpreterModeIcon,
  },
  {
    label: 'Albums',
    value: '5412',
    icon: LibraryBooksIcon,
  },
  {
    label: 'Songs lyrics',
    value: '500 123',
    icon: TextFormatIcon,
  },
  {
    label: 'Overall songs duration',
    value: '1241176',
    icon: TimerIcon,
  },
  {
    label: 'The oldest song',
    value: '1998',
    icon: RestoreIcon,
  },
  {
    label: 'The newest song',
    value: '2024',
    icon: UpdateIcon,
  },
  {
    label: 'Songs Lyrics Views',
    value: '625 124 066',
    icon: GroupIcon,
  },
  {
    label: 'All Count of words',
    value: '1 867 848 188',
    icon: ShortTextIcon,
  },
  {
    label: 'Most Popular Artist',
    value: 'Tyga',
    icon: PersonIcon,
  },
  {
    label: 'Most Popular Album',
    value: 'My Album',
    icon: AlbumIcon,
  },
];

const HomePage = memo(() => {
  return (
    <>
      <Box
        component="section"
        sx={{ mb: '4rem' }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            mb: '1rem'
          }}
        >
          Statistics
        </Typography>
        <Grid container spacing={2}>
          {config.map(item => {
              const Icon = item.icon;
              return (
                <Grid
                  item
                  key={item.label}
                  xs={6}
                  sm={4}
                  md={2.4}
                >
                  <Box
                    sx={{
                      minHeight: '10.3125rem',
                      height: '12rem',
                      width: '100%',
                      background: '#ecf2ff',
                      borderRadius: '0.4375rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Icon
                      sx={{
                        mb: '1rem',
                        fontSize: '2.5rem',
                        color: '#5d87ff'
                      }}
                    />
                    <Typography
                      variant="h4"
                      fontSize="0.875rem"
                      fontWeight="bold"
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize="1.3125rem"
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>
      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <ExplorePopularSongs/>
      </Box>
      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <ExploreMoreSongs/>
      </Box>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
