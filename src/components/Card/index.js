import React from "react";
import "./style.css";


  // The render method returns the JSX that should be rendered
  function Card(props) {
    return (
      <div className="card">
        <div className="card" onClick={() => props.selectedImage(props.id)}>
          <div className="img-container">
            <img alt={props.alt} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Occupation:</strong> {props.occupation}
              </li>
              <li>
                <strong>Location:</strong> {props.location}
              </li>
            </ul>

            <span
              onClick={() => props.removeCard(props.id)}
              className="remove"
            >
              𝘅
            </span>
          </div>
        </div>
      </div>
    );
  }


export default Card;