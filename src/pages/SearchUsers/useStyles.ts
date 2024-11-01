import { styled } from '@mui/material/styles';
import { AppBar, Box, IconButton, FormControl, OutlinedInput, InputLabel, Card, CardMedia, CardContent, Pagination } from '@mui/material';

export const ColumnContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const MainContainer = styled(Box)(({ theme }) => ({
  marginTop: '120px',
  padding: theme.spacing(2),
  overflowY: 'auto',
  height: 'calc(100vh - 120px)', 
}));

export const CardContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
});

export const StyledCard = styled(Card)({
  width: 300,
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#2C2C2C', 
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const StyledFormControl = styled(FormControl)({
  width: '50%',
});

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: '#3A3A3A', 
  color: 'white',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  input: {
    color: 'white',
  },
}));

export const StyledInputLabel = styled(InputLabel)({
  color: 'white',
  '&.Mui-focused': {
    color: 'white',
  },
});

export const StyledIconButton = styled(IconButton)({
  background: 'white!important',
});

export const StyledSearchIconButton = styled(IconButton)({
  color: 'white', 
});

export const StyledCardMedia = styled(CardMedia)({
  borderRadius: '50%', 
  width: '140px', 
  height: '140px', 
  objectFit: 'cover', 
  margin: '0 auto', 
});

export const StyledCardContainer = styled(Box)({
  marginTop: '100px',
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 200px)', 
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  
});

export const StyledBadgeContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '8px', 
});

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center', 
});

export const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: 'white', 
  },
});
