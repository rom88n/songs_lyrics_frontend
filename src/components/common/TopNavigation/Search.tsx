import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import SearchModal from '../SearchModal';
import { memo } from 'react';
import { Button } from '@mui/material';

const Search = memo(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        sx={{
          color: 'inherit',
          textTransform: 'capitalize',
        }}
        onClick={() => setOpen(true)}
      >
        <SearchIcon/>
      </Button>
      <SearchModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </React.Fragment>
  );
});

Search.displayName = 'Search';

export default Search;
