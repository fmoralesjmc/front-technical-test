import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '10px',
  color: theme.palette.primary.light, 
}));