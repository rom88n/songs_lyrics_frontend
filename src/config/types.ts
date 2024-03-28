export type TEvent = {
  name: string;
  url: string;
  promoter: string;
};

export type TTag = {
  id: string;
};

export type TComment = {
  id: string;
  name: string;
  text: string;
  song: TSong | null;
  artist: TArtist | null;
  album: TAlbum | null;
  createdAt: string;
}

export type TAlbum = {
  id: string;
  name: string;
  description: string;
  picture: string;
  slug: string;
  year: string;
  duration: number;
  rating: number;
  ratingVotes: number;
  songs: TSong[]
  artists: TArtist[]
  views: number;
  comments: TComment[]
};

export type TArtist = {
  id: string;
  name: string;
  bio: string;
  slug: string;
  picture: string;
  subscribers: string;
  albums: TAlbum[]
  songs: TSong[]
  rating: number;
  ratingVotes: number;
  views: number;
  comments: TComment[]
};

export type TSong = {
  id: string;
  title: string;
  name: string;
  description: string;
  picture: string;
  duration: number;
  lyrics: string;
  publishDateYt: string;
  slug: string;
  year: number;
  viewCountYt: number;
  album: TAlbum
  artists: TArtist[]
  tags: TTag[]
  rating: number;
  ratingVotes: number;
  views: number;
  comments: TComment[]
};
