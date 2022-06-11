import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = { 
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
   } 

  handleDelete = movie => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({movies});
  }

  handleLike = (movie) => {
    // Don't change the state directly, make a copy of the movie and change the state
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  }

  handlePageChange = (page) => {
    this.setState({currentPage : page});
  }

  render() { 
    const {length : count } = this.state.movies;
    const {pageSize, currentPage} = this.state;

    if(count === 0) return <p>There are no movies in the database</p>

    return (
      <>
        <h4>Showing {count} movies in the database.</h4>
        
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map( movie => 
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination 
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
        </>
    );
  }
}
 
export default Movies;

