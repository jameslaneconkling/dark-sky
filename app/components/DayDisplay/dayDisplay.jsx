import React                   from 'react';
import {
  string
}                              from 'prop-types';
import                              './style.scss';


const DayDisplay = ({ summary, icon }) => (
  <div
    className="day-display"
  >
    <p className="summary">{summary}</p>
  </div>
);


DayDisplay.propTypes = {
  summary: string.isRequired,
  icon: string.isRequired
};

export default DayDisplay;
