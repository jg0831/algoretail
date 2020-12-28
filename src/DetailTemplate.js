import React from "react";
import { DataGrid, Column } from "devextreme-react/data-grid";
import {AppContext} from './Context'

class DetailTemplate extends React.Component {
static contextType = AppContext;
  constructor(props) {
    super(props);
    this.key = props.data.key
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <DataGrid
            dataSource={this.context.getOrders(this.key)}
            showBorders={true}
            columnAutoWidth={true}
          >
            <Column dataField="name" />
            <Column dataField="tickets" />
          </DataGrid>
        </React.Fragment>
      </div>
    );
  } 
}

export const addOrder = (key) => {};

export default DetailTemplate;
