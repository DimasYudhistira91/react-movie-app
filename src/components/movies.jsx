import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = { 
    movies: getMovies(),
    currentPage: 1,
    pageSize: 3
   };
  
  handleDelete = (moviedlt) => {
    const movies = this.state.movies.filter(allmovie => allmovie._id !== moviedlt._id);
    this.setState({movies})
  };

  handleLike = (movielk) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movielk);
    // movies[index] = {...movies[index]}; // optional
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th/>
              <th/>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>{<Like liked={movie.liked} onClick={() => this.handleLike(movie)} />}</td>
              <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
 
export default Movies; 