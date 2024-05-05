import React from 'react';
import './CoreConcept.css';

function CoreConcept(props: { title: string, description: string, image: string }) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
  }

export default CoreConcept