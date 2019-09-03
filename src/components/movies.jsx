import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = { 
    movies: getMovies(),
    pageSize: 10
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
  }

  handlePageChange = page => {
    console.log(page);
  }

  render() {
    const {length: count} = this.state.movies;

    if (count === 0)
      return <p>There are no movies in the database</p>

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
            {this.state.movies.map(movie => (
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
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
 
export default Movies; 