import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, url, onClick }) => {
  // console.log('ImageGalleryItem >>>>>>>');
  return (
    <li id={id} className={css.ImageGalleryItem} onClick={onClick}>
      <img className={css['ImageGalleryItem-image']} src={url} alt="foto" />
    </li>
  );
};

PropTypes.Searchbar = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
