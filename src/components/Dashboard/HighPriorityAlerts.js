import React from 'react';
import AlertCard from './AlertCard';
import Grid from '@mui/material/Grid';

const alerts = [
  {
    title: 'Driver Raised Concern',
    subtitle: 'Load No : 12454, Bill To: RoaDo demo Bangalore',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '13 Feb 24',
  },
  {
    title: 'Reefer Temp. out of range',
    subtitle: 'Load No: 12454, Bill To: RoaDo demo Bangalore',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '13 Feb 24',
  },
];

const HighPriorityAlerts = () => (
  <Grid container spacing={3}>
    {alerts.map((alert, index) => (
      <Grid item xs={12} sm={8} md={4} lg={4} key={index}>
      <AlertCard
          title={alert.title}
          subtitle={alert.subtitle}
          description={alert.description}
          date={alert.date}
        />
      </Grid>
    ))}
  </Grid>
);

export default HighPriorityAlerts;