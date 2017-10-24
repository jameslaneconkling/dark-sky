/* eslint-disable no-shadow */
import { connect }     from 'react-redux';
import {
  compose,
  withHandlers
}                      from 'recompose';
import {
  setSettingsIsOpen
}                      from '../../redux/modules/preferences';
import {
  getSettingsIsOpen
}                      from '../../selectors/preferences';
import Header          from '../../components/Header';


export default compose(
  connect(
    state => ({
      settingsIsOpen: getSettingsIsOpen(state)
    }),
    { setSettingsIsOpen }
  ),
  withHandlers({
    toggleSettings: ({ settingsIsOpen, setSettingsIsOpen }) => () =>
      setSettingsIsOpen(!settingsIsOpen)
  })
)(Header);
