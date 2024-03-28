import { TArtist } from '@/config/types';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Link } from '@mui/material';
import ROUTES from '@/config/routes';
import React, { ReactNode } from 'react';
import { renderAlbums } from '@/components/extra/AdditionalInfo/helpers/album.helpers';
import Rating from '@/components/extra/Rating';

export const renderArtists = (artists: TArtist[]) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '.5rem' }}>
    {artists.map(artist => (
      <Chip key={artist.name} label={artist.name} variant="outlined" sx={{
        background: '#7487f2',
        border: 'none',
        textDecoration: 'none',
        color: '#fff',
        cursor: 'pointer'
      }} component={Link} href={`${ROUTES.artists}/${artist.slug}`}/>
    ))}
  </Box>
);

export const artistDataSerializer = (artist: TArtist): Record<string, ReactNode> => ({
  albums: artist.albums.length ? renderAlbums(artist.albums) : '-',
  subscribers: artist.subscribers,
  countSongs: artist.songs.length,
  countAlbums: artist.albums.length,
  views: artist.views,
  rating: <Rating type="artist" slug={artist.slug} rating={artist.rating} votes={artist.ratingVotes}/>,
});

export const getArtistsRows = (song: TArtist) => {
  const data = artistDataSerializer(song);

  return [
    {
      subscribers: data.subscribers,
      rating: data.rating,
    },
    {
      countSongs: data.countSongs,
      countAlbums: data.countAlbums,
    },
    {
      albums: data.albums,
      views: data.views,
    },
  ];
};
