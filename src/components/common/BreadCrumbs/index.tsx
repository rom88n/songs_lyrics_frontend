import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Paper, SxProps } from '@mui/material';
import { FC } from 'react';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';

type TCustomBreadcrumbsProps = {
  paths: {
    label: string
    href?: string
    icon?: typeof SvgIcon
  }[]
  sx?: SxProps
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const CustomBreadcrumbs: FC<TCustomBreadcrumbsProps> = ({ paths, sx }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={sx}>
      <StyledBreadcrumb
        component={Link}
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small"/>}
      />
      {paths.map(item => (
        <StyledBreadcrumb
          key={item.label}
          component={Link}
          label={item.label}
          {...item.href && {
            href: item.href,
            component: Link,
          }}
          {...item.icon && { icon: <item.icon fontSize="small"/> }}
        />
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
