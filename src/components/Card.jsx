import React from 'react'
import PropTypes from 'prop-types'

function Card({headers, contents, children}) {
  return (
    <React.Fragment>
    <div className="card">
      {children}
      <div className="card__body">
        <h5 className="card__title">{headers}</h5>
        <p className="card__text">{contents}</p>
        <a href="#" className="btn btn--primary">Go somewhere</a>
      </div>
    </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  headers: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
}

export default Card
