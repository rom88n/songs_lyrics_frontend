import React, { Fragment, memo, useMemo } from 'react';
import { Divider, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import EventIcon from '@mui/icons-material/Event';
import ExploreRelated from './ExploreRelated';
import ExploreArtists from './ExploreArtists';
import EventsList from '@/containers/SongPage/SongExplore/EventsList';

const SongExplore = memo(() => {
  const iconStyle = useMemo(() => ({
    fontSize: '1.4rem',
    verticalAlign: 'middle',
    color: '#7487f2'
  }), []);

  const sections = [
    {
      label: <><LibraryMusicIcon style={iconStyle}/> Explore Artists' songs</>,
      component: <ExploreArtists/>
    },
    {
      label: <><HeadphonesIcon style={iconStyle}/> Related songs</>,
      component: <ExploreRelated/>,
    },
    {
      label: <><EventIcon style={iconStyle}/> Artist Events</>,
      component: <EventsList/>
    },
  ];

  return (
    <Grid container component={Paper} variant="outlined" borderRadius="1.5rem">
      <Grid item xs={12} md={7} sx={{ textAlign: 'center', p: '2rem 0' }}>
        <Typography component="h2" variant="h4" sx={{ pb: '1rem' }}>Lyrics</Typography>

        Man I can understand how it might be<br/>
        Kinda hard to love a girl like me<br/>
        I don't blame you much for wanting to be free<br/>
        I just wanted you to know<br/>
        Swizz told me let the beat rock<br/>
        For all my Southside niggas that know me best<br/>
        I feel like me and Taylor might still have sex<br/>
        Why? I made that bitch famous (Goddamn)<br/>
        I made that bitch famous<br/>
        For all the girls that got dick from Kanye West<br/>
        If you see 'em in the streets give 'em Kanye's best<br/>
        Why? They mad they ain't famous (Goddamn)<br/>
        They mad they still nameless (Talk that talk, man)<br/>
        Her man in the store tryna try his best<br/>
        But he just can't seem to get Kanye fresh<br/>
        But we still hood famous (Goddamn)<br/>
        Yeah we still hood famous<br/>
        I just wanted you to know<br/>
        I loved you better than your own kin did<br/>
        From the very start<br/>
        I don't blame you much for wanting to be free<br/>
        Wake up, Mr. West!<br/>
        I just wanted you to know (Oh, he's up!)<br/>
        I be Puerto Rican day parade floatin'<br/>
        That Benz Marina Del Rey coastin'<br/>
        She in school to be a real estate agent<br/>
        Last month I helped her with the car payment<br/>
        Young and we alive, whoo!<br/>
        We never gonna die, whoo!<br/><br/>
        Man I can understand how it might be<br/>
        Kinda hard to love a girl like me<br/>
        I don't blame you much for wanting to be free<br/>
        I just wanted you to know<br/>
        Swizz told me let the beat rock<br/>
        For all my Southside niggas that know me best<br/>
        I feel like me and Taylor might still have sex<br/>
        Why? I made that bitch famous (Goddamn)<br/>
        I made that bitch famous<br/>
        For all the girls that got dick from Kanye West<br/>
        If you see 'em in the streets give 'em Kanye's best<br/>
        Why? They mad they ain't famous (Goddamn)<br/>
        They mad they still nameless (Talk that talk, man)<br/>
        Her man in the store tryna try his best<br/>
        But he just can't seem to get Kanye fresh<br/>
        But we still hood famous (Goddamn)<br/>
        Yeah we still hood famous<br/>
        I just wanted you to know<br/>
        I loved you better than your own kin did<br/>
        From the very start<br/>
        I don't blame you much for wanting to be free<br/>
        Wake up, Mr. West!<br/>
        I just wanted you to know (Oh, he's up!)<br/>
        I be Puerto Rican day parade floatin'<br/>
        That Benz Marina Del Rey coastin'<br/>
        She in school to be a real estate agent<br/>
        Last month I helped her with the car payment<br/>
        Young and we alive, whoo!<br/>
        We never gonna die, whoo!<br/>
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
