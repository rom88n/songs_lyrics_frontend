'use client';
import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { IconButton, Link, SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { styled, useTheme } from '@mui/system';

type TMusicPlayerProps = {
  mediaId: string
  duration: number
  sx?: SxProps
}

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const MusicPlayer: FC<TMusicPlayerProps> = memo(({ duration, mediaId, sx }) => {
  const theme = useTheme();
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <Box
      sx={{
        padding: '1rem',
        width: '100%',
        maxWidth: '100%',
        margin: 'auto',
        position: 'relative',
        zIndex: 1,
        color: 'inherit',
        textDecoration: 'none',
        '> *': {
          pointerEvents: 'none',
        },
        ...sx
      }}
      component={Link}
      href={`https://music.youtube.com/watch?v=${mediaId}`}
      target="_blank"
      rel="nofollow"
    >
      <Slider
        aria-label="time-indicator"
        size="small"
        value={0}
        min={0}
        step={1}
        max={duration}
        sx={{
          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 8,
            height: 8,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&::before': {
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
              }`,
            },
            '&.Mui-active': {
              width: 20,
              height: 20,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: -2,
        }}
      >
        <TinyText>{formatDuration(0)}</TinyText>
        <TinyText>-{formatDuration(duration)}</TinyText>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song">
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor}/>
        </IconButton>
        <IconButton
          aria-label="play"
        >
          <PlayArrowRounded
            sx={{ fontSize: '3rem' }}
            htmlColor={mainIconColor}
          />
        </IconButton>
        <IconButton aria-label="next song">
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor}/>
        </IconButton>
      </Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
        <VolumeDownRounded htmlColor={lightIconColor}/>
        <Slider
          aria-label="Volume"
          defaultValue={100}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            '& .MuiSlider-track': {
              border: 'none',
            },
            '& .MuiSlider-thumb': {
              width: 24,
              height: 24,
              backgroundColor: '#fff',
              '&::before': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none',
              },
            },
          }}
        />
        <VolumeUpRounded htmlColor={lightIconColor}/>
      </Stack>
    </Box>
  );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
