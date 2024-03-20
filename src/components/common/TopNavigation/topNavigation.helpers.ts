import Search from '@/components/common/TopNavigation/Search';
import ROUTES from '@/config/routes';
import LangPicker from '@/components/extra/LangPicker';

export const menuItems = [
  {
    label: 'Songs',
    href: ROUTES.songs,
  },
  {
    label: 'Artists',
    href: ROUTES.artists
  },
  {
    label: 'Albums',
    href: ROUTES.albums
  },
  {
    label: 'About Us',
    href: ROUTES.aboutUs
  },
  {
    label: 'Search',
    component: Search
  },
  {
    label: 'Lang Picker',
    component: LangPicker
  },
];
