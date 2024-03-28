import { TAlbum } from '@/config/types';
import Chip from '@mui/material/Chip';
import { Link } from '@mui/material';
import ROUTES from '@/config/routes';
import React, { ReactNode } from 'react';
import Rating from '@/components/extra/Rating';
import { extractYear, formatDuration } from '@/utils/time';
import moment from 'moment';
import Box from '@mui/material/Box';
import { renderArtists } from '@/components/extra/AdditionalInfo/helpers/artists.helpers';

export const renderAlbums = (albums: TAlbum[]) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '.5rem' }}>
    {albums.map(album => (
      <Chip key={album.name} label={album.name} variant="outlined" sx={{
        background: '#7487f2',
        border: 'none',
        textDecoration: 'none',
        color: '#fff',
        cursor: 'pointer'
      }} component={Link} href={`${ROUTES.albums}/${album.slug}`}/>
    ))}
  </Box>
);

export const albumDataSerializer = (album: TAlbum): Record<string, ReactNode> => ({
  albumTitle: album.name,
  rating: <Rating type="album" slug={album.slug} rating={album.rating} votes={album.ratingVotes}/>,
  albumDuration: formatDuration(album.duration || 0),
  albumPublicationDate: moment(extractYear(album.year)).format('YYYY'),
  albumCountSongs: album.songs.length,
  views: album.views,
  artists: album.artists.length ? renderArtists(album.artists) : '-',
});

export const getAlbumRows = (album: TAlbum) => {
  const data = albumDataSerializer(album);

  return [
    {
      albumDuration: data.albumDuration,
      rating: data.rating,
    },
    {
      albumPublicationDate: data.albumPublicationDate,
      albumCountSongs: data.albumCountSongs,
    },
    {
      artists: data.artists,
      views: data.views,
    },
  ];
};

