import React from 'react';

const Card = (props) => {
  return (
    <div className="center-card">
      {props.children}
      <footer className='center-card__footer'> Bruno Resende &copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Card;
