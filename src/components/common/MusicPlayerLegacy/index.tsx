'use client';
import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useYoutube } from 'react-youtube-music-player';
import Box from '@mui/material/Box';
import { IconButton, Skeleton, SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { styled, useTheme } from '@mui/system';

type TMusicPlayerProps = {
  mediaId: string
  sx?: SxProps
}

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const MusicPlayer: FC<TMusicPlayerProps> = memo(({ mediaId, sx }) => {
  const theme = useTheme();
  const playerRef = useRef<{ getCurrentTime: () => number }>();
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timeout | null>(null);

  const { playerDetails, actions } = useYoutube({
    id: mediaId,
    type: 'video',
    events: {
      onReady: ({ target }) => {
        playerRef.current = target;

        let handler = () => {
          const currentTime = target.getCurrentTime();
          setPosition(currentTime.toFixed(2));
        };

        const interval = setInterval(handler, 1000);
        setIntervalRef(interval);
      },
    }
  });

  useEffect(() => {
    return () => {
      intervalRef && clearInterval(intervalRef);
    };
  }, []);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  const onPrevious = useCallback(() => {
    const currentTime = playerRef.current && playerRef.current.getCurrentTime() || 10;
    actions.seekTo(currentTime - 10, true);
  }, [actions, playerRef]);

  const onNext = useCallback(() => {
    const currentTime = playerRef.current && playerRef.current.getCurrentTime() || -10;
    actions.seekTo(currentTime + 10, true);
  }, [actions, playerRef]);

  const onPause = useCallback(() => {
    actions.pauseVideo();
    setPaused(false);
  }, [actions]);

  const onPlay = useCallback(() => {
    actions.playVideo();
    setPaused(true);
  }, [actions]);

  const onTimeChange = useCallback((event: Event, newValue: number | number[]) => {
    setPosition(newValue as number);
    actions.seekTo(newValue as number, true);
  }, [actions]);

  const onVolumeChange = useCallback((event: Event, newValue: number | number[]) => {
    actions.setVolume(newValue as number);
  }, [actions]);

  if (!playerRef.current) {
    return (
      <Box
        sx={{
          padding: '1rem',
          width: '100%',
          margin: 'auto',
          ...sx
        }}
      >
        <Skeleton width="100%" height="2rem"/>
        <Skeleton width="10.375rem" height="3.5rem" sx={{ m: '0 auto' }}/>
        <Skeleton width="100%" height="2.83rem"/>
      </Box>
    );
  }

  const { duration } = playerDetails;

  return (
    <Box
      sx={{
        padding: '1rem',
        width: '100%',
        maxWidth: '100%',
        margin: 'auto',
        position: 'relative',
        zIndex: 1,
        ...sx
      }}
    >
      <Slider
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={onTimeChange}
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
        <TinyText>{formatDuration(position)}</TinyText>
        <TinyText>-{formatDuration(duration - position)}</TinyText>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song" onClick={onPrevious}>
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor}/>
        </IconButton>
        <IconButton
          aria-label={paused ? 'play' : 'pause'}
          onClick={paused ? onPause : onPlay}
        >
          {paused ? (
            <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor}/>
          ) : (
            <PlayArrowRounded
              sx={{ fontSize: '3rem' }}
              htmlColor={mainIconColor}
            />
          )}
        </IconButton>
        <IconButton aria-label="next song" onClick={onNext}>
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor}/>
        </IconButton>
      </Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
        <VolumeDownRounded htmlColor={lightIconColor}/>
        <Slider
          aria-label="Volume"
          defaultValue={100}
          onChange={onVolumeChange}
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
