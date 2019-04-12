import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './TourList.css';
class TourList extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }
    render() {
        return(
            <div className="TourList">
            <div className="TourList_Column">
                <TourPhoto title={this.props.title} photo={this.props.photo}/>
            </div>
            <div className="TourList_Column">
                <h1>{this.props.title}</h1>
                <div className="TourList_Genres">
                    {this.props.genres.map((genre, index) => <span className="TourList_Genre" key={index}>{genre} </span>)}
                </div>
                <p className="TourList_Synopsis">
                <LinesEllipsis text={this.props.synopsis} maxLine='3' ellipsis=' ...' trimRight basedOn='letters'/>
                </p>
            </div>
        </div>
        );
    }
}
function TourPhoto({title, photo}) {
    return (
        <img src={photo} alt={title} className="TourList_Photo"/>
    )
}
TourPhoto.propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
}
export default TourList;