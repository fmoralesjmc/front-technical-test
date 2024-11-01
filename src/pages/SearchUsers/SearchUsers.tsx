import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Toolbar, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledAppBar, ColumnContainer, StyledIconButton } from './useStyles'; 
import useGithubUsers from '@hooks/useGithubUsers';
import LoadingIndicator from '@components/LoadingIndicator';

function SearchUsers() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('luuna-tech'); 
  const [query, setQuery] = useState<string | null>(null);
  const { data, loading, error } = useGithubUsers(query!);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (loading) {
      setShowLoading(true);
      timeout = setTimeout(() => {
        setShowLoading(false);
      }, 2000); 
    } else {
      timeout = setTimeout(() => {
        setShowLoading(false);
      }, 2000);
    }

    return () => clearTimeout(timeout); 
  }, [loading]);

  useEffect(() => {
    if (query === null) {
      setQuery('luuna-tech');
    }
  }, [query]);

  const handleSearch = () => {
    setQuery(searchValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <ColumnContainer>
            <Box sx={{ flex: 1 }}>
              <StyledIconButton onClick={() => navigate('/')}>
                <ArrowBackIcon />
              </StyledIconButton>
            </Box>

            <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="search-input">Buscar usuario</InputLabel>
                <OutlinedInput
                  id="search-input"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyPress={handleKeyPress} 
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="buscar usuario"
                        onClick={handleSearch}
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Buscar usuario"
                />
              </FormControl>
            </Box>

            <Box sx={{ flex: 1 }}></Box>
          </ColumnContainer>
        </Toolbar>
      </StyledAppBar>

      <div style={{ marginTop: '80px' }}>
        {showLoading && <LoadingIndicator color="#000" size="small" />} 
        {error && <p>Error al cargar datos: {error.message}</p>}
        {data && !loading && !showLoading && (
          <ul>
            {data.items.map((user: any) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchUsers;