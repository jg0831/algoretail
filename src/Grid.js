import React , {useContext} from "react";
import DataGrid, { Column, MasterDetail } from "devextreme-react/data-grid";
import DetailTemplate from "./DetailTemplate.js";
import {AppContext} from './Context'


const Grid = () =>{
 const {getMovies} = useContext(AppContext);

    return (
      <React.Fragment>
        <DataGrid
          id="grid-container"
          dataSource={getMovies()}
          showBorders={true}
        >
          <Column dataField="title" caption="Title" width={125} />
          <Column dataField="availableTickets" width={125} />
          <Column dataField="genre" width={125} />
          <Column dataField="releaseDate" width={125} />
          <MasterDetail
            enabled={true}
            component={DetailTemplate}
          />
        </DataGrid>
        </React.Fragment>
    );
  
}

export default Grid;