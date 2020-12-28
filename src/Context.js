import React, { createContext, useState } from "react";
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import notify from "devextreme/ui/notify";
import { orders } from "./data";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [state, setState] = useState({
    movies: [
      {
        ID: 1,
        title: "Spiderman",
        genre: "Action",
        releaseDate: "01/01/2020",
        totalTickets: 100,
        availableTickets: 94,
      },
      {
        ID: 2,
        title: "Superman",
        genre: "Action",
        releaseDate: "01/01/2020",
        totalTickets: 100,
        availableTickets: 98,
      },
      {
        ID: 3,
        title: "Wonder Woman",
        genre: "Action",
        releaseDate: "01/01/2020",
        totalTickets: 100,
        availableTickets: 100,
      },
    ],
    orders: [
      {
        ID: 1,
        name: "John",
        tickets: 4,
      },
      {
        ID: 1,
        name: "Mike",
        tickets: 2,
      },
      {
        ID: 2,
        name: "Abraham",
        tickets: 2,
      },
    ],
    newOrder: {
      name: "",
      movie: "",
      tickets: 0,
    },
  });

  const movieOptions = () => {
    return state.movies.map((movie) => {
      return movie.title;
    });
  };
  const findIndex = (order) => {
    const index = state.movies.findIndex((movie) => {
      return movie.title === order.movie;
    });
    return index;
  };

  const getOrders = (key) => {
    return new DataSource({
      store: new ArrayStore({
        data: state.orders,
        key: "ID",
      }),
      filter: ["ID", "=", key],
    });
  };

  const getMovies = () => {
    return new DataSource({
      store: new ArrayStore({
        data: state.movies,
        key: "ID",
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = findIndex(state.newOrder);
    if (state.movies[index].availableTickets - state.newOrder.tickets >= 0) {
      const newMovies = state.movies;
      newMovies[index].availableTickets -= state.newOrder.tickets;
      const newOrders = state.orders;
      const newOrder = state.newOrder;

      newOrders.push({ ...newOrder, ID: state.movies[index].ID });
      notify(
        {
          message: "Your Tickets have been ordered",
          position: {
            my: "center top",
            at: "center top",
          },
        },
        "success",
        3000
      );
      setState({
        movies: newMovies,
        orders: newOrders,
        newOrder: {
          name: "",
          movie: "",
          tickets: 0,
        },
      });
    } else {
      notify(
        {
          message: "Not enough tickets available",
          position: {
            my: "center top",
            at: "center top",
          },
        },
        "warning",
        3000
      );
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, getOrders, getMovies, handleSubmit, movieOptions }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
