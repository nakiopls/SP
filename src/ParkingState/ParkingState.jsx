import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Park from '../Park/Park'
import Grid from "@material-ui/core/Grid";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class ParkingState extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const List1 = Array.from(Array(10).keys()).map((e) => { return ({ 
      parkNumber: 101 + e, 
      occupied: Math.random() > 0.5,
      ocupationRate: Math.random(),
    }) })

    const List2 = Array.from(Array(10).keys()).map((e) => { return ({ 
      parkNumber: 201 + e, 
      occupied: Math.random() > 0.5,
      ocupationRate: Math.random(),
    })})

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" style={{
            background: '#691ECA',
          }}>
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="PISO -1" href="page2" />
              <LinkTab label="PISO -2" href="page3" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <Grid container spacing={24}>
              {
                List1.map((p) => (
                  <Grid item md={3}>
                    <Park dataPark={p} />
                  </Grid>)
                )
              }
            </Grid>
          </TabContainer>}
          {value === 1 && <TabContainer>
            <Grid container spacing={24}>
              {
                List2.map((p) => (
                  <Grid item md={3}>
                    <Park dataPark={p} />
                  </Grid>)
                )
              }
            </Grid></TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

ParkingState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingState);