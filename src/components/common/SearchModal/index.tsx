import React, { FC, memo, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Fade, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type TSearchModalProps = {
  open: boolean;
  onClose: (value: boolean) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '.5rem',
  boxShadow: 24,
  p: 2,
};

const SearchModal: FC<TSearchModalProps> = memo(({ open, onClose }) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open])

  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backdropFilter: "blur(.2rem)",
            backgroundColor:'rgba(0, 0, 30, 0.1)'
          },
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              inputRef={inputRef}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search songs, artists"
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
});

SearchModal.displayName = 'SearchModal';

export default SearchModal;
