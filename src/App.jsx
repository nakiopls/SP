import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles'
import menuRoutes from './menuRoutes'
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import { Route, Link } from 'react-router-dom'


class App extends Component {
  state = {
    open: false,
    checked: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes, theme } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              IBM SmartParking
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {menuRoutes.main.map((R, index) => (
              <Link to={R.route} style={{ textDecoration: 'none' }}>
                <ListItem button key={R.label}>
                  <ListItemIcon><R.icon></R.icon></ListItemIcon>
                  <ListItemText primary={R.label} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {menuRoutes.login.map((R, index) => (
              <ListItem button key={R.label}>
                <ListItemIcon><R.icon></R.icon></ListItemIcon>
                <ListItemText primary={R.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {menuRoutes.main.map((R, index) => (
            <Route exact path={R.route} component={() => styledPaper(R.component, classes)} />
          ))}
        </main>
      </div>
    );
  }
}

const styledPaper = (Component, styles) => {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper className={styles.paper} elevation={1}>
        <Component />
      </Paper>
    </Slide>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
