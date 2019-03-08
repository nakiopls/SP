import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from "@material-ui/core/Grid";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import classNames from 'classnames';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  appBar: {
    position: 'relative',
    background: '#691ECA',
  },
  flex: {
    flex: 1,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  greenButton: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  redButton: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Park extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { parkNumber, occupied, ocupationRate } = this.props.dataPark;

    console.log(this.props)
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {parkNumber}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Tasa de ocupación: {Math.round(ocupationRate*1000)/1000}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classNames(classes.margin, occupied ? classes.redButton : classes.greenButton)}>
            {occupied ? 'Ocupado' : 'Disponible'}
          </Button>
          <Button size="small" color='secondary' variant='outlined' onClick={this.handleClickOpen}>Ver más</Button>

          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                  Estacionamiento {parkNumber}
                </Typography>
                <Button color="inherit" onClick={this.handleClose}>
                  save
              </Button>
              </Toolbar>
            </AppBar>
            <Grid container spacing={24}>
              <Grid item md={4}>
                <List>
                  <ListItem button>
                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={2}>
                asdsadasd
              </Grid>
            </Grid>

          </Dialog>
        </CardActions>
      </Card>
    );
  }
}

Park.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Park);