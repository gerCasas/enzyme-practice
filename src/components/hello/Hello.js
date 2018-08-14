import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => {


  // return <p>Hello, {props.name}!</p>;

		if (props.name) {
				return <p>Hello, {props.name}!</p>;
		} else {
				return <div>HOLA</div>;
		}

};

Hello.propTypes = {
  name: PropTypes.string,
};

// Hello.defaultProps = {
//   name: 'Unknown',
// };

export default Hello;
