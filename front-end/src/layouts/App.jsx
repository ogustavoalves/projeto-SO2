import PropTypes from 'prop-types';
import '../assets/styles/App.css'
export const App = ({ children }) => <div style={{width: `100vw`}}>{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};


export default App;
