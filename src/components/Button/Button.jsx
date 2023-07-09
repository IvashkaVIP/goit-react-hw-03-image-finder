import PropTypes from 'prop-types';

import css from './Button.module.css';

export const Button = ({ handleButtonClick }) => (
  <button className={css.Button} type="button" onClick={handleButtonClick}>
    Load more
  </button>
);

PropTypes.ImageGallery = {
  handleButtonClick: PropTypes.func.isRequired,
};
