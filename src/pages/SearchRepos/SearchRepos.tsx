import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledIconButton } from './useStyles'; 

function SearchRepos() {
  const navigate = useNavigate(); 

  return (
    <div>
      <StyledIconButton onClick={() => navigate('/')}>
        <ArrowBackIcon />
      </StyledIconButton>
      <h1>Página de búsqueda de repositorios</h1>
    </div>
  );
}

export default SearchRepos;