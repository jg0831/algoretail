import React from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import { AppContext } from "./Context";

class DetailTemplate extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.key = props.data.key;
  }
  onRowRemoved(){
      console.log()
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <DataGrid
            dataSource={this.context.getOrders(this.key)}
            showBorders={true}
            columnAutoWidth={true}
            onRowRemoving={this.onRowRemoving}
            onRowRemoved={this.onRowRemoved}

          >
            <Editing  mode="row" allowDeleting={true}  />
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
