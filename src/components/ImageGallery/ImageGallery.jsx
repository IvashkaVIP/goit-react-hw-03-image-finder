import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ id, webformatURL }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem></ImageGalleryItem>
    </ul>
  );
};


PropTypes.ImageGallery = {

}
