import React, { useState, useEffect } from 'react';
import AvailableCourses from '../AvailableCourses/AvailableCourses';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import SearchBar from '../../SearchBar';
// import SearchBar from "@mkyy/mui-search-bar";

function Available() {
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleSearch = () => {};
  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
            Available
          </Typography>
          <SearchBar />

          <AvailableCourses />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Available;
