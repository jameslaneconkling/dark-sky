import React                   from 'react';
import {
  node
}                              from 'prop-types';
import                              './style.scss';


const Error = ({ children }) => (
  <div
    className="error"
  >
    {children}
  </div>
);


Error.propTypes = {
  children: node
};

export default Error;
