import React, { PropTypes } from 'react';
import { Table, TableRow, TableHeader, TableHeaderColumn, TableBody }
  from 'material-ui/Table';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

const MaterialTable = props => (
  <div>
    <Toolbar>
      <ToolbarTitle text={props.title} />
    </Toolbar>

    <Table>
      <TableHeader>
        <TableRow>
          {props.headers.map(header => (
            <TableHeaderColumn>{header}</TableHeaderColumn>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.children}
      </TableBody>
    </Table>
  </div>
);

MaterialTable.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array.isRequired
}

export default MaterialTable;
