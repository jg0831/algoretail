// import ArrayStore from "devextreme/data/array_store";
// import DataSource from "devextreme/data/data_source";

// export const getMovieOptions = (movies) => {
//   return movies.map((movie) => {
//     return movie.title;
//   });
// };

// export const loadMovies = () => {
//   movies.load().then((data) => {
//     console.log(data)
//     return data;
//   });
// };



// export const movies = new DataSource({
//   store:{
//     type:'array',
//     data: [
//       {
//         ID: 1,
//         title: "Spiderman",
//         genre: "Action",
//         releaseDate: "01/01/2020",
//         totalTickets: 100,
//         availableTickets: 94,
//       },
//       {
//         ID: 2,
//         title: "Superman",
//         genre: "Action",
//         releaseDate: "01/01/2020",
//         totalTickets: 100,
//         availableTickets: 98,
//       },
//     ],
//     key: "ID",
//   }
// });
// export const orders = new DataSource({
//   store: new ArrayStore({
//     data: [
//       {
//         ID: 1,
//         name: "John",
//         tickets: 4,
//       },
//       {
//         ID: 1,
//         name: "Mike",
//         tickets: 2,
//       },
//       {
//         ID: 2,
//         name: "Abraham",
//         tickets: 2,
//       },
//     ],
//     key: "ID",
//   }),
// });

// export const loadOrders = () => {
//   movies.load().then((data) => {
//     console.log(data)
//     return data;
//   });
// };   
let movies = [
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
]


const getId = (order) =>{
  movies.forEach( movie => {
      console.log(movie.title, order.movie)
    if (movie.title === order.movie){
      order.ID = movie.ID;
        console.log(order) ;    }

  })
}


let order1 = {
  name: "Josh",
  movie: "Spiderman",
  tickets: 4,
}


getId(order1);