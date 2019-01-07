import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import image from '../../assets/img/headshot2.jpg';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
      margin: '0 auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

    const tileData = [
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'Placeholder',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
          img: image,
          title: 'Placeholder',
          author: 'author',
      },
    ];


class TitlebarGridList extends Component {
  constructor() {
    super();
    this.PHI = (1 + Math.sqrt(5)) / 2;
  }

  render() {
    const { classes } = this.props;
    console.log('resize', this.props.windowDims)
    return (
      
      <div 
       className={classes.root}>
        Under construction...
      </div>

    );
  }
}
  
  TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TitlebarGridList);