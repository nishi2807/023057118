import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

// Styles for components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const AddEducation = ({ onAddEducation }) => {
  const classes = useStyles();

  // State for education details
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEducation({ school, degree, startDate, endDate });
    setSchool('');
    setDegree('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Education
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="School"
              variant="outlined"
              fullWidth
              value={school}
              onChange={(event) => setSchool(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Degree"
              variant="outlined"
              fullWidth
              value={degree}
              onChange={(event) => setDegree(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Start Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="End Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddEducation;