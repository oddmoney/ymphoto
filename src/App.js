import React, { Component } from 'react';
import './App.css';
import TourList from './TourList';
class App extends Component {
  state = {
  }
  componentDidMount() {
    this._callPhotoApi();
  }
  _renderPhotos = () => {
    const photos = this.state.photos.map(photo => {
      return <TourList 
        title={photo.TRIP_TITLE} 
        //photo={"http://localhost:8080" + photo.TH_FILE_PATH_REAL_URL}
        photo={"https://cdn.pixabay.com/photo/2015/03/12/04/43/landscape-669619_960_720.jpg"}
        addr={photo.TRIP_ADDR_CITY_NM}
        tagstr={photo.TRIP_TAG}
        contents={photo.TRIP_CONTENTS}
        key={photo.TRIP_SEQ}
        />
    })
    return photos
  }
  // async 비동기
  _callPhotoApi = async () => {
    const photos = await this._callApi();
    this.setState({
      photos
    });    
  }
  _callApi = () => {
    //return fetch("http://oddmoney.iptime.org:3588/rest/photoList.do", {
    return fetch("http://localhost:8080/rest/photoList.do", {
        credentials: 'include',  
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json'
        },      
        body: {
         "currentSn": "1",
         "numPerPage": "10"
        }
       })
       .then(response => response.json())
       //.then(json => console.log(json.resList))
       .then(json => json.resList)
       .catch(err => console.log(err))
  }
  render() {
    const { photos } = this.state;
    return (
      <div className={photos ? "App" : "App-loading"}>
        {photos ? this._renderPhotos() : 'Loading'}
      </div>
    );
  }
}
export default App;
