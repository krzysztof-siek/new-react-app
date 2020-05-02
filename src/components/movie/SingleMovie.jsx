import React from 'react';

const SingleMovie = (props) => {
    const {title, poster_path, vote_count, vote_average} = props.movie;
    
    return ( 
        <div className="singleMovie">
            <div className="poster-img">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster"/> 
            </div>
            <h3 className="title">{title}</h3>
            <div className="flex">
                <div className="stars-rating">
                    <h4><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span></h4>
                </div>
                <h4 className='second'>{vote_count}</h4>
                <h4 className='second'>Ocena: {vote_average}</h4>
            </div>
        </div>
     );
}
 
export default SingleMovie;
