import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRequests } from './actions';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import MaterialTable from '../common/MaterialTable';
import { Link } from 'react-router';

const paperStyle = {
  margin: '20px'
}

class ListPage extends Component {
  static propTypes = {
    requests: PropTypes.array.isRequired,
    loadRequests: PropTypes.func.isRequired,
    sort: PropTypes.string
  }

  static defaultProps = {
    sort: 'name'
  }

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.loadRequests('name');
  }

  render() {
    return (
      <Paper style={paperStyle}>
        <MaterialTable title="Requests" headers={['Id', 'Name']}>
          {this.props.requests.map(request => (
            <TableRow>
              <TableRowColumn>
                <Link to={`/requests/${request._key}`}>{request._key}</Link>
              </TableRowColumn>
              <TableRowColumn>{request.name}</TableRowColumn>
            </TableRow>
          ))}
        </MaterialTable>
      </Paper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const requests = state.entities.requests;
  const sort = state.requests.pages.currentKey;
  const pages = state.requests.pages[sort] || { ids: []};

  return {
    requests: pages.ids.map(id => requests[id])
  }
}

export default connect(mapStateToProps, {
  loadRequests
})(ListPage);
