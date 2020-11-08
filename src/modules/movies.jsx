import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';


class Movies extends Component{
  state = {
    movies: getMovies()
  }

  handleDelete = movie =>{
    let movies = this.state.movies.filter(m=> m._id !== movie)
    this.setState({movies})
  }

  render(){
    return(
    <div>
      <main className="container">
          {this.movieList()}
      </main>
    </div>
    )
  }

  movieList(){
    const {length : count} =  this.state.movies;
    if(count === 0) return 'No Movies Available';
    return <div className='row'>
        Showing {count} movies in the database.
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button onClick={()=>{this.handleDelete(movie._id)}} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>)}
              
            </tbody>
        </table>
        </div>
        
  }
}

export default Movies;
