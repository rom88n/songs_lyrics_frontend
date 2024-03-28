import { TAlbum, TArtist, TSong } from '@/config/types';
import { TAdditionalInfoProps } from '@/components/extra/AdditionalInfo/index.types';
import { getSongsRows } from '@/components/extra/AdditionalInfo/helpers/songs.helpers';
// import { getArtistRows } from '@/components/extra/AdditionalInfo/helpers/artists.helpers';
import { getAlbumRows } from '@/components/extra/AdditionalInfo/helpers/album.helpers';
import { getArtistsRows } from '@/components/extra/AdditionalInfo/helpers/artists.helpers';

export const ADDITIONAL_INFO_TABLE_LABELS = {
  tags: 'Tags',
  rating: 'Rating',
  duration: 'Duration',
  songPublicationDate: 'Song Publication Date',
  albumTitle: 'Album Name',
  ytViewCount: 'YT View Count',
  albumDuration: 'Album duration',
  countWords: 'Count of words',
  countSongs: 'Count of songs',
  countAlbums: 'Count of albums',
  albumPublicationDate: 'Album Publication Date',
  albumCountSongs: 'Songs at Album',
  artists: 'Artists',
  albums: 'Albums',
  subscribers: 'Subscribers',
  aboutAlbum: 'About album',
  aboutArtist: 'About Artist',
  views: 'Views',
  bio: 'Bio',
};


export const getRows = (type: TAdditionalInfoProps['type'], data: TAdditionalInfoProps['data']) => {
  switch (type) {
    case 'song':
      return getSongsRows(data as TSong);
    case 'album':
      return getAlbumRows(data as TAlbum);
    case 'artist':
      return getArtistsRows(data as TArtist);
    default:
      return [];
  }
};
