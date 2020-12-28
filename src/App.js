import React from "react";
import OrderForm from "./OrderForm";
import Grid from "./Grid"
import "./App.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import AppContextProvider from './Context'


const App = () =>{
    return (
      <React.Fragment>
      <AppContextProvider>
        <OrderForm />
      <Grid />
        </AppContextProvider>
        </React.Fragment>
    );
  
}

export default App;
