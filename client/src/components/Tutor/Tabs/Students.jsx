import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import SearchBar from '../../SearchBar';
import StudentsList from '../../StudentsList';

function Students() {
  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
            Students
          </Typography>
          <SearchBar />
          <StudentsList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Students;
