import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse, Badge } from '@mui/material';
import { red } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupIcon from '@mui/icons-material/Group';
import { StyledAppBar, StyledIconButton, StyledInputLabel, StyledOutlinedInput, StyledFormControl, StyledCardContainer, StyledBadgeContainer, StyledCardContent, StyledPagination } from './useStyles';
import { searchGithubUsers, getFollowersCount } from '@services/githubApi';
import LoadingIndicator from '@components/LoadingIndicator';

function SearchUsers() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('franciscom');
  const [query, setQuery] = useState<string | null>('franciscom');
  const [data, setData] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [expanded, setExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      fetchData(query, currentPage);
    }
  }, [query, currentPage]);

  const fetchData = async (searchQuery: string, page: number) => {
    setLoading(true);
    try {
      const result = await searchGithubUsers(searchQuery, "desc", 30, page);
      const usersWithFollowers = await Promise.all(
        result.items.map(async (user: any) => {
          const followersCount = await getFollowersCount(user.followers_url);
          return { ...user, followersCount };
        })
      );
      setData(usersWithFollowers);
      setTotalCount(result.total_count);
      setTotalPages(Math.ceil(result.total_count / 30));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchValue.length < 5) {
      setErrorMessage('Please enter at least 5 characters.');
      return;
    }
    setErrorMessage(null);
    setQuery(searchValue);
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* Barra de búsqueda flotante con fondo gris */}
      <StyledAppBar>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <StyledIconButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </StyledIconButton>
          <StyledFormControl variant="outlined" sx={{ flexGrow: 0, marginLeft: 2, maxWidth: '400px', width: '100%' }}>
            <StyledInputLabel htmlFor="search-input">Search User</StyledInputLabel>
            <StyledOutlinedInput
              id="search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              endAdornment={
                <IconButton aria-label="Search User" onClick={handleSearch} edge="end">
                  <SearchIcon />
                </IconButton>
              }
              label="Search User"
            />
          </StyledFormControl>
        </Box>
        {errorMessage && (
          <Typography color="error" sx={{ marginTop: 1 }}>
            {errorMessage}
          </Typography>
        )}
      </StyledAppBar>

      {/* Contenedor de cards con scroll */}
      <StyledCardContainer>
        {loading && <LoadingIndicator color="#000" size="small" />}
        {data.length > 0 && !loading && (
          <>
            {data.map((user: any) => (
              <Card key={user.id} sx={{ maxWidth: 250, minWidth: 250, margin: 2 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="usuario">
                      {user.login.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={user.login}
                  subheader="GitHub User"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={user.avatar_url}
                  alt={`Avatar de ${user.login}`}
                />
                <StyledCardContent>
                  <Typography variant="body2" color="text.secondary">
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile on GitHub</a>
                  </Typography>
                </StyledCardContent>
                <CardActions disableSpacing>
                  <StyledBadgeContainer>
                    <Badge badgeContent={user.followersCount} color="primary">
                    Followers:&nbsp;&nbsp;  <GroupIcon />
                    </Badge>
                  </StyledBadgeContainer>
                </CardActions>
              </Card>
            ))}
          </>
        )}
        {!loading && data.length === 0 && <p>No se encontraron resultados.</p>}
      </StyledCardContainer>

      {/* Paginación */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        <StyledPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
}

export default SearchUsers;