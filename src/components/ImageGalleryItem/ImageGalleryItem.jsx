import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({id, url}) => {
  // console.log('ImageGalleryItem >>>>>>>');
    return (
      <li id={id} className={css.ImageGalleryItem}>
        <img className={css['ImageGalleryItem-image']} src={url} alt="foto" />
      </li>
    );
}