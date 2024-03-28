import { TSong } from '@/config/types';
import React, { ReactNode } from 'react';
import Rating from '@/components/extra/Rating';
import { extractYear, formatDuration } from '@/utils/time';
import moment from 'moment/moment';
import { countWords } from '@/utils/text.utils';
import { renderAlbums } from '@/components/extra/AdditionalInfo/helpers/album.helpers';
import { renderArtists } from '@/components/extra/AdditionalInfo/helpers/artists.helpers';


export const songDataSerializer = (song: TSong): Record<string, ReactNode> => ({
  tags: song.tags.length ? song.tags.map(i => i.id).join(', ') : '-',
  rating: <Rating type="song" slug={song.slug} rating={song.rating} votes={song.ratingVotes}/>,
  duration: formatDuration(song.duration || 0),
  songPublicationDate: moment(song.publishDateYt).format('YYYY'),
  albumTitle: song.album ? renderAlbums([song.album]) : '-',
  ytViewCount: String(song.viewCountYt).toLocaleString(),
  albumDuration: formatDuration(song.album?.duration || 0),
  countWords: countWords(String(song.lyrics)),
  albumPublicationDate: moment(extractYear(song.album?.year)).format('YYYY'),
  artists: song.artists.length ? renderArtists(song.artists) : '-',
  aboutAlbum: song.album?.description || '-',
  aboutArtist: '-',
});

export const getSongsRows = (song: TSong) => {
  const data = songDataSerializer(song);

  return [
    {
      tags: data.tags,
      rating: data.rating,
    },
    {
      duration: data.duration,
      songPublicationDate: data.songPublicationDate,
    },
    {
      albumTitle: data.albumTitle,
      ytViewCount: data.ytViewCount,
    },
    {
      albumDuration: data.albumDuration,
      countWords: data.countWords,
    },
    {
      albumPublicationDate: data.albumPublicationDate,
      artists: data.artists,
    },
    {
      aboutAlbum: data.aboutAlbum,
      aboutArtist: data.aboutArtist,
    },
  ];
};
