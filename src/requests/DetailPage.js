import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRequest } from './actions';

const loadData = ({ loadRequest, routeParams }) => {
  loadRequest(routeParams.id);
}

class DetailPage extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
    loadRequest: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    return (
      <div>
        <div>{this.props.request._key}</div>
        <div>{this.props.request.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownprops', ownProps);
  return {
    request: state.entities.requests[ownProps.routeParams.id] || {}
  }
};

export default connect(mapStateToProps, {
  loadRequest
})(DetailPage);
