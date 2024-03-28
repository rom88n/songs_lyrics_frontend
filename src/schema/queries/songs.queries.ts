import gql from 'graphql-tag';

export const GET_SONGS_QUERY = gql`
 query GetSongs($skip: Int!, $first: Int!, $search: String) {
    songs(skip: $skip, first: $first, search: $search) {
      id
      title
      description
      duration
      publishDateYt
      slug
      viewCountYt
      album {
        name
      }
      artists {
        name
      }
    }
    totalSongs(search: $search)
  }
`;

export const GET_SONG_QUERY = gql`
 query GetSong($slug: String!) {
    song(slug: $slug) {
      id
      title
      name
      description
      picture
      duration
      lyrics
      publishDateYt
      slug
      views
      viewCountYt
      rating
      ratingVotes
      comments {
        id
        name
        text
        createdAt
      }
      album {
        name
        slug
        year
        description
        duration
      }
      artists {
        name
        bio
        slug
        subscribers
      }
      tags {
        id
      }
    }
    relatedSongs(slug: $slug) {
      title
      duration
      publishDateYt
      slug
      viewCountYt
      album {
        name
      }
      artists {
        name
      }
    }
  }
`;


export const GET_ARTISTS_SONGS_QUERY = gql`
 query GetArtistsSongs($artists_slugs: [String]!) {
    artistsSongs(artistSlugs: $artists_slugs) {
      title
      duration
      publishDateYt
      slug
      viewCountYt
      album {
        name
      }
      artists {
        name
      }
    }
  }
`;


export const GET_ARTIST_EVENTS_QUERY = gql`
 query GetEvents($artist_name: String!) {
    artistEvents(artistName: $artist_name) {
      name
      promoter
      url
    }
  }
`;

export const GET_LAST_ADDED_SONGS_QUERY = gql`
 query {
    songs(skip: 0, first: 7) {
      id
      title
      duration
      publishDateYt
      slug
      viewCountYt
      album {
        name
      }
      artists {
        name
      }
    }
  }
`;

export const GET_POPULAR_SONGS_QUERY = gql`
 query {
    popularSongs {
      id
      title
      duration
      publishDateYt
      slug
      viewCountYt
      album {
        name
      }
      artists {
        name
      }
    }
  }
`;
