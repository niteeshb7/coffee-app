import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function YourDetails({name, setName, email, setEmail}) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required label="Name" fullWidth autoComplete="name"
            variant="standard" value={name}
            onChange={event => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="Email"
            fullWidth autoComplete="email" value = {email}
            onChange={event => setEmail(event.target.value)}
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
