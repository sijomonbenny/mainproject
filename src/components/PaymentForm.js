import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Occurance Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="place" label="Place of Occurance" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="distpoli" label="Distance from the police station" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="dirpol" label="Direction from the police station" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="date"
            label="Date"
            helperText="Date (DD-MM-YYYY)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="time"
            label="Time"
            helperText="Time (HH:MM:SS)"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
