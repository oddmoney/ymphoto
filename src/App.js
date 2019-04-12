import React, { Component } from 'react';
import './App.css';
import TourList from './TourList';
class App extends Component {
  state = {
  }
  componentDidMount() {
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <TourList 
        title={movie.title_english} 
        photo={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
        />
    })
    return movies
  }
  // async 비동기
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
export default App;
