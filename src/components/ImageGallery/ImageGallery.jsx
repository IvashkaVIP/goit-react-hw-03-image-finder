import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  //  console.log('ImageGallery >>>>>>>  ', images );
  return (
    <ul className={css.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          id={index}
          url={image.webformatURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

PropTypes.ImageGallery = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
