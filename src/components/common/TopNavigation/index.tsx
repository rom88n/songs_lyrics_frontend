'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Fragment, memo } from 'react';
import { tss } from 'tss-react';
import Image from 'next/image';
import HideOnScroll from '@/components/common/TopNavigation/HideOnScroll';
import { menuItems } from '@/components/common/TopNavigation/topNavigation.helpers';
import { Button, Divider, Link } from '@mui/material';


const TopNavigation = memo(() => {
  const { classes } = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <HideOnScroll>
        <AppBar className={classes.header}>
          <Toolbar disableGutters>
            <Container maxWidth="lg" className={classes.container}>
              <Typography component="div">
                <Link href="/">
                  <Image
                    src="https://sinju.gthememarket.com/content/images/2022/06/Sinju..svg"
                    width={96}
                    height={37}
                    alt="Picture of the author"
                    style={{ verticalAlign: 'text-top' }}
                  />
                </Link>
              </Typography>
              <Typography
                component="div"
                sx={{
                  gap: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {menuItems.map(menuItem => {
                  if (menuItem.component) {
                    return (
                      <Fragment key={menuItem.label}>
                        <menuItem.component/>
                      </Fragment>
                    );
                  }

                  return (
                    <Button
                      key={menuItem.label}
                      {...menuItem.href && {
                        component: Link,
                        href: menuItem.href
                      }}
                      sx={{
                        color: 'inherit',
                        textTransform: 'capitalize',
                      }}
                    >
                      {menuItem.label}
                    </Button>
                  );
                })}
              </Typography>
            </Container>
          </Toolbar>
          <Divider/>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
});

TopNavigation.displayName = 'TopNavigation';

const useStyles = tss.create({
  header: {
    background: '#fff',
    boxShadow: 'none',
    color: 'inherit',
  },
  container: {
    padding: '1.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default TopNavigation;
