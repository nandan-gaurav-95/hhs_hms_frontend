import React from 'react';

function Card({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <button>Proceed</button>
    </div>
  );
}

export default Card;
