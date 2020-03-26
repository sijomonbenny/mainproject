import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Offence Information
      </Typography>
          <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="place" label="Offence" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="date"
            label="Nature of the offence"
            helperText="e.g. murder, theft, rape, etc."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="date"
            label="Section"
            helperText="To be decided/written by Office only"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="date"
            label="Particulars of the property"
            helperText="in case one has got stolen"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="time"
            label="Description of the accused"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="time"
            label="Details of witnesses (if any)"
            helperText="If any"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
