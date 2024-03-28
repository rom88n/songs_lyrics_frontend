import gql from 'graphql-tag';

export const GET_COMMENTS_QUERY = gql`
  query GetComments($type: String!, $slug: String!, $skip: Int!, $first: Int!) {
    comments(slug: $slug, type: $type, first: $first, skip: $skip) {
      id
      name
      text
      createdAt
    }
    totalEntityComments(slug: $slug, type: $type)
  }
`;
