import React from 'react';

const Card = (props) => {
  return (
    <div className="general-card">
      {props.children}
      <footer> Bruno Resende &copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Card;
