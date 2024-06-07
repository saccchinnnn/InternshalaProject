import React from 'react';
import { TextField, Container } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Container>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;