import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const item = ({ outerClass = '', imgUrl, imgAlt, title, amount, handleClick }) => {

  return (
    <div className={`item ${outerClass}`} onClick={handleClick}>
      <div className="item-image">
        <img
          src={imgUrl}
          alt={imgAlt}
        />
      </div>
      <div className="item-info">
        <div>
          {title}
        </div>
        <div>
          {`${amount} viewers`}
        </div>
      </div>
    </div>
  );
};

const { string, oneOfType, number, func } = PropTypes;

item.propTypes = {
  outerClass: string,
  imgUrl: string,
  imgAlt: string,
  title: string,
  amount: oneOfType([string, number]),
  handleClick: func
};

export default item;