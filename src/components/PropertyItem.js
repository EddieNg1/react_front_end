import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({id,title,image,price}) => {
    return  (
  
      <div className="card">
  
        <Link to = {`/properties/${id}`}> 
            <img className="card-img-top" src={image} alt="" style={{
            height: 200}}/>   
        </Link> 
  
        <div className="card-body">
            <h3 className="card-title" style={{marginBottom:"100px"}}>{title}</h3>
            <div style={{position:"absolute", bottom:"0", marginBottom:"20px"}}>
            <p className="card-text" >${price} per night</p>
            <Link to = {`/properties/${id}`} className="btn btn-info">
            More Info 
        </Link> 
        </div>
        </div>

        
  
    </div>
  
    );
  };
  
  export default PropertyItem;