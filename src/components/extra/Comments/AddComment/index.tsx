import React, { FC, memo, useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import moment from 'moment';
import crypto from 'crypto';
import { useMutation } from '@apollo/client';
import mutations from '@/schema/mutations';
import Modal from '@mui/material/Modal';
import Captcha from '@/components/extra/Captcha';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

type TAddCommentProps = {
  type: 'song' | 'album' | 'artist';
  slug: string;
  refetchComments: () => void
}

const AddComment: FC<TAddCommentProps> = memo(({ type, slug, refetchComments }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [addComment, { loading }] = useMutation(
    mutations.ADD_COMMENT_MUTATION,
    {
      onCompleted: () => {
        setName('');
        setText('');
        setCaptcha('')
        setCaptchaText('')
      }
    }
  );

  const handleSetCaptcha = useCallback(() => {
    const currentHourUTC = moment().utc().format('HH');
    const stringToHash = `${currentHourUTC}${name}${text}`;

    const captchaBackend = crypto.createHash('md5').update(stringToHash).digest('hex').substring(0, 4);

    setCaptcha(captchaBackend)
  }, [name, text])

  const handleAddComment = useCallback(async (captchaValue: string) => {
    await addComment({
      variables: {
        name,
        text,
        slug,
        type,
        captcha: captchaValue
      },
    });
    await refetchComments();
  }, [name, text]);

  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
      sx={{
        mt: '2rem',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TextField
        name="name"
        size="small"
        placeholder="Name"
        variant="outlined"
        sx={{
          width: {
            xs: '100%',
            sm: '30%'
          },
          mb: '1rem',
        }}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Textarea
        name="comment"
        minRows={4}
        maxRows={4}
        placeholder="Your comment"
        sx={{
          width: '100%'
        }}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button
        type="submit"
        variant="outlined"
        size="small"
        sx={{ mt: '1rem', alignSelf: 'flex-end', width: '12.5rem' }}
        disabled={loading || !name || !text}
        onClick={handleSetCaptcha}
      >
        Leave comment
      </Button>
      <Modal
        open={!!captcha}
        onClose={() => setCaptcha('')}
      >
        <Box sx={{ ...style, width: '100%',  maxWidth: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          {captcha && <Captcha text={captcha} />}
          <TextField
            value={captchaText}
            onChange={(e) => setCaptchaText(e.target.value)}
          />
          <Button onClick={() => handleAddComment(captchaText)}>Submit</Button>
        </Box>
      </Modal>
    </Box>
  );
});

AddComment.displayName = 'AddComment';

export default AddComment;
