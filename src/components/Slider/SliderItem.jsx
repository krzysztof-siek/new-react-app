import React from 'react';
import {Link} from "react-router-dom";

const SliderItem = (props) => {
    console.log(props.el)
return (
<>
<Link to={`/Film/${props.el.id}`}>
    <div className="slider-item">
        <div className="item-poster">
            <img src={`https://image.tmdb.org/t/p/original${props.el.poster_path}`} alt=""/>
            {/* <img src="https://api.themoviedb.org/3/discover/b4thKm1P0F1SYeL11uyVAlGhzR6.jpg" alt=""/> */}
            
            
        </div>
        <div className="item-infos">
            <h3>{props.el.title}</h3>
            <h3>{props.el.id}</h3>
            <h3>{props.el.release_date}</h3>

        </div>
    </div>
</Link>
</>
);
}

export default SliderItem;