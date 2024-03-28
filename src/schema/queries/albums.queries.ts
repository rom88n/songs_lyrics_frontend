import gql from 'graphql-tag';

export const GET_ALBUMS_QUERY = gql`
 query GetAlbums($skip: Int!, $first: Int!, $search: String) {
    albums(skip: $skip, first: $first, search: $search) {
      name
      slug
      duration
      description
      year
      picture
      artists {
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
    totalAlbums(search: $search)
  }
`;

export const GET_ALBUM_QUERY = gql`
 query GetAlbum($slug: String!) {
    album(slug: $slug) {
      name
      slug
      duration
      description
      year
      views
      picture
      rating
      comments {
        id
        name
        text
        createdAt
      }
      ratingVotes
      songs {
        name
        slug
      }
      artists {
        name
        slug
        subscribers
        albums {
          name
          slug
          songs {
            name
          }
        }
        songs {
          name
          slug
        }
      }
    }
  }
`;
