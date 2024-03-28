import '@mui/material/styles';
import { LinkOwnProps as MuiLinkOwnProps } from '@mui/material/Link/Link';

declare module '@mui/material/Link' {
  interface LinkOwnProps extends MuiLinkOwnProps {
    prefetch?: boolean;
  }
}
