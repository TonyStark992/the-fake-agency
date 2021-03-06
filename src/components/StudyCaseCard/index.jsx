import React from 'react';
import { Link } from 'react-router-dom';

const StudyCaseCard = ({ study }) => {
  return (
    <div className="card text-center" style={{ width: "18rem", backgroundColor: '#343A40' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>{study.name}</h5>
        <p className="card-text">{/*TO DO*/}</p>
        <Link to={`/works/${study.slug}`} className="btn btn-primary">Go</Link>
      </div>
    </div>
  );
}

export default StudyCaseCard;