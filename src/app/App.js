import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from './actions';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  static propTypes = {
    drawerOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <AppBar title="Demo Store"
                onLeftIconButtonTouchTap={this.props.toggleDrawer} />

        <Drawer role="navigation"
                docked={false}
                onRequestChange={this.props.toggleDrawer}
                open={this.props.drawerOpen}>
          <Menu>
            <MenuItem onTouchTap={this.props.toggleDrawer}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.props.toggleDrawer}>
              <Link to="/requests">Requests</Link>
            </MenuItem>
          </Menu>
        </Drawer>

        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.app.drawerOpen
  }
}

export default connect(mapStateToProps, {
  toggleDrawer
})(App);
