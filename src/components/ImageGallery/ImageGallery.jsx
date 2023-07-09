import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  // console.log('ImageGallery >>>>>>>');
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} url={image.webformatURL} />
      ))}
    </ul>
  );
};

PropTypes.ImageGallery = {
  images: PropTypes.array.isRequired,
};
