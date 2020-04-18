import React from 'react';

const SliderItem = (props) => {
    return ( 
        <>
        <div className="slider-item">
            <h3>{props.el.title}</h3>
            <h3>{props.el.id}</h3>
            <h3>{props.el.release_date}</h3>
        </div>
        </>
     );
}
 
export default SliderItem;