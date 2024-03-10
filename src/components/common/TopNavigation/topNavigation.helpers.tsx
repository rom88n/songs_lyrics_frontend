import Search from '@/components/common/TopNavigation/Search';
import ROUTES from '@/config/routes';

export const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Songs',
    href: ROUTES.songs,
  },
  {
    label: 'Artists',
    href: ROUTES.artists
  },
  {
    label: 'Financial',
    href: '/'
  },
  {
    label: 'Tags',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about-us'
  },
  {
    label: 'Search',
    component: Search
  },
]
