import PropTypes from 'prop-types';

export const App = ({ children }) => <div style={{width: `100vw`}}>{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};


export default App;
