import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Indicator from './Indicator';
import About from './About'
import Projects from './Projects'

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ color: 'white', padding: 8 * 4 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    overflowY: 'scroll',
    width: '100%',
    height: '100%',
  },
  tabsIndicator: {
    background: 'transparent',
  }
});




class FullWidthTabs extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { props, state } = this;
    return (
      <div className='back'>
        <AppBar position="static" color="default">
          <Tabs value={state.value} onChange={this.handleChange} classes={{indicator:props.classes.tabsIndicator}} fullWidth>
            <Tab label="About" />
            <Tab label="Writing" />
            <Tab label="Projects" />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={props.theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={state.value} onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={props.theme.direction}>
            <About flipCard={props.flipCard} flipBtn={props.flipBtn} />
          </TabContainer>

          <TabContainer dir={props.theme.direction}>
            <h2>Writing</h2>
            <p>
                We're under construction here, please check back soon...
            </p>
          </TabContainer>

          <TabContainer dir={props.theme.direction}>
            <Projects />
          </TabContainer>
        </SwipeableViews>
        
        <Indicator flipBtn={props.flipBtn} className='indicator' tabNum={3} focus={state.value} /> 
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs);