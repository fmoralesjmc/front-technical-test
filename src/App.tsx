import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchUsers from './pages/SearchUsers/SearchUsers';
import SearchRepos from './pages/SearchRepos/SearchRepos';
import theme from './styles/theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-users" element={<SearchUsers />} />
        <Route path="/search-repos" element={<SearchRepos />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;