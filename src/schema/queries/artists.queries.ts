import gql from 'graphql-tag';

export const GET_ARTISTS_QUERY = gql`
 query GetArtists($skip: Int!, $first: Int!, $search: String) {
    artists(skip: $skip, first: $first, search: $search) {
      name
      slug
      bio
      picture
      subscribers
      albums {
        name
      }
      songs {
        name
      }
      views
      rating
      ratingVotes
      createdAt
    }
    totalArtists(search: $search)
  }
`;

export const GET_ARTIST_QUERY = gql`
 query GetArtist($slug: String!) {
    artist(slug: $slug) {
      name
      picture
      bio
      slug
      subscribers
      views
      rating
      ratingVotes
      comments {
        id
        name
        text
        createdAt
      }
      albums {
        name
        slug
        year
        artists {
          name
          slug
        }
        songs {
          name
          slug
        }
      }
      songs {
        title
        slug
        publishDateYt
        viewCountYt
        duration
        artists {
          name
        }
        album {
          name
        }
      }
    }
  }
`;
