import React from 'react';

type Props = {
  children: Array<JSX.Element>;
};
const Card = (props: Props) => {
  return (
    <div className="center-card">
      {props.children}
      <footer className="center-card__footer">
        {' '}
        Bruno Resende &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Card;
