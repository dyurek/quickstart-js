import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import FIREBASE_LOGO from '../assets/firebase-logo.png';

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar style={{ width: 1024, margin: '0 auto' }}>
        <img src={FIREBASE_LOGO} />
        <Typography variant="h6" color="inherit">
          Firebase Cloud Messaging
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
