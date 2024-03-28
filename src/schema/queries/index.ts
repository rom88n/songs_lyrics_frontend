import {
  GET_SONGS_QUERY,
  GET_SONG_QUERY,
  GET_ARTIST_EVENTS_QUERY,
  GET_ARTISTS_SONGS_QUERY,
  GET_LAST_ADDED_SONGS_QUERY,
  GET_POPULAR_SONGS_QUERY
} from '@/schema/queries/songs.queries';
import { GET_ARTISTS_QUERY, GET_ARTIST_QUERY } from '@/schema/queries/artists.queries';
import { GET_ALBUM_QUERY, GET_ALBUMS_QUERY } from '@/schema/queries/albums.queries';
import { GET_COMMENTS_QUERY } from '@/schema/queries/comments.queries';

const queries = {
  // Songs
  GET_SONGS_QUERY,
  GET_SONG_QUERY,
  GET_LAST_ADDED_SONGS_QUERY,
  GET_POPULAR_SONGS_QUERY,

  // Artists
  GET_ARTIST_QUERY,
  GET_ARTISTS_QUERY,
  GET_ARTIST_EVENTS_QUERY,
  GET_ARTISTS_SONGS_QUERY,

  // Albums
  GET_ALBUMS_QUERY,
  GET_ALBUM_QUERY,

  // Comments
  GET_COMMENTS_QUERY,
};

export default queries;
