import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle} from '@fortawesome/fontawesome-free-solid'


const SliderItem = (props) => {
    const {id, poster_path, title,name, release_date, vote_average, vote_count, overview} = props.movie;
return (
<>
    <div className="slider-item">
        <div className="item-poster">
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""/> 
        </div>
        <div className="item-infos">
            <div className="flex-box">
                <h3 className="item-title">{title ? title : name}</h3>
                <h4 className="item-relase">{release_date}</h4>
            </div>
            <div className="flex-box-second">
                <div className="stars-rating">
                    <h4><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span></h4>
                </div>
                <h4 className='second'> Głosów: {vote_count}</h4>
                {/* <h4 className='second'>Ocena: {vote_average}</h4> */}
            </div>
            <h4 className="item-desc">{overview}</h4>
            <div className="watch-trailer">
                <h4 className="watch">Zobacz Trailer</h4>
                <Link to={title ? `/Film/${id}` : `/Serial/${id}`} className="link">
                    <button className="btn btn-secondary"> <FontAwesomeIcon icon={faPlayCircle} size="2x"/>
                    Zobacz Video</button>
                </Link>
            </div>
        </div>
    </div>
</>
);
}

export default SliderItem;