import React, { useState, useEffect } from 'react';
import RequestCourses from '../RequestCourses/RequestCourses';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import SearchBar from '../../SearchBar';

function Requested() {
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleSearch = () => {};
  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
            Requested
          </Typography>
          <SearchBar />

          <RequestCourses />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Requested;
