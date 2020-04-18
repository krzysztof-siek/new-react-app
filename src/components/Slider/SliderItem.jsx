import React from 'react';
import {Link} from "react-router-dom";

const SliderItem = (props) => {
    const {poster_path, title, release_date, vote_average, vote_count, overview} = props.el;
return (
<>
<Link to={`/Film/${props.el.id}`}>
    <div className="slider-item">
        <div className="item-poster">
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""/> 
        </div>
        <div className="item-infos">
            <div className="flex-box">
            <h3 className="item-title">{title}</h3>
            <h4>{release_date}</h4>
            </div>
            <div className="flex-box">
            <h4><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span></h4>
            <h4>{vote_average}</h4>
            <h4>{vote_count}</h4>
            </div>
            <h4 className="item-desc">{overview}</h4>

        </div>
    </div>
</Link>
</>
);
}

export default SliderItem;