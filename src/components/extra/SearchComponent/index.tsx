'use client';
import { FC, memo } from 'react';
import { tss } from 'tss-react';
import Paper from '@mui/material/Paper';
import { Divider, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams } from 'next/navigation';

type TSearchComponentProps = {
  placeholder: string
}

const SearchComponent: FC<TSearchComponentProps> = memo(({ placeholder }) => {
  const { classes } = useStyles();
  const searchParams = useSearchParams()

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.delete('page')
      if (value === '') currentParams.delete('search'); else currentParams.set('search', value);
      window.history.pushState(null, '', `?${currentParams.toString()}`)
      // router.replace(`?${currentParams.toString()}`, { scroll: false });
    },
    // delay in ms
    400
  );

  return (
    <Paper
      component="form"
      variant="outlined"
      className={classes.container}
      key="123"
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon/>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onChange={(e) => debounced(e.target.value)}
        placeholder={placeholder}
        defaultValue={searchParams.get('search')}
      />
    </Paper>
  );
});

const useStyles = tss.create({
  container: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '1rem 0 2rem'
  },
});

SearchComponent.displayName = 'SearchComponent';

export default SearchComponent;
