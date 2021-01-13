import React from 'react';
import "./Card.css";

function Card({title,price,service1,service2,service3,service4,service5,buttonname}){
	return(
		
		<div className="card">
		  <div className="title">
		    <h3>{title}</h3>
		    </div>
		  
		      <div className="price">
		      <h1>${price}</h1>
		      </div>
		        

		     <div className="service">
		      
		      <p className="service1">{service1}</p>
		      <p className="service2">{service2}</p>
		      <p className="service1">{service3}</p>
		      <p className="service2">{service4}</p>
		      <p className="service1">{service5}</p>
		     
           </div>
           
              <button className="button" >{buttonname}</button>
              

          </div>
	);
}
export default Card;