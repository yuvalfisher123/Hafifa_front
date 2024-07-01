import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker
} from '@material-ui/pickers';
import { useStyles } from './AdvancedSearchStyle';


export default () => {
    const classes = useStyles();

  const [startDate, setStartDate] = React.useState<Date | null>(
    null
  );

  const [endDate, setEndDate] = React.useState<Date | null>(
    null
  );

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };
  
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <form >
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
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
    </MuiPickersUtilsProvider>
    </form>
  );
}
