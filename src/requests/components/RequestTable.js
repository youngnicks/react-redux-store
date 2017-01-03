import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRequests } from '../../store/actions';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import List from 'react-list';

const loadData = ({ loadRequests }) => {
  loadRequests();
}

class RequestTable extends Component {
  static propTypes = {
    pagination: PropTypes.object,
    requests: PropTypes.array.isRequired,
    loadRequests: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // Refresh logic goes here
  }

  handleLoadMoreClick = () => {
    this.props.loadRequests(true);
  }

  renderRequestRow = (index, key) => {
    const request = this.props.requests[index];
    return (
      <TableRow key={key}>
        <TableRowColumn>{request._key}</TableRowColumn>
        <TableRowColumn>{request.name}</TableRowColumn>
      </TableRow>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLoadMoreClick}>Next Page</button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <List itemRenderer={this.renderRequestRow}
                  length={this.props.requests.length}
                  type='uniform' />
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const requestList = state.pagination.requests.all || { ids: [] };
  const requests = state.entities.requests;

  return {
    requests: requestList.ids.map(id => requests[id])
  }
}

export default connect(mapStateToProps, {
  loadRequests
})(RequestTable);
