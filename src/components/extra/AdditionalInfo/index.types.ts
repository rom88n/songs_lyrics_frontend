import { TAlbum, TArtist, TSong } from '@/config/types';

export type TAdditionalInfoProps = {
  data: TSong | TAlbum | TArtist
  type: 'song' | 'artist' | 'album'
}
