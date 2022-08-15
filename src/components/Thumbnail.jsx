import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import './Thumbnail.css';


const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt={props.title} />
        <div className="title">{props.title}</div>
        <div className="category">#{props.category}</div>
        <div className="price">price {props.price}</div>
      </Link>
    </div>
  );
}


export default Thumbnail;