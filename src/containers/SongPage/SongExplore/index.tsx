import React, { FC, Fragment, memo, useMemo } from 'react';
import { Divider, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import EventIcon from '@mui/icons-material/Event';
import ExploreRelated from './ExploreRelated';
import ExploreArtists from './ExploreArtists';
import EventsList from '@/containers/SongPage/SongExplore/EventsList';
import { TSong } from '@/config/types';
import { prettifyText } from '@/utils/text.utils';
import first from 'lodash/first';

const SongExplore: FC<{ song: TSong, relatedSongs: TSong[] }> = memo(({ song, relatedSongs }) => {
  const iconStyle = useMemo(() => ({
    fontSize: '1.4rem',
    verticalAlign: 'middle',
    color: '#7487f2'
  }), []);

  const sections = [
    {
      label: <><LibraryMusicIcon style={iconStyle}/> Explore Artists' songs</>,
      component: <ExploreArtists artists={song.artists}/>
    },
    {
      label: <><HeadphonesIcon style={iconStyle}/> Related songs</>,
      component: <ExploreRelated songs={relatedSongs}/>,
    },
    {
      label: <><EventIcon style={iconStyle}/> Artist Events</>,
      component: <EventsList artistName={first(song.artists)?.name || ''}/>
    },
  ];

  return (
    <Grid container component={Paper} variant="outlined" borderRadius="0.5rem">
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          textAlign: 'center',
          p: '2rem 0',
          fontSize: {
            xs: '1rem',
            md: '1.2rem',
          }
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{ pb: '1rem' }}
        >
          Lyrics
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: prettifyText(song.lyrics) }}
        />
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }}/>
      <Grid item xs={12} md={5} p={0}>
        {sections.map((section, index) => (
          <Fragment key={index}>
            <Box>
              <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1rem 1rem' }}>
                {section.label}
              </Typography>
              <Box>
                {section.component}
              </Box>
            </Box>
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
});

SongExplore.displayName = 'SongExplore';

export default SongExplore;
