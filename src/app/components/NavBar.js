import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const NavBar = ({title}) => (
  <MuiThemeProvider>
    <AppBar
        title={title}
    />
  </MuiThemeProvider>
);

NavBar.propTypes = {
    title: PropTypes.string.isRequired
};

export default NavBar