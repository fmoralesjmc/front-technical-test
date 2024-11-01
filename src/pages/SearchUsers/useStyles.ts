import { styled } from '@mui/material/styles';
import { AppBar, Box, TextField, IconButton } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent', 
  padding: '10px',
  boxShadow: 'none', 
});

export const ColumnContainer = styled(Box)({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#B0B0B0', 
    },
    '&:hover fieldset': {
      borderColor: '#FFFFFF', 
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFFFFF', 
    },
  },
  '& .MuiInputLabel-root': {
    color: '#B0B0B0', 
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF', 
  },
});

export const StyledIconButton = styled(IconButton)({
  color: '#B0B0B0', 
  '&:hover': {
    color: '#FFFFFF', 
  },
});