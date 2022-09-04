import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Review({drink, name, email}) {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">{drink}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{email}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
