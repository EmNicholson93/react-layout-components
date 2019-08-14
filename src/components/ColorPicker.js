import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ count }) {
  return (
    <div className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => count()}>Red</button>
      <button className={styles.green} onClick={() => count()}>Green</button>
      <button className={styles.blue} onClick={() => count()}>Blue</button>
    </div>
  );
}

ColorPicker.propTypes = {
  selectColor: PropTypes.func.isRequired,
  count: PropTypes.func.isRequired
};

export default ColorPicker;
