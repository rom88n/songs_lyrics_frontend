import gql from 'graphql-tag';

export const UPDATE_RATING_MUTATION = gql`
 mutation UpdateRating($type: String!, $slug: String!, $value: Int!) {
    updateRating(type: $type, slug: $slug, value: $value) {
      success
    }
  }
`;

export const ADD_COMMENT_MUTATION = gql`
 mutation AddComment($type: String!, $slug: String!, $name: String!, $text: String!, $captcha: String!) {
    addComment(type: $type, slug: $slug, name: $name, text: $text, captcha: $captcha) {
      success
    }
  }
`;
