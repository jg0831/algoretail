import React, { useContext } from "react";
import { AppContext } from "./Context";
import Form, {
  ButtonItem,
  SimpleItem,
  GroupItem,
  RequiredRule,
} from "devextreme-react/form";
import "devextreme-react/text-area";

const OrderForm = () => {
  const { movieOptions, newOrder, handleSubmit } = useContext(AppContext);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Form formData={newOrder} width={300}>
          <GroupItem>
            <SimpleItem
              dataField="movie"
              editorType="dxSelectBox"
              editorOptions={{ items: movieOptions() }}
            >
              <RequiredRule message="Please select a movie" />
            </SimpleItem>
            <SimpleItem dataField="tickets">
              <RequiredRule message="Please enter amount of tickets" />
            </SimpleItem>

            <SimpleItem dataField="name">
              <RequiredRule message="Please enter your name" />
            </SimpleItem>
          </GroupItem>
          <ButtonItem
            buttonOptions={{
              text: "Order Tickets",
              type: "success",
              useSubmitBehavior: true,
            }}
          />
        </Form>
      </form>
    </React.Fragment>
  );
};

export default OrderForm;
