import React from 'react';
import '../assets/styles/components/CarrouselItem.css';
import {setFavorite, deleteFavorite} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png'
import deleteIcon from '../assets/static/remove-icon.webp'


const CarouselItem = (props) => {
  
  const { id, cover, title, year, contentRating, duration, isList} = props

  const handleSetFavorite = () =>{

    props.setFavorite({
        id ,cover, title, year, contentRating, duration
    })
  }

  const handleDeleteFavorite = (itemId) => {

    props.deleteFavorite(itemId)
  }

  return(
    
    <div className="carousel-item">
      <img className="carousel-item__img" src= {cover} alt= {title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img className="carousel-item__details--img" src= {playIcon} alt="Play Icon" />
          </Link>

        {isList ? 
          <img 
            className="carousel-item__details--img" 
            src= {deleteIcon} 
            alt="Plus Icon" 
            onClick={() => handleDeleteFavorite(id)}
          /> :

          <img 
            className="carousel-item__details--img" 
            src= {plusIcon} 
            alt="Plus Icon" 
            onClick={handleSetFavorite}
          />
        }
                  
        </div>
        <p className="carousel-item__details--title"> {title} </p>
        <p className="carousel-item__details--subtitle"> {`${year} ${contentRating} ${duration}`} </p>
      </div>
    </div>

)};


CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

const mapDispatchToProps =  {
  setFavorite,
  deleteFavorite
}


export default connect(null, mapDispatchToProps )(CarouselItem)

