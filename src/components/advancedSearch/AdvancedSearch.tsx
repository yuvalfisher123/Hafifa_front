import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker
} from '@material-ui/pickers';
import { useStyles } from './AdvancedSearchStyle';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Alert from '@material-ui/lab/Alert';


export default () => {
    const classes = useStyles();

  const [startDate, setStartDate] = React.useState<Date | null>(
    new Date()
  );

  const [endDate, setEndDate] = React.useState<Date | null>(
    new Date()
  );

  const [validtaionError, setValidtaionError] = React.useState<string | undefined>(
    ''
  );

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };
  
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleValidationErrorChange = (error: string | undefined) => {
    setValidtaionError(error);
  };

  const validateForm = () => {
    if (startDate && endDate) {
      return startDate < endDate ? '' : 'start date must be before end date';
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const error = validateForm();

    handleValidationErrorChange(error);

    if (!error) {
      console.log("success");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container spacing={3} direction='row-reverse'>
        <Grid item xs={12}>
        <DateTimePicker
            className={classes.datePicker}
            margin='normal'
            id="start-date"
            label="Start Date"
            format="dd/MM/yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            InputProps={{
                disableUnderline: true,
            }}
            disableFuture            
        />
        <DateTimePicker
            className={classes.datePicker}
            margin='normal'
            id="end-date"
            label="End Date"
            format="dd/MM/yyyy"
            value={endDate}
            onChange={handleEndDateChange}
            InputProps={{
                disableUnderline: true,
               }}
            disableFuture
        />
        </Grid>

        <Grid item xs={4}>
        <Button
        className={classes.button}
          variant="contained"
          color="secondary"
          endIcon={<SearchIcon/>}
          type='submit'>
           Search
        </Button>
        </Grid>

        <Grid item xs={4}>
          { validtaionError &&
        <Alert variant="filled" severity="error">{validtaionError}</Alert>
          }
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
    </form>
  );
}
